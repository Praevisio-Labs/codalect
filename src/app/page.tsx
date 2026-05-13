'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

import { DEMO_FILES } from '@/data/ide/demo-files'
import { projectData } from '@/data/learn/projects'
import Header from '@/components/Header'
import FileTree from '@/components/ide/FileTree'
import CodeEditor from '@/components/ide/CodeEditor'
import AssistantPanel from '@/components/ide/AssistantPanel'
import CollapsiblePanel from '@/components/ide/CollapsiblePanel'

function Page() {
    const [theme, setTheme] = useState('raisin')
    const [isContextHidden, setIsContextHidden] = useState(false)

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

    const [cursorLine, setCursorLine] = useState(1)
    const [highlightedText, setHighlightedText] = useState({
        isActive: false,
        content: '',
        start: 0,
        end: 0,
    })

    const searchParams = useSearchParams()
    const moduleID = searchParams.get('module')
    const workspace = moduleID
        ? projectData.find((proj) => proj.id === moduleID)
        : null

    const workspaceFiles = workspace ? workspace.files : DEMO_FILES
    const [selectedFile, setSelectedFile] = useState(workspaceFiles[0])
    const [fileEdits, setFileEdits] = useState<Record<string, string>>({})

    const activeContent = highlightedText.isActive
        ? highlightedText.content
        : (fileEdits[selectedFile.name] ?? selectedFile.content)

    function handleContentChange(content: string) {
        setFileEdits((prev) => ({
            ...prev,
            [selectedFile.name]: content,
        }))
    }

    return (
        <main className={`flex flex-col w-full h-dvh bg-page overflow-hidden`}>
            <Header
                theme={theme}
                setTheme={setTheme}
                path="/learn"
                linkText="Learn"
            />
            <div className="flex-1 min-h-0 flex flex-col gap-1 p-1 overflow-y-auto md:flex-row md:overflow-hidden">
                <CollapsiblePanel
                    title="Explorer"
                    className="order-1 rounded-sm overflow-hidden bg-panel md:order-1 md:h-full md:flex-1 md:rounded-bl-lg"
                    contentClassName="max-md:max-h-56 max-md:overflow-y-auto">
                    <FileTree
                        files={workspaceFiles}
                        selected={selectedFile}
                        onSelect={setSelectedFile}
                    />
                </CollapsiblePanel>
                <div
                    className={`order-2 h-[62dvh] min-h-[360px] flex flex-col rounded-sm overflow-hidden bg-editor md:order-2 md:h-full md:min-h-0 md:flex-[4_4_0%]`}>
                    <CodeEditor
                        file={selectedFile}
                        theme={theme}
                        onCursorChange={setCursorLine}
                        onHighlightChange={setHighlightedText}
                        onContentChange={handleContentChange}
                    />
                </div>
                <CollapsiblePanel
                    title="Assistant"
                    className="order-3 rounded-sm overflow-hidden bg-panel md:h-full md:flex-[3_3_0%] md:rounded-br-lg"
                    contentClassName="max-md:h-[56dvh] max-md:overflow-hidden">
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
