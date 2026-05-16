import { RocketLaunchIcon, ClockIcon } from '@heroicons/react/24/outline'
import { ModuleProps } from '@/types/components'
import { domainLabels, skillLabels, projectIcons } from '@/data/lookups'

export default function ModuleCard({ project, onClick }: ModuleProps) {
    const isComingSoon = project.isReleased === false
    const cardStateClasses = isComingSoon
        ? 'opacity-70 cursor-default'
        : 'hover:opacity-60 cursor-pointer'
    const ProjectIcon = projectIcons[project.id] ?? RocketLaunchIcon

    return (
        <div
            onClick={isComingSoon ? undefined : onClick}
            className={`
                    flex flex-col gap-4 p-6
                    w-full min-w-0
                    rounded-lg border-2 border-accent-muted
                    bg-input
                    text-font-paragraph
                    ${cardStateClasses}
                    `}>
            <div className="flex items-start md:gap-8">
                <div className="hidden md:flex md:size-14 md:shrink-0 md:items-center md:justify-center md:rounded-full md:border-2 md:border-accent-muted">
                    <ProjectIcon className="size-4 md:size-6xp text-font-primary" />
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                        <strong className="rounded-sm border border-accent-muted px-3 py-1.5 text-[10px] font-medium text-font-secondary">
                            {project.level}
                        </strong>
                        <div className="flex items-center gap-1 text-font-secondary">
                            <ClockIcon className="size-4" aria-hidden="true" />
                            <span className="text-xs font-medium">
                                {project.duration}
                            </span>
                        </div>
                    </div>

                    <h3 className="mt-4 text-lg font-medium text-font-apex md:text-xl">
                        {project.name}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-sm text-pretty text-font-paragraph">
                        {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1">
                        {project.domains.map((domain) => (
                            <span
                                key={domain}
                                className="rounded-full border border-accent-muted px-2.5 py-0.5 text-xs whitespace-nowrap text-font-secondary">
                                {domainLabels[domain] ?? domain}
                            </span>
                        ))}
                        {project.skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-accent-muted px-2.5 py-0.5 text-xs whitespace-nowrap text-font-secondary">
                                {skillLabels[skill] ?? skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
