import ModuleCard from '@/components/ModuleCard'
import { projectData } from '@/data/modules'
import { DashboardProps } from '@/types/components'

export default function LearnDashboard({ theme, onClick }: DashboardProps) {
    return (
        <main
            className={`flex flex-col w-full h-screen bg-${theme}-gap overflow-hidden`}>
            {header}
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
                        onClick={() => onClick(project.id)}
                    />
                ))}
            </div>
        </main>
    )
}
