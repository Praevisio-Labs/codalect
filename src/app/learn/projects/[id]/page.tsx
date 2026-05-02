'use client'

import { useState } from 'react'
import { sora } from '@/app/ui/fonts'
import ThemeSelect from '@/components/ThemeSelect'
import ModuleCard from '@/components/ModuleCard'
import { ModuleProps } from '@/types/components'
import { projectData } from '@/data/modules'

export default function Page() {
    const [theme, setTheme] = useState('raisin')
    return (
        <main
            className={`flex flex-col w-full h-screen bg-${theme}-gap overflow-hidden`}>
            <div className={`flex justify-between bg-${theme}-page p-2`}>
                <h1 className={`${sora.className} text-${theme}-font text-2xl`}>
                    Raisin.IDE
                </h1>
                <ThemeSelect theme={theme} setTheme={setTheme} />
            </div>
            <div className="flex-none p-6 overflow-auto">
                <h2
                    className={`text-${theme}-font text-4xl font-semibold mb-4`}>
                    {projectData[0].name}
                </h2>
            </div>
            <div className="flex-1 flex justify-center items-center gap-5">
                <div className="flex-1 flex justify-center items-center gap-5">
                    {projectData[0].skills.map((skill, index) => (
                        <ModuleCard key={index} theme={theme} name={skill} />
                    ))}
                </div>
            </div>
        </main>
    )
}
