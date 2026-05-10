import { PersonaDisplayProps } from '@/types/components'

export default function PersonaDisplay({
    selectedPersona,
}: PersonaDisplayProps) {
    return (
        <div className="w-full flex justify-center mt-2">
            <span
                className={`italic text-[9px] text-font-primary opacity-60`}>
                {selectedPersona.description.long}
            </span>
        </div>
    )
}
