'use client'

import { useState } from 'react'
import { lusitana } from '@/app/ui/fonts'

import { FILES } from '@/data/files'
import FileTree from '@/components/FileTree'
import CodeEditor from '@/components/CodeEditor'
import AssistantPanel from '@/components/AssistantPanel'
import ThemeSelect from '@/components/ThemeSelect'

export default function Home() {
    const [theme, setTheme] = useState('raisin')

    return (
        <main
            className={`flex flex-col w-full h-screen bg-${theme}-gap overflow-hidden`}>
            <div className={`flex justify-between bg-${theme}-page p-2`}>
                <h1
                    className={`${lusitana.className} text-${theme}-font text-2xl`}>
                    Raisin.IDE
                </h1>
                <ThemeSelect theme={theme} setTheme={setTheme} />
            </div>
            <div className="flex-1 flex gap-1 p-1 overflow-hidden">
                <div className={`flex-1 h-full rounded-sm bg-${theme}-panel`}>
                    <FileTree theme={theme} />
                </div>
                <div
                    className={`flex-4 h-full flex flex-col rounded-sm bg-${theme}-editor p-2`}>
                    <CodeEditor theme={theme} />
                </div>
                <div
                    className={`flex-3 h-full rounded-sm bg-${theme}-panel p-2`}>
                    <AssistantPanel theme={theme} />
                </div>
            </div>
        </main>
    )
}
