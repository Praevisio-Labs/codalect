import { Constraint } from '@/types/index'

export const constraintLevels: Constraint[] = [
    {
        level: 1,
        name: 'Low Constraint',
        description: {
            short: 'Looser hints',
            long: 'Allows direct hints and partial snippets. Still refuses complete solutions.',
        },
    },
    {
        level: 2,
        name: 'Medium Constraint',
        description: {
            short: 'Balanced guidance',
            long: 'Pseudocode and partial snippets; asks at least one question per turn.',
        },
    },
    {
        level: 3,
        name: 'High Constraint',
        description: {
            short: 'Strict Socratic',
            long: 'Questions only. No code, no pseudocode, no direct answers.',
        },
    },
]
