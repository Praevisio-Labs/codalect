import { convertToModelMessages, streamText, type UIMessage } from 'ai'
import {
    MODELS,
    bedrock,
    isBedrockModelId,
    type BedrockModelId,
} from '../../../lib/bedrock'

export const runtime = 'nodejs'

type ChatRequestBody = {
    messages?: UIMessage[]
    modelId?: string
}

function getStatusForBedrockError(error: unknown) {
    const name =
        typeof error === 'object' && error && 'name' in error
            ? String(error.name)
            : ''

    if (name.includes('Credentials')) return 401
    if (name.includes('Throttling')) return 429
    if (name.includes('AccessDenied') || name.includes('Unauthorized'))
        return 403

    return 500
}

export async function POST(req: Request) {
    const body = (await req.json()) as ChatRequestBody
    const selectedModel: BedrockModelId = isBedrockModelId(body.modelId)
        ? body.modelId
        : MODELS.claudeSonnet

    const messages = body.messages ?? []

    if (!Array.isArray(messages)) {
        return Response.json(
            { error: 'Missing chat messages.' },
            { status: 400 },
        )
    }

    try {
        const result = streamText({
            model: bedrock(selectedModel),
            messages: await convertToModelMessages(messages),
            system: 'You are a concise AWS Bedrock assistant. Explain tradeoffs clearly and call out credential setup when it matters.',
        })

        return result.toUIMessageStreamResponse({ originalMessages: messages })
    } catch (error) {
        console.error('Bedrock error:', error)

        return Response.json(
            {
                error: 'Bedrock could not complete the request. Check AWS credentials, region, and model access.',
            },
            { status: getStatusForBedrockError(error) },
        )
    }
}
