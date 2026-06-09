import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactCompiler: true,
    outputFileTracingIncludes: {
        '/': ['./src/data/learn/content/**/*'],
    },
}

export default nextConfig
