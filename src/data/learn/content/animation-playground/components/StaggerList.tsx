'use client'

import { motion } from 'framer-motion'

const ITEMS = [
    'Design the system',
    'Write the tests',
    'Ship the feature',
    'Measure the impact',
    'Iterate',
]

// TODO: Define containerVariants.
// It needs two states: 'hidden' and 'visible'.
// The 'visible' state should have a transition with staggerChildren
// so each list item animates in with a delay after the previous one.
const containerVariants = {}

// TODO: Define itemVariants.
// 'hidden': opacity 0, shifted down by ~20px (use y: 20)
// 'visible': opacity 1, y: 0
// Add a transition to 'visible' — a short tween or spring works well.
const itemVariants = {}

export function StaggerList() {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Stagger Reveal</h2>
            {/* TODO: Add variants, initial, and animate props to motion.ul */}
            <motion.ul className="space-y-2">
                {ITEMS.map((item) => (
                    // TODO: Add variants prop to motion.li
                    // Because the parent has variants, you don't need to repeat
                    // initial/animate here — they're inherited automatically.
                    <motion.li
                        key={item}
                        className="rounded-lg bg-gray-50 px-4 py-3 text-sm text-gray-700">
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}
