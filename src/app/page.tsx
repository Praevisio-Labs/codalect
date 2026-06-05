'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { SandpackProvider } from '@codesandbox/sandpack-react'

import { DEMO_FILES } from '@/data/ide/demo-files'
import { projectData } from '@/data/learn/projects'
import { loadFiles } from '@/app/utils/sandpack'

import Header from '@/components/Header'
import IDEPanels from '@/components/ide/IDEPanels'

function Page() {
    const [theme, setTheme] = useState('raisin')

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
            <Header
                theme={theme}
                setTheme={setTheme}
                path="/learn"
                linkText="Learn"
            />
            <SandpackProvider
                key={moduleID ?? 'sandbox'}
                template="react-ts"
                files={loadFiles(workspaceFiles)}
                style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}
                options={{
                    activeFile: workspaceFiles[0]?.path,
                    visibleFiles: workspaceFiles.map((file) => file.path),
                }}>
                <IDEPanels theme={theme} />
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
