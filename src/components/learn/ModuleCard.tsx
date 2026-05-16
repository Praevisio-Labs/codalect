import { ModuleProps } from '@/types/components'
import {
    RocketLaunchIcon,
    CalendarDaysIcon,
    ClockIcon,
} from '@heroicons/react/24/outline'

export default function ModuleCard({ project, onClick }: ModuleProps) {
    const isComingSoon = project.isReleased === false
    const cardStateClasses = isComingSoon
        ? 'opacity-70 cursor-default'
        : 'hover:opacity-60 cursor-pointer'

    return (
        <div
            onClick={isComingSoon ? undefined : onClick}
            className={`
                    flex flex-col gap-4 p-6
                    w-full min-w-0
                    text-font-primary
                    rounded-lg border-2 border-accent-muted
                    bg-input
                    ${cardStateClasses}
                    `}>
            <div className="flex items-start sm:gap-8">
                <div className="hidden sm:block sm:size-20 sm:shrink-0 sm:rounded-full sm:overflow-hidden"></div>

                <div>
                    <strong className="rounded-sm border border-accent-muted px-3 py-1.5 text-[10px] font-medium text-font-secondary">
                        {project.level}
                    </strong>

                    <h3 className="mt-4 text-lg font-medium text-font-apex sm:text-xl">
                        {project.name}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-sm text-pretty text-font-paragraph">
                        {project.description}
                    </p>

                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                        {isComingSoon ? (
                            <div className="flex items-center gap-1 text-font-secondary">
                                <ClockIcon
                                    className="size-4"
                                    aria-hidden="true"
                                />
                                <p className="text-xs font-medium">
                                    Coming soon
                                </p>
                            </div>
                        ) : (
                            <>
                                <div className="flex items-center gap-1 text-font-secondary">
                                    <ClockIcon
                                        className="size-4"
                                        aria-hidden="true"
                                    />
                                    <p className="text-xs font-medium">
                                        {project.duration}
                                    </p>
                                </div>

                                <span
                                    className="hidden sm:block text-font-secondary"
                                    aria-hidden="true">
                                    ·
                                </span>

                                <p className="mt-2 text-xs font-medium text-font-secondary sm:mt-0"></p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
