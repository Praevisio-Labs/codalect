// Replace this placeholder data with your own information.
// The types here define the shape that the components expect —
// don't change the type structure, just the values.

export type Project = {
    id: string
    name: string
    description: string
    tech: string[] // e.g. ['React', 'TypeScript', 'Tailwind']
    url?: string // live URL
    repo?: string // GitHub URL
}

export type Skill = {
    category: string // e.g. 'Frontend', 'Backend', 'Tools'
    items: string[]
}

export type PersonalInfo = {
    name: string
    title: string // e.g. 'Full-Stack Developer'
    bio: string // 2–3 sentences about yourself
    email: string
    github?: string
    linkedin?: string
}

export const personalInfo: PersonalInfo = {
    name: 'Your Name',
    title: 'Full-Stack Developer',
    bio:
        'I build web applications with a focus on clean code and good user experience. ' +
        'Currently learning AI integration and exploring the intersection of design and engineering.',
    email: 'you@example.com',
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
}

export const projects: Project[] = [
    {
        id: 'project-1',
        name: 'Project One',
        description:
            'A brief description of what this project does and what problem it solves.',
        tech: ['Next.js', 'TypeScript', 'Tailwind'],
        url: 'https://example.com',
        repo: 'https://github.com/yourusername/project-one',
    },
    {
        id: 'project-2',
        name: 'Project Two',
        description:
            'Another project description. What did you build? What did you learn?',
        tech: ['React', 'Supabase', 'Tailwind'],
        repo: 'https://github.com/yourusername/project-two',
    },
    {
        id: 'project-3',
        name: 'Project Three',
        description:
            'A third project. Even a small project is worth including if it taught you something.',
        tech: ['Python', 'FastAPI'],
        repo: 'https://github.com/yourusername/project-three',
    },
]

export const skills: Skill[] = [
    {
        category: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
        category: 'Backend',
        items: ['Node.js', 'Python', 'Supabase', 'PostgreSQL'],
    },
    {
        category: 'Tools',
        items: ['Git', 'VS Code', 'Figma', 'Vercel'],
    },
]
