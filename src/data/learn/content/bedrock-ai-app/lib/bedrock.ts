import { createAmazonBedrock } from '@ai-sdk/amazon-bedrock'

export const bedrock = createAmazonBedrock({
    region: process.env.AWS_REGION ?? 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

export const MODELS = {
    claudeSonnet: 'anthropic.claude-3-5-sonnet-20241022-v2:0',
    claudeHaiku: 'anthropic.claude-3-haiku-20240307-v1:0',
} as const

export type BedrockModelId = (typeof MODELS)[keyof typeof MODELS]

export function isBedrockModelId(modelId: unknown): modelId is BedrockModelId {
    return Object.values(MODELS).includes(modelId as BedrockModelId)
}
