'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import ThemeSelect from '@/app/ui/ThemeSelect'
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

    return project ? (
        <Project
            theme={theme}
            setTheme={setTheme}
            project={project}
            onClick={() => router.push(`/?module=${project.id}`)}
        />
    ) : (
        <Dashboard
            theme={theme}
            setTheme={setTheme}
            onClick={(id) => router.push(`/learn/?module=${id}`)}
        />
    )
}
