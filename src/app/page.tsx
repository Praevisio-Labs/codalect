'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { SandpackProvider } from '@codesandbox/sandpack-react'

import { DEMO_FILES } from '@/data/ide/demo-files'
import { projectData } from '@/data/learn/projects'
import { loadFiles } from '@/app/utils/sandpack'

import Header from '@/components/Header'
import FileTree from '@/components/ide/FileTree'
import CodeEditor from '@/components/ide/CodeEditor'
import AssistantPanel from '@/components/ide/AssistantPanel'
import CollapsiblePanel from '@/components/ide/CollapsiblePanel'

// Inner component - NTD: migrate to own file

import type { File } from '@/types/index'

interface IDEPanelsProps {
    theme: string
    workspaceFiles: File[]
    isContextHidden: boolean
    setIsContextHidden: (v: boolean) => void
    isFileTreeOpen: boolean
    setIsFileTreeOpen: (v: boolean) => void
    isAssistantPanelOpen: boolean
    setIsAssistantPanelOpen: (v: boolean) => void
}

function IDEPanels({
    theme,
    workspaceFiles,
    isContextHidden,
    setIsContextHidden,
    isFileTreeOpen,
    setIsFileTreeOpen,
    isAssistantPanelOpen,
    setIsAssistantPanelOpen,
}: IDEPanelsProps) {
    const [cursorLine, setCursorLine] = useState(1)
    const [highlightedText, setHighlightedText] = useState({
        isActive: false,
        content: '',
        start: 0,
        end: 0,
    })

    const [selectedFile, setSelectedFile] = useState(workspaceFiles[0])
    const [fileEdits, setFileEdits] = useState<Record<string, string>>({})

    const activeContent = highlightedText.isActive
        ? highlightedText.content
        : (fileEdits[selectedFile.path] ?? selectedFile.content)

    function handleContentChange(content: string) {
        setFileEdits((prev) => ({ ...prev, [selectedFile.path]: content }))
    }

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
                    files={workspaceFiles}
                    selected={selectedFile}
                    onSelect={setSelectedFile}
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
                    file={selectedFile}
                    theme={theme}
                    onCursorChange={setCursorLine}
                    onHighlightChange={setHighlightedText}
                    onContentChange={handleContentChange}
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
                    file={selectedFile}
                    cursorLine={cursorLine}
                    fileContent={activeContent}
                    textSelection={highlightedText}
                    isContextHidden={isContextHidden}
                    setIsContextHidden={setIsContextHidden}
                />
            </CollapsiblePanel>
        </div>
    )
}

// 3-panel IDE extracted

function Page() {
    const [theme, setTheme] = useState('raisin')
    const [isContextHidden, setIsContextHidden] = useState(false)
    const [isFileTreeOpen, setIsFileTreeOpen] = useState(false)
    const [isAssistantPanelOpen, setIsAssistantPanelOpen] = useState(false)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    const searchParams = useSearchParams()
    const moduleID = searchParams.get('module')
    const workspace = moduleID
        ? projectData.find((proj) => proj.id === moduleID)
        : null
    const workspaceFiles = workspace ? workspace.files : DEMO_FILES

    return (
        <main
            className={`
                w-full h-dvh 
                overflow-hidden bg-page 
                flex flex-col 
            `}>
            {/* Page Header */}
            <Header
                theme={theme}
                setTheme={setTheme}
                path="/learn"
                linkText="Learn"
            />
            {/* Sandpack wrapper */}
            <SandpackProvider
                key={moduleID ?? 'sandbox'}
                template="react-ts"
                files={loadFiles(workspaceFiles)}
                style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}
                options={{
                    activeFile: workspaceFiles[0]?.path,
                    visibleFiles: workspaceFiles.map((file) => file.path),
                }}>
                <IDEPanels
                    theme={theme}
                    workspaceFiles={workspaceFiles}
                    isContextHidden={isContextHidden}
                    setIsContextHidden={setIsContextHidden}
                    isFileTreeOpen={isFileTreeOpen}
                    setIsFileTreeOpen={setIsFileTreeOpen}
                    isAssistantPanelOpen={isAssistantPanelOpen}
                    setIsAssistantPanelOpen={setIsAssistantPanelOpen}
                />
            </SandpackProvider>
        </main>
    )
}

export default function SuspenseWrapper() {
    return (
        <Suspense fallback={null}>
            <Page />
        </Suspense>
    )
}
