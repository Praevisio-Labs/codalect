'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'

export function DraggableCard() {
    // useMotionValue creates a value that can drive animations without
    // triggering React re-renders. x tracks the card's horizontal position.
    const x = useMotionValue(0)

    // TODO: Use useTransform to map x to a rotation value.
    // When x is -150, rotate to about -15 degrees.
    // When x is 0, rotate to 0 degrees.
    // When x is 150, rotate to about 15 degrees.
    // Hint: useTransform(x, inputRange, outputRange)
    const rotate = useMotionValue(0) // replace this with useTransform

    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">Drag Me</h2>
            <div className="flex h-48 items-center justify-center">
                <motion.div
                    // TODO: Add drag="x" to constrain dragging to the horizontal axis.
                    // Add dragConstraints to limit the range (e.g. left: -150, right: 150).
                    // Add whileDrag={{ scale: 1.05 }} so the card grows slightly when grabbed.
                    style={{ x, rotate }}
                    className="flex h-32 w-48 cursor-grab items-center justify-center
                               rounded-xl bg-gradient-to-br from-violet-500 to-purple-700
                               text-white shadow-lg active:cursor-grabbing">
                    <p className="text-sm font-medium">Drag me sideways</p>
                </motion.div>
            </div>
            <p className="mt-2 text-center text-xs text-gray-400">
                The card tilts as you drag — that's useTransform at work.
            </p>
        </div>
    )
}
