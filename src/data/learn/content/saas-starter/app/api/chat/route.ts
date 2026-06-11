import { convertToModelMessages, streamText, type UIMessage } from 'ai'
import { openai } from '@ai-sdk/openai'
import { personas } from '../../../lib/personas'

export const runtime = 'edge'

type ChatRequestBody = {
    messages?: UIMessage[]
    personaId?: string
}

export async function POST(req: Request) {
    const { messages = [], personaId } = (await req.json()) as ChatRequestBody
    const persona =
        personas.find((candidate) => candidate.id === personaId) ?? personas[0]

    const result = streamText({
        model: openai('gpt-4o-mini'),
        system: persona.systemPrompt,
        messages: await convertToModelMessages(messages),
    })

    return result.toUIMessageStreamResponse({ originalMessages: messages })
}
