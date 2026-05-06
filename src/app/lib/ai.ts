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
    const outputFormat =
        'Format your response using Markdown when it improves readability.'

    const response = streamText({
        model: selectedModel,
        messages: convertedMessages,
        system: outputFormat,
    })

    console.log('response:', response)
    return response
}

// code below for dev test only
const testParams: StreamingResponseProps = {
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
