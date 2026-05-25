import { openai } from '@ai-sdk/openai'
import { bedrock } from '@ai-sdk/amazon-bedrock'
import { streamText, convertToModelMessages } from 'ai'
import { StreamingResponseProps } from '@/types/components'

import {
    outputFormat,
    systemModifiers,
    constraintLevels,
    taskTypes,
} from '@/data/ai/prompts'
import { ALL_MODELS } from '@/data/ai/models'

const bedrockModel = ALL_MODELS.bedrock.haiku
const openaiModel = ALL_MODELS.openai.fast

function selectModel(provider: string) {
    if (provider === 'bedrock') {
        return bedrock(bedrockModel)
    } else {
        return openai(openaiModel)
    }
}

export async function getStreamingResponse({
    messages,
    fileName,
    fileContent,
    cursorLine,
    selectedTask,
    selectedConstraint,
}: StreamingResponseProps) {
    const t0 = Date.now()
    const provider = process.env.AI_PROVIDER || 'openai'
    const modelName = provider === 'bedrock' ? bedrockModel : openaiModel
    const selectedModel = selectModel(provider)
    const convertedMessages = await convertToModelMessages(messages)

    const fileContext = fileName
        ? `The user is currently viewing: ${fileName} (cursor at line ${cursorLine ?? 1})\n\nFile contents:\n\`\`\`\n${fileContent}\n\`\`\``
        : ''

    const systemPrompt = `

${systemModifiers.role}

${systemModifiers.guardrail}

${systemModifiers.precedence}

${taskTypes[selectedTask.key]}

${constraintLevels[selectedConstraint.level]}

**File Context:**
\`\`\`
${fileContext ?? 'None'}
\`\`\`

${outputFormat.markdown}

    `.trim()

    let tPreStream = 0
    let firstChunkLogged = false

    const response = streamText({
        model: selectedModel,
        messages: convertedMessages,
        system: systemPrompt,
        providerOptions: {
            openai: { reasoningEffort: 'minimal' },
        },
        onChunk: () => {
            if (firstChunkLogged) return
            firstChunkLogged = true
            console.log(
                `[chat] ttft=${Date.now() - t0}ms preStream=${tPreStream}ms model=${modelName} provider=${provider} task=${selectedTask.key} constraint=${selectedConstraint.level}  msgCount=${messages.length} sysChars=${systemPrompt.length}`,
            )
        },
    })

    tPreStream = Date.now() - t0

    return response
}
