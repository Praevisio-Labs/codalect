import { ModuleProps } from '@/types/components'
import { teachers } from '@/data/learn/teachers'
import { CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline'

export default function ModuleCard({ project, onClick }: ModuleProps) {
    const teacherId = project.teachers[0]
    const teacher = teachers.find((person) => person.id === teacherId)

    return (
        <div
            onClick={onClick}
            className={`
                    flex flex-col gap-4 p-4
                    justify-center items-center
                    w-50 h-50 
                    text-font-primary
                    rounded-lg border-2 border-accent-bright
                    bg-highlight hover:opacity-60
                    cursor-pointer
                    `}>
            {/* Original boilerplate from HyperUI - https://hyperui.dev/components/marketing/cards/*/}
            <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div className="sm:order-last sm:shrink-0">
                    <img
                        alt={`Image of ${teacher?.name}`}
                        src={teacher?.avatar}
                        className="size-16 rounded-full object-cover sm:size-18"
                    />
                </div>

                <div className="mt-4 sm:mt-0">
                    <h3 className="text-lg font-medium text-pretty text-gray-900">
                        {project.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-700">
                        By {teachers[0].name}
                    </p>

                    <p className="mt-4 line-clamp-2 text-sm text-pretty text-gray-700">
                        {project.description}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <CalendarDaysIcon
                    className="size-5 text-gray-700"
                    aria-hidden="true"
                />
                <span className="text-xs text-gray-700">31/06/2025</span>
            </div>

            <div className="flex items-center gap-2">
                <ClockIcon
                    className="size-5 text-gray-700"
                    aria-hidden="true"
                />
                <span className="text-xs text-gray-700">12 minutes</span>
            </div>
        </div>
    )
}
