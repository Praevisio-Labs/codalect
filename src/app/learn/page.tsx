'use client'

import { useState } from 'react'
import { sora } from '@/app/ui/fonts'
import ThemeSelect from '@/components/ThemeSelect'
import ModuleCard from '@/components/ModuleCard'
import { projectData } from '@/data/modules'

export default function Page() {
    const [theme, setTheme] = useState('raisin')

    return (
        <main
            className={`flex flex-col w-full h-screen bg-${theme}-gap overflow-hidden`}>
            <div className={`flex justify-between bg-${theme}-page p-2`}>
                <h1
                    className={`${sora.className} text-${theme}-font-primary text-2xl`}>
                    Raisin.IDE
                </h1>
                <ThemeSelect theme={theme} setTheme={setTheme} />
            </div>
            <div className="flex-none p-6 overflow-auto">
                <h2
                    className={`text-${theme}-font-tertiary text-4xl font-semibold mb-4`}>
                    Project Modules
                </h2>
            </div>
            <div className="flex-1 flex justify-center items-center gap-5">
                {projectData.map((project, index) => (
                    <ModuleCard
                        key={index}
                        theme={theme}
                        name={project.name}
                        description={project.description}
                    />
                ))}
            </div>
        </main>
    )
}
