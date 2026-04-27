import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import RaisinIcon from '@/components/RaisinIcon'

export default function ThemeSelect() {
    return (
        <div className="flex gap-1 items-center">
            <div className="rounded-sm bg-dark-gap px-3 py-2">
                <MoonIcon className="h-4 w-4 text-dark-font" />
            </div>
            <div className="rounded-sm bg-dark-gap px-3 py-2">
                <RaisinIcon className="h-4 w-4 text-dark-font" />
            </div>
            <div className="rounded-sm bg-dark-gap px-3 py-2">
                <SunIcon className="h-4 w-4 text-dark-font" />
            </div>
        </div>
    )
}
