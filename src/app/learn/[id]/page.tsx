'use client'

import { useState } from 'react'
import { sora, ibmPlexMono, manrope } from '@/app/ui/fonts'
import ThemeSelect from '@/components/ThemeSelect'
import { projectData } from '@/data/modules'

export default function Page() {
    const [theme, setTheme] = useState('raisin')

    const project = projectData[0]

    return (
        <main
            className={`
                flex flex-col w-full h-screen
                bg-${theme}-gap text-${theme}-font 
                overflow-hidden
                `}>
            <div className={`flex justify-between bg-${theme}-page p-2`}>
                <h1 className={`${sora.className} text-2xl`}>Raisin.IDE</h1>
                <ThemeSelect theme={theme} setTheme={setTheme} />
            </div>
            <div className="flex-none p-2">
                <h2
                    className={`${ibmPlexMono.className} text-${theme}-font text-xl font-bold mb-4`}>
                    {project.name}
                </h2>
            </div>
            <div className="flex-1 flex flex-col gap-12 p-3">
                {project.skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col text-lg font-semibold gap-2">
                        <h1 className={`${manrope.className}`}>{skill}</h1>
                        <div className="text-sm font-normal">{`<Content/>`}</div>
                    </div>
                ))}
            </div>
        </main>
    )
}
