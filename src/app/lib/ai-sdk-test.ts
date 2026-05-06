import { streamText, convertToModelMessages } from 'ai'
import { openai } from '@ai-sdk/openai'
import { bedrock } from '@ai-sdk/amazon-bedrock'
import { StreamingResponseProps } from '@/types/components'
import { MODELS } from '@/data/models'

const bedrockModel = MODELS.bedrock.haiku
const openaiModel = MODELS.openai.fast

function selectModel(provider: string) {
    if (provider === 'bedrock') {
        return bedrock(bedrockModel)
    } else {
        return openai(openaiModel)
    }
}

export async function getStreamingResponse({
    messages,
    system,
}: StreamingResponseProps) {
    const provider = process.env.AI_PROVIDER || 'openai'

    const selectedModel = selectModel(provider)
    const convertedMessages = await convertToModelMessages(messages)

    const response = streamText({
        model: selectedModel,
        messages: convertedMessages,
        system,
    })

    console.log('response:', response)
    return response
}

const params: StreamingResponseProps = {
    messages: [
        {
            id: '1',
            role: 'user',
            parts: [{ type: 'text', text: 'Say hello in one sentence.' }],
        },
    ],
    system: 'You are incapable of speaking in short sentences.',
}

// getStreamingResponse(params)
