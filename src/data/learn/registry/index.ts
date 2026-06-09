import type { ModuleMetadata } from '@/types/index'

import { spaApp } from './spa-app'
import { reactComponentLibrary } from './react-component-library'
import { animationPlayground } from './animation-playground'
import { eCommerceStorefront } from './e-commerce-storefront'
import { personalPortfolio } from './personal-portfolio'
import { reactDiceGame } from './react-dice-game'
import { nextjsDiceGame } from './nextjs-dice-game'
import { ragChatbot } from './rag-chatbot'
import { restApiWithAuth } from './rest-api-with-auth'
import { saasStarter } from './saas-starter'
import { toolCallingAgent } from './tool-calling-agent'
import { bedrockAiApp } from './bedrock-ai-app'

export const moduleData: ModuleMetadata[] = [
    spaApp,
    reactComponentLibrary,
    animationPlayground,
    eCommerceStorefront,
    personalPortfolio,
    reactDiceGame,
    nextjsDiceGame,
    ragChatbot,
    restApiWithAuth,
    saasStarter,
    toolCallingAgent,
    bedrockAiApp,
]
