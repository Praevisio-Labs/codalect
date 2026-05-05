import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import { MarkdownProps } from '@/types/components'

export default function Markdown({ theme, content }: MarkdownProps) {
    return (
        <div
            className={`
                prose prose-sm max-w-none
                prose-p:text-${theme}-font-secondary
                prose-headings:text-${theme}-font-tertiary
                prose-strong:text-${theme}-font-primary
                prose-code:text-${theme}-accent-primary
                prose-li:text-${theme}-font-secondary
                prose-a:text-${theme}-accent-primary
            `}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}>
                {content}
            </ReactMarkdown>
        </div>
    )
}
