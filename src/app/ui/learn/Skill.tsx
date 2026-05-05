import type { SkillProps } from '@/types/components'
import MarkdownRender from '@/app/ui/MarkdownRender'

export default function Skill({ theme, content }: SkillProps) {
    return (
        <div className="flex flex-col gap-2">
            <MarkdownRender theme={theme} content={content} />
        </div>
    )
}
