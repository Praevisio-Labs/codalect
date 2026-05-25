import BrandmarkIcon from '@/components/icons/BrandmarkIcon'
import { LoadingIndicatorProps } from '@/types/components'

export default function LoadingIndicator({ show }: LoadingIndicatorProps) {
    if (!show) return null

    return (
        <div className="self-start flex items-center gap-1 px-2 py-1 mt-3">
            <BrandmarkIcon
                className={`h-3.5 w-3.5 text-font-apex animate-bounce`}
                style={{ animationDelay: '0ms' }}
            />
            <BrandmarkIcon
                className={`h-3.5 w-3.5 text-font-apex animate-bounce`}
                style={{ animationDelay: '150ms' }}
            />
            <BrandmarkIcon
                className={`h-3.5 w-3.5 text-font-apex animate-bounce`}
                style={{ animationDelay: '300ms' }}
            />
        </div>
    )
}
