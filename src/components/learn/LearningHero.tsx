import {
    Squares2X2Icon,
    DocumentTextIcon,
    RocketLaunchIcon,
} from '@heroicons/react/24/outline'

const steps = [
    {
        label: 'Choose a module',
        detail: 'Pick by level, duration, or stack.',
        Icon: Squares2X2Icon,
    },
    {
        label: 'Review the brief',
        detail: 'See goals, context, and refreshers.',
        Icon: DocumentTextIcon,
    },
    {
        label: 'Launch starter files',
        detail: 'Complete exercises in prepped files.',
        Icon: RocketLaunchIcon,
    },
]

const blueprint = `project/
├─ src/
│  ├─ App.tsx
│  └─ components/
├─ package.json
└─ README.md

❯ start project_`

export default function LearningHero() {
    return (
        <section className="relative mb-6 overflow-hidden rounded-lg border border-accent-muted bg-panel text-font-paragraph">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.14]"
                style={{
                    backgroundImage:
                        'linear-gradient(var(--color-accent-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent-muted) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            <div className="relative p-5 md:p-6">
                <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_17rem] md:items-start">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-2 text-xs font-semibold text-font-secondary">
                            <span className="size-1.5 rounded-full bg-font-secondary" />
                            <span>How modules work</span>
                        </div>
                        <h3 className="mt-3 text-lg font-sora tracking-tight font-semibold text-font-apex md:text-xl">
                            Modules include starter files.
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-font-paragraph">
                            Open a module to review the goal, skill refreshers,
                            and exercise brief. When you are ready, launch a
                            prepared workspace and finish the build.
                        </p>
                    </div>

                    <pre
                        aria-hidden="true"
                        className="hidden select-none justify-self-end font-mono text-[11px] leading-5 text-font-secondary opacity-35 md:block">
                        {blueprint}
                    </pre>
                </div>

                <ol className="mt-5 grid gap-2 sm:grid-cols-3">
                    {steps.map((step, index) => (
                        <li
                            key={step.label}
                            className="rounded-md border border-accent-muted/70 bg-panel p-3">
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-sm border border-accent-muted text-xs font-semibold text-font-secondary">
                                    {index + 1}
                                </span>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-1.5 text-sm font-sora tracking-tight font-medium text-font-paragraph">
                                        <step.Icon className="size-4 shrink-0" />
                                        <span>{step.label}</span>
                                    </div>
                                    <p className="mt-1 text-xs leading-5 font-manrope tracking-wider  text-font-paragraph/80">
                                        {step.detail}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
