import { DashboardProps } from '@/types/components'
import { moduleData } from '@/data/learn/registry'

import Header from '@/components/Header'
import ModuleCard from '@/components/learn/ModuleCard'
import LearningHero from '@/components/learn/LearningHero'

export default function Dashboard({
    theme,
    setTheme,
    onClick,
}: DashboardProps) {
    return (
        <main
            className={`flex flex-col w-full h-screen bg-panel overflow-hidden`}>
            <Header
                theme={theme}
                setTheme={setTheme}
                path={'/'}
                linkText="Editor"
            />
            <div className="flex-none px-6 pt-6 overflow-auto">
                <h2
                    className={`text-font-apex text-xl md:text-3xl font-semibold`}>
                    Project Modules
                </h2>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
                <LearningHero />
                <div className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {moduleData.map((project) => (
                        <ModuleCard
                            key={project.id}
                            project={project}
                            onClick={() => onClick(project.id)}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
