import { getStreamingResponse } from '@/app/lib/ai'

export async function POST(request: Request) {
    const tRoute = Date.now()
    const {
        messages,
        fileName,
        fileContent,
        cursorLine,
        selectedTask,
        selectedConstraint,
    } = await request.json()

    const streamResponse = await getStreamingResponse({
        messages,
        fileName,
        fileContent,
        cursorLine,
        selectedTask,
        selectedConstraint,
    })

    const response = streamResponse.toUIMessageStreamResponse()

    console.log(`[chat] routeOverhead=${Date.now() - tRoute}ms`)

    return response
}
