import type { AssistantContext } from '@/types/index'
import type { AssistantContextProps } from '@/types/components'

export function getAssistantContext({
    activeFile,
    selection,
    cursorLine,
    isContextHidden,
}: AssistantContextProps): AssistantContext | null {
    if (isContextHidden) {
        return null
    }

    const fileContent = selection.isActive
        ? selection.content
        : activeFile.content

    return {
        fileName: activeFile.path.slice(1),
        fileContent,
        cursorLine,
    }
}
