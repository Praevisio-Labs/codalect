'use client'

import { useState, useEffect } from 'react'
import { SandpackProvider } from '@codesandbox/sandpack-react'
import type { Workspace } from '@/types/index'

import Header from '@/components/Header'
import IDEPanels from '@/components/ide/IDEPanels'

export default function IDEWorkspace({ workspace }: { workspace: Workspace }) {
    const [theme, setTheme] = useState('raisin')

    useEffect(() => {
        document.documentElement.dataset.theme = theme
    }, [theme])

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
                key={workspace.key}
                template={workspace.template}
                files={workspace.files}
                theme="dark"
                style={{ flex: 1, minHeight: 0, overflow: 'hidden' }}
                options={{
                    activeFile: workspace.activeFile,
                    externalResources: [
                        'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
                    ],
                }}>
                <IDEPanels theme={theme} />
            </SandpackProvider>
        </main>
    )
}
