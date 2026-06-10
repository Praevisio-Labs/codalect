import { useState, lazy, Suspense } from 'react'
import { useSandpack, useActiveCode } from '@codesandbox/sandpack-react'
import type { SandpackFile } from '@codesandbox/sandpack-react'

import type { File } from '@/types/index'
import { IDEPanelsProps } from '@/types/components'

import FileTree from '@/components/ide/FileTree'
import CodeEditor from '@/components/ide/CodeEditor'
import AssistantPanel from '@/components/ide/AssistantPanel'
import CollapsiblePanel from '@/components/ide/CollapsiblePanel'
import PreviewIcon from '@/components/icons/PreviewIcon'

const PreviewDrawer = lazy(() => import('@/components/ide/PreviewDrawer'))

export default function IDEPanels({ theme }: IDEPanelsProps) {
    const { sandpack } = useSandpack()
    const { code } = useActiveCode()

    const [isPreviewOpen, setIsPreviewOpen] = useState(false)
    const [hasOpenedPreview, setHasOpenedPreview] = useState(false)

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

    function openPreview() {
        setHasOpenedPreview(true)
        setIsPreviewOpen(true)
    }

    return (
        <div
            className={`
                    h-full gap-1 p-1
                    overflow-hidden
                    flex flex-col md:flex-row
                `}>
            <div className="relative order-1 flex flex-col md:flex-row flex-1 md:flex-[5_5_0%] min-h-0 gap-1 overflow-hidden">
                {/* Preview Drawer */}
                {hasOpenedPreview && (
                    <Suspense fallback={null}>
                        <PreviewDrawer
                            isOpen={isPreviewOpen}
                            onClose={() => setIsPreviewOpen(false)}
                        />
                    </Suspense>
                )}

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
                        relative order-2
                        flex-1 md:flex-[4_4_0%]
                        max-md:min-h-3/10 md:h-full md:min-h-0
                        overflow-hidden rounded-sm bg-editor
                        flex flex-col
                    `}>
                    {/* Open Preview */}
                    <button
                        type="button"
                        onClick={openPreview}
                        aria-label="Open preview"
                        className="group absolute right-1.5 top-1.5 z-10 cursor-pointer rounded-xs bg-accent-bright p-0.5 text-font-apex shadow">
                        <PreviewIcon className="size-5 grayscale-0 transition group-hover:grayscale" />
                        <span className="absolute top-full right-0 mt-1 px-1.5 py-0.5 rounded-sm bg-panel text-font-apex text-[9px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
                            Open preview
                        </span>
                    </button>
                    <CodeEditor
                        file={activeFile}
                        theme={theme}
                        onCursorChange={setCursorLine}
                        onHighlightChange={setHighlightedText}
                    />
                </div>
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
                    textSelection={highlightedText}
                    isContextHidden={isContextHidden}
                    setIsContextHidden={setIsContextHidden}
                />
            </CollapsiblePanel>
        </div>
    )
}
