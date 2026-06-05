import { useState } from 'react'
import { useSandpack, useActiveCode } from '@codesandbox/sandpack-react'
import type { SandpackFile } from '@codesandbox/sandpack-react'

import type { File } from '@/types/index'
import { IDEPanelsProps } from '@/types/components'

import FileTree from '@/components/ide/FileTree'
import CodeEditor from '@/components/ide/CodeEditor'
import AssistantPanel from '@/components/ide/AssistantPanel'
import CollapsiblePanel from '@/components/ide/CollapsiblePanel'

export default function IDEPanels({ theme }: IDEPanelsProps) {
    const { sandpack } = useSandpack()
    const { code } = useActiveCode()

    const [isContextHidden, setIsContextHidden] = useState(false)
    const [isFileTreeOpen, setIsFileTreeOpen] = useState(false)
    const [isAssistantPanelOpen, setIsAssistantPanelOpen] = useState(false)

    const [cursorLine, setCursorLine] = useState(1)
    const [highlightedText, setHighlightedText] = useState({
        isActive: false,
        content: '',
        start: 0,
        end: 0,
    })

    const files: File[] = sandpack.visibleFiles.map((path) => ({
        path,
        content: (sandpack.files[path] as SandpackFile).code,
    }))

    const activeFile: File = {
        path: sandpack.activeFile,
        content: code,
    }

    const assistantFileContent = highlightedText.isActive
        ? highlightedText.content
        : code

    return (
        <div
            className={`
                    h-full gap-1 p-1
                    overflow-hidden
                    flex flex-col md:flex-row
                `}>
            {/* File Tree */}
            <CollapsiblePanel
                title="Explorer"
                isOpen={isFileTreeOpen}
                onToggle={() => setIsFileTreeOpen(!isFileTreeOpen)}
                className={`
                        order-1
                        rounded-sm md:rounded-bl-lg
                        overflow-hidden bg-panel
                        flex-none md:h-full md:flex-1
                        ${isFileTreeOpen ? 'max-md:h-2/10' : ''}
                    `}>
                <FileTree
                    files={files}
                    selected={activeFile}
                    onSelect={(file) => sandpack.setActiveFile(file.path)}
                />
            </CollapsiblePanel>
            {/* Monaco Editor */}
            <div
                className={`
                        order-2
                        flex-1 md:flex-[4_4_0%]
                        max-md:min-h-3/10 md:h-full md:min-h-0
                        overflow-hidden rounded-sm bg-editor
                        flex flex-col
                    `}>
                <CodeEditor
                    file={activeFile}
                    theme={theme}
                    onCursorChange={setCursorLine}
                    onHighlightChange={setHighlightedText}
                />
            </div>
            {/* Assistant Panel */}
            <CollapsiblePanel
                title="Assistant"
                isOpen={isAssistantPanelOpen}
                onToggle={() => setIsAssistantPanelOpen(!isAssistantPanelOpen)}
                className={`
                        order-3
                        rounded-sm md:rounded-br-lg
                        overflow-hidden bg-panel
                        flex-none md:h-full md:flex-[3_3_0%]
                        ${isAssistantPanelOpen ? 'max-md:h-4/10' : ''}

                    `}>
                <AssistantPanel
                    file={activeFile}
                    cursorLine={cursorLine}
                    fileContent={assistantFileContent}
                    textSelection={highlightedText}
                    isContextHidden={isContextHidden}
                    setIsContextHidden={setIsContextHidden}
                />
            </CollapsiblePanel>
        </div>
    )
}
