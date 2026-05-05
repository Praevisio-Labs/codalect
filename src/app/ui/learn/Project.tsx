import { ibmPlexMono } from '@/app/ui/fonts'
import { ProjectProps } from '@/types/components'
import { skillsData } from '@/data/skill-modules'
import Header from '@/app/ui/Header'
import Skill from '@/app/ui/learn/Skill'
import Markdown from '@/app/ui/Markdown'
import Aside from '@/app/ui/Aside'

export default function Project({
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
            <div className="flex-1 flex flex-col gap-12 p-3 overflow-y-auto">
                <Markdown theme={theme} content={project.overview} />
                <Aside
                    type="note"
                    content="The sections below are refreshers on each skill this project uses. If you're already comfortable, skip ahead to the exercise instructions."
                />
                {project.skills.map((projectSkill) => {
                    const thisSkill = skillsData.find(
                        (skill) => skill.id === projectSkill,
                    )
                    if (!thisSkill) return null
                    return (
                        <Skill
                            key={thisSkill.id}
                            theme={theme}
                            content={thisSkill.content}
                        />
                    )
                })}
                <Markdown theme={theme} content={project.instructions} />
            </div>
            <button onClick={onClick}>Start Project</button>
        </main>
    )
}
