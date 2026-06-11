import { tool } from 'ai'
import { z } from 'zod'

const weatherByCity: Record<
    string,
    { temperature: number; unit: 'C'; condition: string; humidity: number }
> = {
    london: { temperature: 16, unit: 'C', condition: 'Cloudy', humidity: 72 },
    'new york': {
        temperature: 24,
        unit: 'C',
        condition: 'Sunny',
        humidity: 56,
    },
    sydney: { temperature: 20, unit: 'C', condition: 'Windy', humidity: 61 },
    tokyo: {
        temperature: 22,
        unit: 'C',
        condition: 'Partly cloudy',
        humidity: 65,
    },
}

export const getWeather = tool({
    description:
        'Get the current weather for a city. Use this when the user asks about weather conditions.',
    inputSchema: z.object({
        city: z.string().describe('The city name, e.g. "Tokyo" or "New York"'),
    }),
    execute: async ({ city }) => {
        const forecast = weatherByCity[city.toLowerCase()] ?? {
            temperature: 21,
            unit: 'C',
            condition: 'Mild',
            humidity: 60,
        }

        return { city, ...forecast }
    },
})

export const calculate = tool({
    description:
        'Evaluate a mathematical expression. Use this for arithmetic, not for questions you can answer directly.',
    inputSchema: z.object({
        expression: z
            .string()
            .describe(
                'A mathematical expression to evaluate, e.g. "42 * 1.08" or "(100 - 32) * 5/9"',
            ),
    }),
    execute: async ({ expression }) => {
        // TODO: Safely evaluate the expression and return the result.
        // Approach: validate that the expression only contains numbers, operators,
        // parentheses, and whitespace before evaluating it.
        // Return { expression, result } on success, or { expression, error } on failure.
        //
        // Security note: never use eval() on unsanitized user input in production.
        // For this exercise, validate the input first with a regex whitelist.
        const safePattern = /^[0-9+\-*/().\s]+$/
        if (!safePattern.test(expression)) {
            return {
                expression,
                error: 'Expression contains invalid characters',
            }
        }

        const result = Function(`"use strict"; return (${expression})`)()
        return { expression, result: Number(result) }
    },
})

export const searchWeb = tool({
    description:
        'Search the web for current information. Use this when the user asks about recent events or facts you might not know.',
    inputSchema: z.object({
        query: z.string().describe('The search query'),
    }),
    execute: async ({ query }) => {
        // In a real implementation, this would call a search API (Brave, Serper, Tavily, etc.)
        // For this exercise, return a placeholder so the agent can still demonstrate
        // the tool-calling flow without requiring an API key.
        return {
            query,
            results: [
                {
                    title: 'Search result placeholder',
                    snippet: `This is where real search results for "${query}" would appear.`,
                    url: 'https://example.com',
                },
            ],
            note: 'Connect a real search API to get live results.',
        }
    },
})

// Export all tools as a record for easy use in the route handler
export const agentTools = { getWeather, calculate, searchWeb }
