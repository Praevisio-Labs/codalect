import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import { MarkdownProps } from '@/types/components'

export default function Markdown({ content, size = 'sm' }: MarkdownProps) {
    return (
        <div
            className={`
                max-w-none py-2 text-${size}
                prose prose-sm
                prose-p:text-font-paragraph
                prose-headings:font-sora 
                prose-headings:tracking-tight
                prose-headings:font-medium
                prose-headings:text-font-primary 
                prose-strong:text-font-paragraph
                prose-code:text-code
                prose-li:text-font-secondary
                prose-a:text-link
                prose-hr:border-divider
                prose-hr:opacity-20 prose-hr:my-10 prose-hr:mx-75
            `}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}>
                {content}
            </ReactMarkdown>
        </div>
    )
}
