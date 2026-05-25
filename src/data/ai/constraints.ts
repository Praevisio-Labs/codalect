import { Constraint } from '@/types/index'

export const constraintLevels: Constraint[] = [
    {
        level: 1,
        name: 'Mild',
        description: {
            short: 'Looser hints',
            long: 'Allows direct hints and partial snippets. Still refuses complete solutions.',
        },
    },
    {
        level: 2,
        name: 'Medium',
        description: {
            short: 'Balanced guidance',
            long: 'Pseudocode and partial snippets; asks at least one question per turn.',
        },
    },
    {
        level: 3,
        name: 'Spicy',
        description: {
            short: 'Strict Socratic',
            long: 'Questions only. No code, no pseudocode, no direct answers.',
        },
    },
]
