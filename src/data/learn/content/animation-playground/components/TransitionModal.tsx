'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function TransitionModal() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold">
                Enter / Exit Transition
            </h2>
            <button
                onClick={() => setIsOpen(true)}
                className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700">
                Open modal
            </button>

            {/* TODO: Wrap the conditional render below in <AnimatePresence>.
                AnimatePresence keeps the element mounted until its exit animation
                finishes — without it, the exit animation never runs because React
                removes the element from the DOM immediately. */}

            {isOpen && (
                // The overlay — give it initial/animate/exit for a fade.
                // key="overlay" is required so AnimatePresence can track it.
                <motion.div
                    key="overlay"
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    onClick={() => setIsOpen(false)}
                    // TODO: initial={{ opacity: 0 }}, animate={{ opacity: 1 }}, exit={{ opacity: 0 }}
                >
                    {/* The panel — give it its own initial/animate/exit.
                        Stop click propagation so clicking the panel doesn't close the modal. */}
                    <motion.div
                        className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                        // TODO: Animate the panel with scale + opacity.
                        // initial: opacity 0, scale 0.95
                        // animate: opacity 1, scale 1
                        // exit: opacity 0, scale 0.95
                        // Add a short transition (0.15–0.2s tween)
                    >
                        <h3 className="text-lg font-semibold">
                            Hello from the modal
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            This modal fades and scales in — and out. The exit
                            animation only works because AnimatePresence is
                            wrapping the render.
                        </p>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="mt-4 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium hover:bg-gray-200">
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </div>
    )
}
