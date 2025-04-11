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
export async function callNvidiaAPI(prompt: string, systemPrompt: string) {
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
