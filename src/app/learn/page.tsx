'use client'

import { useState } from 'react'
import { sora } from '@/app/ui/fonts'
import ThemeSelect from '@/components/ThemeSelect'

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
                <h2 className={`text-${theme}-font text-5xl font-bold mb-4`}>Skills Modules</h2>
            </div>
            <div className="flex-1 flex justify-center items-center gap-5">
                <div className={`
                    flex flex-col justify-center items-center
                    w-50 h-50 
                    rounded-lg border-3 border-${theme}-accent-bright 
                    text-3xl text-${theme}-font font-semibold
                    opacity-80`}>
                HTML
                </div>
                <div className={`
                    flex flex-col justify-center items-center
                    w-50 h-50 
                    rounded-lg border-3 border-${theme}-accent-bright 
                    text-3xl text-${theme}-font font-semibold
                    opacity-80`}>
                JavaScript
                </div>
                <div className={`
                    flex flex-col justify-center items-center
                    w-50 h-50 
                    rounded-lg border-3 border-${theme}-accent-bright 
                    text-3xl text-${theme}-font font-semibold
                    opacity-80`}>
                CSS
                </div>
            </div>
        </main>
    )
}