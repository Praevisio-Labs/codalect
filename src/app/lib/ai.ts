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
    fileName,
    fileContent,
    cursorLine,
}: StreamingResponseProps) {
    const provider = process.env.AI_PROVIDER || 'openai'

    const selectedModel = selectModel(provider)
    const convertedMessages = await convertToModelMessages(messages)
    const outputFormat =
        'Format your response using Markdown when it improves readability.'

    const systemPrompt = `
    
You are a coding assistant helping a learner understand their code.

${system}

The user is currently viewing: ${fileName ?? 'unknown file'} (cursor at line ${cursorLine ?? 1})

File contents:
\`\`\`
${fileContent ?? ''}
\`\`\`

${outputFormat}

    `.trim()

    const response = streamText({
        model: selectedModel,
        messages: convertedMessages,
        system: systemPrompt,
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
