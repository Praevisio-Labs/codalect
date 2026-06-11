import { personalInfo, skills } from '../../lib/data'

// About page — bio is rendered, skills section is a TODO.
export default function AboutPage() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-12">
            <h1 className="mb-8 text-3xl font-bold text-gray-900">About</h1>

            {/* Bio section — complete */}
            <section className="mb-12">
                <p className="text-lg leading-relaxed text-gray-700">
                    {personalInfo.bio}
                </p>
                <div className="mt-6 flex gap-4 text-sm">
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-violet-600 hover:underline">
                        {personalInfo.email}
                    </a>
                    {personalInfo.github && (
                        <a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-600 hover:underline">
                            GitHub
                        </a>
                    )}
                    {personalInfo.linkedin && (
                        <a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-violet-600 hover:underline">
                            LinkedIn
                        </a>
                    )}
                </div>
            </section>

            {/* Skills section */}
            <section>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                    Skills
                </h2>
                {/* TODO: Render the skills array.
                    Each skill has a category and an items array.
                    Render each category as a heading with its items below.
                    Style suggestion: category as a small uppercase label,
                    items as a comma-separated list or a row of tags. */}
            </section>
        </main>
    )
}
