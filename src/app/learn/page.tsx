'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { sora } from '@/app/ui/fonts'
import ThemeSelect from '@/components/ThemeSelect'
import Dashboard from '@/components/LearnDashboard'
import Project from '@/components/LearnProject'
import { projectData } from '@/data/modules'

export default function Page() {
    const [theme, setTheme] = useState('raisin')
    const searchParams = useSearchParams()
    const router = useRouter()
    const moduleID = searchParams.get('module')
    const project = moduleID
        ? projectData.find((proj) => proj.id === moduleID)
        : null

    const header = (
        <div className={`flex justify-between bg-${theme}-page p-2`}>
            <h1 className={`${sora.className} text-2xl`}>Raisin.IDE</h1>
            <ThemeSelect theme={theme} setTheme={setTheme} />
        </div>
    )

    return project ? (
        <Project
            theme={theme}
            project={project}
            onClick={() => router.push(`/?module=${project.id}`)}
        />
    ) : (
        <Dashboard
            theme={theme}
            onClick={(id) => router.push(`/learn/?module=${id}`)}
        />
    )
}
