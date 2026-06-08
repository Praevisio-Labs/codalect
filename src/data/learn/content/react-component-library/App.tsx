import { useState } from 'react'
import { Button } from './components/Button'
import { TextInput } from './components/TextInput'
import { Modal } from './components/Modal'

// Demo page — complete, no TODOs. This file shows you exactly what props
// each component needs to support. Read it first before implementing the components.
export default function App() {
    const [inputValue, setInputValue] = useState('')
    const [inputError, setInputError] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <main className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-4xl space-y-12">
                <h1 className="text-3xl font-bold text-gray-900">
                    UI Kit Demo
                </h1>

                {/* Button variants */}
                <section>
                    <h2 className="mb-4 text-xl font-semibold text-gray-800">
                        Buttons
                    </h2>
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-3">
                            <Button label="Primary" variant="primary" />
                            <Button label="Secondary" variant="secondary" />
                            <Button label="Ghost" variant="ghost" />
                            <Button label="Destructive" variant="destructive" />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button label="Small" size="sm" />
                            <Button label="Medium" size="md" />
                            <Button label="Large" size="lg" />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button label="Loading" loading />
                            <Button label="Disabled" disabled />
                            <Button
                                label="With icon"
                                icon={<span>→</span>}
                                variant="primary"
                            />
                        </div>
                    </div>
                </section>

                {/* Text inputs */}
                <section>
                    <h2 className="mb-4 text-xl font-semibold text-gray-800">
                        Text Inputs
                    </h2>
                    <div className="max-w-md space-y-4">
                        <TextInput
                            value={inputValue}
                            onChange={setInputValue}
                            label="Email"
                            placeholder="you@example.com"
                            type="email"
                        />
                        <TextInput
                            value={inputValue}
                            onChange={setInputValue}
                            label="Password"
                            type="password"
                            hint="At least 8 characters"
                        />
                        <TextInput
                            value={inputValue}
                            onChange={(v) => {
                                setInputValue(v)
                                setInputError(v.length < 3 ? 'Too short' : '')
                            }}
                            label="Username"
                            error={inputError}
                        />
                        <TextInput
                            value=""
                            onChange={() => {}}
                            label="Disabled"
                            disabled
                        />
                    </div>
                </section>

                {/* Modal */}
                <section>
                    <h2 className="mb-4 text-xl font-semibold text-gray-800">
                        Modal
                    </h2>
                    <Button
                        label="Open modal"
                        onClick={() => setIsModalOpen(true)}
                        variant="primary"
                    />
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title="Example Modal">
                        <p className="text-sm text-gray-600">
                            This modal should close when you click the overlay,
                            click the X button, or press Escape.
                        </p>
                        <div className="mt-4 flex justify-end gap-2">
                            <Button
                                label="Cancel"
                                variant="ghost"
                                onClick={() => setIsModalOpen(false)}
                            />
                            <Button
                                label="Confirm"
                                variant="primary"
                                onClick={() => setIsModalOpen(false)}
                            />
                        </div>
                    </Modal>
                </section>
            </div>
        </main>
    )
}
