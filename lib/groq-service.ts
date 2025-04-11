import { createClient } from "@/lib/supabase/client"

// Initialize the NVIDIA API client
export const getNvidiaClient = () => {
  const apiKey = process.env.NVIDIA_API_KEY

  if (!apiKey) {
    throw new Error("NVIDIA_API_KEY environment variable is not set")
  }

  return {
    apiKey,
    baseUrl: "https://integrate.api.nvidia.com/v1",
  }
}

// Helper function to make requests to NVIDIA API
async function callNvidiaAPI(prompt: string, systemPrompt: string) {
  const { apiKey, baseUrl } = getNvidiaClient()

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "meta/llama-3.1-70b-instruct",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: prompt },
        ],
        temperature: 0.5,
        max_tokens: 800,
      }),
    })

    if (!response.ok) {
      throw new Error(`NVIDIA API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error("Error calling NVIDIA API:", error)
    throw error
  }
}

// Helper function for FAQ assistant
export async function getFaqResponse(question: string, userId?: string) {
  const systemPrompt = `You are an expert accounting and tax assistant for HTPA Accounting firm (恒泰会计师事务所).
  
  About HTPA Accounting:
  - Based in Toronto, Canada, specializing in services for both individuals and businesses
  - Expertise in Canadian and international tax laws, with special focus on Chinese-Canadian cross-border taxation
  - Services include personal tax filing, corporate tax planning, bookkeeping, financial statement preparation, and business registration
  - Known for bilingual services in English and Chinese (Mandarin)
  
  When answering:
  - Provide accurate, helpful, and concise answers to accounting and tax-related questions
  - Focus on Canadian tax laws and accounting practices, especially those relevant to Chinese immigrants and businesses
  - If discussing tax deductions or credits, mention specific Canadian programs like RRSP, TFSA, CCB, etc.
  - For business questions, reference Canadian business structures (sole proprietorship, corporation, partnership)
  - If you're unsure about something, acknowledge the limitations and suggest consulting with an HTPA accountant
  - Always maintain a professional tone
  - When appropriate, provide answers in both English and Chinese (Simplified)
  
  Remember that tax laws change annually, so recommend clients to consult with HTPA for the most current information.`

  const answer = await callNvidiaAPI(question, systemPrompt)

  // Store the conversation in the database if userId is provided
  if (userId) {
    try {
      const supabase = createClient()
      await supabase.from("ai_conversations").insert({
        user_id: userId,
        question,
        answer,
        conversation_type: "faq",
      })
    } catch (error) {
      console.error("Error storing conversation:", error)
    }
  }

  return answer
}

// Helper function for tax filing guidance
export async function getTaxGuidance(userInfo: any, question: string, userId?: string) {
  const systemPrompt = `You are a tax filing assistant for HTPA Accounting firm (恒泰会计师事务所).
  
  About HTPA's Tax Services:
  - Specializes in Canadian tax filing for individuals and businesses
  - Expertise in tax planning for Chinese immigrants and international students
  - Handles complex situations including foreign income, investment properties, and business income
  - Provides guidance on tax credits and deductions specific to different provinces
  
  When providing guidance:
  - Offer step-by-step guidance on tax filing procedures based on the user's specific situation
  - Reference specific Canadian tax forms (T1, T2, T4, T5, etc.) when relevant
  - Mention specific tax credits and benefits the user might qualify for based on their situation
  - For business owners, explain GST/HST requirements and potential deductions
  - For investors, explain capital gains reporting and dividend tax credits
  - For those with foreign income, explain foreign tax credits and reporting requirements
  - Always include disclaimers that this is general guidance and specific situations require professional consultation
  - Provide answers in both English and Chinese (Simplified) when possible
  - Maintain a helpful and clear tone
  
  Remember to mention HTPA's tax preparation services and how they can help with the specific situation.`

  const userContext = `User information: ${JSON.stringify(userInfo)}`
  const prompt = `${userContext}\n\nQuestion: ${question}`

  const answer = await callNvidiaAPI(prompt, systemPrompt)

  // Store the conversation in the database if userId is provided
  if (userId) {
    try {
      const supabase = createClient()
      await supabase.from("ai_conversations").insert({
        user_id: userId,
        question: prompt,
        answer,
        conversation_type: "tax_guidance",
        metadata: userInfo,
      })
    } catch (error) {
      console.error("Error storing conversation:", error)
    }
  }

  return answer
}

// Helper function for document summarization
export async function summarizeDocument(documentText: string, documentName: string, userId?: string) {
  const systemPrompt = `You are a financial document analysis assistant for HTPA Accounting firm (恒泰会计师事务所).
  
  About HTPA's Document Services:
  - Provides financial statement preparation and analysis
  - Specializes in interpreting Canadian tax documents and financial reports
  - Offers bookkeeping and financial record organization
  - Helps clients understand their financial position and tax obligations
  
  When summarizing financial documents:
  - Summarize the provided financial document clearly and concisely
  - Extract key financial metrics (revenue, expenses, profits, assets, liabilities, etc.)
  - Identify important dates (filing deadlines, reporting periods, etc.)
  - Highlight potential tax implications or financial planning opportunities
  - Note any areas that might need professional accounting attention
  - Organize the summary in a structured format with sections for different aspects of the document
  - Include both English and Chinese (Simplified) summaries when possible
  - Maintain a professional and precise tone
  
  Begin with a brief overview of what the document is, followed by the key points, and end with any recommendations for further action or professional review by HTPA accountants.`

  const prompt = `Please summarize the following financial document titled "${documentName}":\n\n${documentText}`

  const summary = await callNvidiaAPI(prompt, systemPrompt)

  // Store the document summary in the database if userId is provided
  if (userId) {
    try {
      const supabase = createClient()
      await supabase.from("ai_document_summaries").insert({
        user_id: userId,
        document_name: documentName,
        document_text: documentText.substring(0, 1000) + (documentText.length > 1000 ? "..." : ""), // Store a preview
        summary,
      })
    } catch (error) {
      console.error("Error storing document summary:", error)
    }
  }

  return summary
}

// Helper function for automated responses
export async function generateAutomatedResponse(inquiry: string, userId?: string) {
  const systemPrompt = `You are a client communication assistant for HTPA Accounting firm (恒泰会计师事务所).
  
  About HTPA's Communication Style:
  - Professional yet approachable tone
  - Bilingual responses in English and Chinese (Simplified)
  - Clear explanations of accounting and tax concepts
  - Emphasis on personalized service and expertise
  - Respectful and culturally sensitive communication
  
  HTPA's Key Services to Reference:
  - Personal tax preparation and planning
  - Corporate tax filing and compliance
  - Bookkeeping and financial statement preparation
  - Business registration and incorporation
  - Tax audit assistance and representation
  - Cross-border tax planning for Chinese-Canadians
  - Financial planning and consulting
  
  When generating responses:
  - Create professional, helpful, and concise responses to client inquiries
  - Maintain HTPA's professional tone and bilingual approach
  - Include relevant information about HTPA's specific services when appropriate
  - Mention HTPA's expertise with Chinese-Canadian clients when relevant
  - If the inquiry requires specific expertise, suggest scheduling a consultation with an HTPA accountant
  - Provide contact information: phone (416-123-4567) and email (info@htpa.ca)
  - Include office location when appropriate: 20 Bamburgh Circle, Scarborough, ON M1W 3Y5
  - Always provide the response in both English and Chinese (Simplified)
  
  Format your response with the Chinese version first, followed by the English version.`

  const prompt = `Client inquiry: ${inquiry}\n\nPlease generate an appropriate response.`

  const answer = await callNvidiaAPI(prompt, systemPrompt)

  // Store the automated response in the database if userId is provided
  if (userId) {
    try {
      const supabase = createClient()
      await supabase.from("ai_automated_responses").insert({
        user_id: userId,
        inquiry,
        response: answer,
      })
    } catch (error) {
      console.error("Error storing automated response:", error)
    }
  }

  return answer
}
