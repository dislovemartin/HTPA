import { createClient } from "@/lib/supabase/client"
import { getNvidiaClient, callNvidiaAPI } from "@/lib/nvidia-service"

// Function to embed text using NVIDIA's embedding model
export async function embedText(text: string): Promise<number[]> {
  const { apiKey, baseUrl } = getNvidiaClient()

  try {
    const response = await fetch(`${baseUrl}/embeddings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "nvidia/nv-embedqa-e5-v5",
        input: text,
      }),
    })

    if (!response.ok) {
      throw new Error(`NVIDIA API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data.data[0].embedding
  } catch (error) {
    console.error("Error generating embeddings:", error)
    throw error
  }
}

// Function to ingest documents into the vector database
export async function ingestDocument(
  title: string,
  content: string,
  metadata: Record<string, any> = {},
): Promise<string> {
  try {
    // Split content into chunks (simple approach - can be improved)
    const chunks = splitIntoChunks(content, 1000)
    const supabase = createClient()

    // Process each chunk
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i]
      const embedding = await embedText(chunk)

      // Store in Supabase
      const { error, data } = await supabase.from("documents").insert({
        title,
        content: chunk,
        embedding,
        metadata: {
          ...metadata,
          chunk_index: i,
          total_chunks: chunks.length,
        },
      })

      if (error) throw error
    }

    return `Successfully ingested document: ${title} (${chunks.length} chunks)`
  } catch (error) {
    console.error("Error ingesting document:", error)
    throw error
  }
}

// Function to retrieve relevant documents based on a query
export async function retrieveRelevantDocuments(query: string, limit = 5): Promise<any[]> {
  try {
    const queryEmbedding = await embedText(query)
    const supabase = createClient()

    // Perform vector similarity search
    const { data, error } = await supabase.rpc("match_documents", {
      query_embedding: queryEmbedding,
      match_threshold: 0.5,
      match_count: limit,
    })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error("Error retrieving documents:", error)
    return []
  }
}

// Function to generate a response using RAG
export async function generateRAGResponse(query: string, userId?: string, conversationId?: string): Promise<string> {
  try {
    // Retrieve relevant documents
    const relevantDocs = await retrieveRelevantDocuments(query)

    // Format context from retrieved documents
    let context = "Based on the following information:\n\n"
    relevantDocs.forEach((doc, index) => {
      context += `Document ${index + 1} (${doc.title}):\n${doc.content}\n\n`
    })

    // Generate response with context
    const systemPrompt = `You are an expert accounting and tax assistant for HTPA Accounting firm.
    You will be given some context information extracted from the company's knowledge base.
    Use this information to answer the user's question accurately and professionally.
    If the context doesn't contain relevant information to answer the question, acknowledge that
    and provide general guidance based on your knowledge.
    Always maintain a professional tone and provide bilingual responses in English and Chinese when appropriate.`

    const prompt = `${context}\n\nUser question: ${query}\n\nPlease provide a helpful response.`

    const response = await callNvidiaAPI(prompt, systemPrompt)

    // Store the conversation and context if userId is provided
    if (userId) {
      const supabase = createClient()

      // Create or update conversation
      const conversationData = {
        user_id: userId,
        last_query: query,
        last_response: response,
        context_docs: relevantDocs.map((doc) => ({ id: doc.id, title: doc.title })),
        updated_at: new Date().toISOString(),
      }

      if (conversationId) {
        await supabase.from("rag_conversations").update(conversationData).eq("id", conversationId)
      } else {
        const { data } = await supabase
          .from("rag_conversations")
          .insert({ ...conversationData, created_at: new Date().toISOString() })
          .select()

        conversationId = data?.[0]?.id
      }

      // Store the message
      await supabase.from("rag_messages").insert({
        conversation_id: conversationId,
        user_id: userId,
        role: "user",
        content: query,
        created_at: new Date().toISOString(),
      })

      await supabase.from("rag_messages").insert({
        conversation_id: conversationId,
        user_id: userId,
        role: "assistant",
        content: response,
        context_docs: relevantDocs.map((doc) => ({ id: doc.id, title: doc.title })),
        created_at: new Date().toISOString(),
      })
    }

    return response
  } catch (error) {
    console.error("Error generating RAG response:", error)
    return "I apologize, but I encountered an error while processing your request. Please try again later."
  }
}

// Helper function to split text into chunks
function splitIntoChunks(text: string, maxChunkSize: number): string[] {
  const chunks: string[] = []
  let currentChunk = ""

  // Split by paragraphs first
  const paragraphs = text.split(/\n\s*\n/)

  for (const paragraph of paragraphs) {
    // If adding this paragraph would exceed the chunk size, start a new chunk
    if (currentChunk.length + paragraph.length > maxChunkSize && currentChunk.length > 0) {
      chunks.push(currentChunk)
      currentChunk = paragraph
    } else {
      currentChunk += (currentChunk.length > 0 ? "\n\n" : "") + paragraph
    }
  }

  // Add the last chunk if it's not empty
  if (currentChunk.length > 0) {
    chunks.push(currentChunk)
  }

  return chunks
}
