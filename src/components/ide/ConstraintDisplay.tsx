import { ConstraintDisplayProps } from '@/types/components'

export default function ConstraintDisplay({
    selectedConstraint,
}: ConstraintDisplayProps) {
    return (
        <div className="w-full flex justify-center p-0 md:p-2">
            <span
                className={`italic text-[10px] font-outfit tracking-wide text-font-paragraph opacity-60`}>
                {selectedConstraint.description.long}
            </span>
        </div>
    )
}
