'use client'

import { TaskSelectProps } from '@/types/components'
import { tasks } from '@/data/ai/tasks'

import Learn from '@/components/icons/BrainIcon'
import Scope from '@/components/icons/MapsSearchIcon'
import Build from '@/components/icons/AnvilIcon'

const iconMap = {
    scope: Scope,
    build: Build,
    learn: Learn,
}

export default function TaskSelect({
    selectedTask,
    setSelectedTask,
}: TaskSelectProps) {
    return (
        <div className="flex gap-1 rounded-sm bg-page/50 p-0.5 text-[10px]">
            {tasks.map((task) => {
                const isActive = task.key === selectedTask.key
                const Icon = iconMap[task.key]

                return (
                    <button
                        key={task.key}
                        type="button"
                        onClick={() => setSelectedTask(task)}
                        className={`
                            group relative
                            px-2 py-0.5 rounded-sm cursor-pointer transition
                            ${isActive ? 'bg-accent-muted text-font-apex' : 'text-font-paragraph hover:bg-accent-muted/40'}
                        `}>
                        <Icon className="size-4" />
                        <span
                            className="
                            absolute -top-7 left-1/2 -translate-x-1/2
                            px-1.5 py-0.5 rounded-sm
                            bg-panel text-font-apex text-[9px] whitespace-nowrap
                            opacity-0 group-hover:opacity-100
                            transition-opacity duration-150
                            pointer-events-none
                        ">
                            {task.name}
                            {' · '}
                            {task.description.short}
                        </span>
                    </button>
                )
            })}
        </div>
    )
}
