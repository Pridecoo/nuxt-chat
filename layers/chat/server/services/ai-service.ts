import { generateText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import type { Message, LanguageModelV1 } from "ai";

export const createOpenAIModel = (apiKey: string) => {
  const openai = createOpenAI({
    apiKey
  })

  return openai('gpt-4o-mini')
}

export async function generateChatResponse(
  model: LanguageModelV1,
  messages: Message[]
) {
  if (!Array.isArray(messages) || !messages.length) {
    throw new Error('Invalid messages format!')
  }

  const response = await generateText({
    system: 'You are helping users with their tasks but in your answers you are also using sarcasm and mocking them.',
    model,
    messages
  })

  return response.text.trim()
}

export async function generateChatTitle(model: LanguageModelV1, firstMessage: string): Promise<string> {
  const response = await generateText({
    model,
    messages: [
      {
        role: 'system',
        content: `Summarize me this in 3 or less short words: ${firstMessage}`
      },
      // TODO maybe will need to uncomment and fix somehow.
      // {
      //   role: 'user',
      //   content: 'firstMessage'
      // }
    ]
  })

  return response.text.trim()
}