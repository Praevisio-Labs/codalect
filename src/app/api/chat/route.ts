import { getStreamingResponse } from '@/app/lib/ai'

export async function POST(request: Request) {
    const { messages, system, fileName, fileContent, cursorLine } =
        await request.json()

    const streamResponse = await getStreamingResponse({
        messages,
        system,
        fileName,
        fileContent,
        cursorLine,
    })

    const response = streamResponse.toUIMessageStreamResponse()

    return response
}
