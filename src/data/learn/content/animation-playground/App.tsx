import { StaggerList } from './components/StaggerList'
import { DraggableCard } from './components/DraggableCard'
import { TransitionModal } from './components/TransitionModal'

// Entry point — renders all three animation experiments.
// This file is complete — no TODOs.
export default function App() {
    return (
        <main className="min-h-screen bg-gray-50 p-8">
            <div className="mx-auto max-w-4xl space-y-8">
                <h1 className="text-3xl font-bold text-gray-900">
                    Animation Playground
                </h1>
                <p className="text-gray-600">
                    Three experiments exploring Framer Motion patterns:
                    variants, gestures, and exit animations.
                </p>

                <StaggerList />
                <DraggableCard />
                <TransitionModal />
            </div>
        </main>
    )
}
