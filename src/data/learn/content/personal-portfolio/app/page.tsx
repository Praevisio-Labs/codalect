import { personalInfo, projects } from '../lib/data'
import { ProjectCard } from '../components/ProjectCard'

// Home page — the hero section is complete. You'll add the projects grid.
export default function HomePage() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-12">
            {/* Hero section — complete, no TODOs */}
            <section className="mb-16">
                <h1 className="mb-2 text-4xl font-bold text-gray-900">
                    {personalInfo.name}
                </h1>
                <p className="mb-4 text-xl text-gray-600">
                    {personalInfo.title}
                </p>
                <p className="max-w-2xl text-gray-700">{personalInfo.bio}</p>
            </section>

            {/* Projects section */}
            <section>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                    Projects
                </h2>
                {/* TODO: Render a grid of ProjectCard components.
                    Map over the projects array from lib/data.ts.
                    Use a responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop.
                    Tailwind classes: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 */}
            </section>
        </main>
    )
}
