import type { Project } from '../lib/data'

type ProjectCardProps = {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    // TODO: Render the project card.
    // It should show:
    //   - project.name as a heading
    //   - project.description as a paragraph
    //   - project.tech as a row of small tags/badges
    //   - Links to project.url (if present) and project.repo (if present)
    //
    // Keep it clean — this card will appear in a grid, so it shouldn't be too tall.
    // A border, subtle shadow, and hover state make it feel polished.

    return (
        <div className="rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
            {/* TODO: implement the card content */}
        </div>
    )
}
