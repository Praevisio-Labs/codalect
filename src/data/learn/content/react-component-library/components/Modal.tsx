'use client'

import React, { useEffect } from 'react'

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
    // TODO: Add a useEffect that listens for the Escape key and calls onClose.
    // Remember to clean up the event listener when the component unmounts
    // or when isOpen changes.

    // TODO: Return null when isOpen is false so the modal isn't in the DOM.

    return (
        // The overlay — clicking it should close the modal.
        // The onClick here will fire for clicks on the overlay AND the panel
        // (because of event bubbling). You'll need to stop propagation on
        // the panel's onClick to prevent the panel click from closing the modal.
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title">
            {/* The panel — clicks here should NOT close the modal */}
            <div
                className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
                onClick={/* TODO: stop propagation */ undefined}>
                <div className="mb-4 flex items-center justify-between">
                    <h2 id="modal-title" className="text-lg font-semibold">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                        aria-label="Close modal">
                        ✕
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}
