import { getStreamingResponse } from '@/app/lib/ai-sdk-test'

export async function POST(request: Request) {
    const body = await request.json()

    const messages = body.messages
    const system = body.system

    const streamResponse = await getStreamingResponse({
        messages,
        system,
    })

    const response = streamResponse.toUIMessageStreamResponse()

    return response
}
