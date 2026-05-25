import { Task } from '@/types/index'

export const tasks: Task[] = [
    {
        key: 'scope',
        name: 'Scope',
        description: {
            short: 'Refine an idea',
            long: 'One refining question at a time to reach a clear v1 scope.',
        },
    },
    {
        key: 'build',
        name: 'Build',
        description: {
            short: 'Incremental implementation',
            long: 'Walks an implementation step by step. Pseudocode and partial snippets only.',
        },
    },
    {
        key: 'learn',
        name: 'Learn',
        description: {
            short: 'Teach concepts',
            long: 'Minimal illustrative snippets paired with prediction questions.',
        },
    },
]
