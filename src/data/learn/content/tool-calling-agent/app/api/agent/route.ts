import {
    convertToModelMessages,
    stepCountIs,
    streamText,
    type UIMessage,
} from 'ai'
import { openai } from '@ai-sdk/openai'
import { agentTools } from '../../../lib/tools'

export const runtime = 'edge'

type AgentRequestBody = {
    messages?: UIMessage[]
}

export async function POST(req: Request) {
    const { messages = [] } = (await req.json()) as AgentRequestBody

    const result = streamText({
        model: openai('gpt-4o'),
        tools: agentTools,
        stopWhen: stepCountIs(5),
        system: 'You are a helpful agent. Use tools for weather, calculations, and current-looking information instead of guessing.',
        messages: await convertToModelMessages(messages, { tools: agentTools }),
    })

    return result.toUIMessageStreamResponse({ originalMessages: messages })
}
