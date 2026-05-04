import { ibmPlexMono, manrope } from '@/app/ui/fonts'
import { ProjectProps } from '@/types/components'
import { skillsData } from '@/data/modules'
import Header from '@/app/ui/Header'

export default function LearnProject({
    theme,
    setTheme,
    project,
    onClick,
}: ProjectProps) {
    return (
        <main
            className={`
                flex flex-col w-full h-screen
                bg-${theme}-gap text-${theme}-font-primary 
                overflow-hidden
                `}>
            <Header
                theme={theme}
                setTheme={setTheme}
                path={'/learn'}
                linkText="Modules"
            />
            <div className="flex-none p-2">
                <h2
                    className={`${ibmPlexMono.className} text-xl font-bold mb-4`}>
                    {project.name}
                </h2>
            </div>
            <div className="flex-1 flex flex-col gap-12 p-3">
                {project.skills.map((projectSkill) => {
                    const thisSkill = skillsData.find(
                        (skill) => skill.id === projectSkill,
                    )
                    return (
                        <div
                            key={project.id}
                            className="flex flex-col text-lg font-semibold gap-2">
                            <h1
                                className={`${manrope.className} text-${theme}-font-tertiary`}>
                                {thisSkill?.name}
                            </h1>
                            <div className="text-sm font-normal">{`<Content/>`}</div>
                        </div>
                    )
                })}
            </div>
            <button onClick={onClick}>Start Project</button>
        </main>
    )
}
