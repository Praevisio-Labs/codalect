import type { ComponentType, SVGProps } from 'react'
import {
    ChartBarSquareIcon,
    ChatBubbleLeftRightIcon,
    CloudIcon,
    DocumentMagnifyingGlassIcon,
    IdentificationIcon,
    ListBulletIcon,
    PlayCircleIcon,
    PuzzlePieceIcon,
    ShieldCheckIcon,
    ShoppingBagIcon,
    SparklesIcon,
    WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import type { Domain } from '@/types/index'

export const domainLabels: Record<Domain, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    'full-stack': 'Full Stack',
    devops: 'DevOps',
    data: 'Data',
    ai: 'AI',
    agents: 'Agents',
    rag: 'RAG',
    'tool-calling': 'Tool Calling',
    security: 'Security',
    testing: 'Testing',
    mobile: 'Mobile',
}

export const skillLabels: Record<string, string> = {
    next: 'Next.js',
    react: 'React',
    typescript: 'TypeScript',
    tailwind: 'Tailwind CSS',
    supabase: 'Supabase',
    'ai-sdk': 'AI SDK',
    'open-ai': 'OpenAI',
    bedrock: 'AWS Bedrock',
    pinecone: 'Pinecone',
    python: 'Python',
    'framer-motion': 'Framer Motion',
    'html-5': 'HTML5',
    'css-3': 'CSS3',
    js: 'JavaScript',
}

export const projectIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
    'animation-playground': PlayCircleIcon,
    'bedrock-ai-app': SparklesIcon,
    'collab-whiteboard': ChatBubbleLeftRightIcon,
    'e-commerce-storefront': ShoppingBagIcon,
    'interactive-dashboard': ChartBarSquareIcon,
    'personal-portfolio': IdentificationIcon,
    'rag-chatbot': DocumentMagnifyingGlassIcon,
    'react-component-library': PuzzlePieceIcon,
    'rest-api-with-auth': ShieldCheckIcon,
    'saas-starter': CloudIcon,
    'spa-app': ListBulletIcon,
    'tool-calling-agent': WrenchScrewdriverIcon,
}
