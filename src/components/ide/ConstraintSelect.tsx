'use client'

import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react'

import { Constraint } from '@/types/index'
import { ConstraintSelectProps } from '@/types/components'
import { constraintLevels } from '@/data/ai/constraints'

import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'
import HeatIcon from '@/components/icons/HeatIcon'

function Jalapenos({ count }: { count: 1 | 2 | 3 }) {
    const ariaLabel = `${count} jalapeno${count > 1 ? 's' : ''}`
    const indices = [0, 1, 2].slice(0, count)

    return (
        <span aria-label={ariaLabel} className="flex gap-0.5">
            {indices.map((index) => (
                <HeatIcon key={index} className="size-3 md:size-4" />
            ))}
        </span>
    )
}

export default function ConstraintSelect({
    selectedConstraint,
    setSelectedConstraint,
}: ConstraintSelectProps) {
    return (
        <Listbox value={selectedConstraint} onChange={setSelectedConstraint}>
            <div className="relative">
                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-sm bg-page/50 py-1 pr-2 pl-3 text-left text-font-paragraph normal-case outline-1 -outline-offset-1 outline-none text-[10px]">
                    <span className="col-start-1 row-start-1 flex items-center justify-between gap-3 pr-6">
                        <span className="block truncate">
                            {selectedConstraint.name}
                        </span>
                        <Jalapenos count={selectedConstraint.level} />
                    </span>
                    <ChevronUpDownIcon
                        aria-hidden="true"
                        className="col-start-1 row-start-1 size-5 self-center justify-self-end text-font-paragraph sm:size-4"
                    />
                </ListboxButton>
                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-sm bg-panel py-1 text-[10px] normal-case shadow-lg outline-1 outline-accent-muted data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0">
                    {constraintLevels.map((heatLevel: Constraint) => (
                        <ListboxOption
                            key={heatLevel.level}
                            value={heatLevel}
                            className="group relative cursor-default py-1 pr-9 pl-3 text-font-paragraph select-none data-focus:bg-accent-muted data-focus:text-font-paragraph data-focus:outline-hidden">
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex flex-col">
                                    <span className="block truncate font-normal group-data-selected:font-semibold">
                                        {heatLevel.name}
                                    </span>
                                    <span className="block truncate text-[9px] text-font-paragraph">
                                        {heatLevel.description.short}
                                    </span>
                                </div>
                                <Jalapenos count={heatLevel.level} />
                            </div>
                            <span className="absolute top-0 right-0 flex items-start pt-1 pr-4 text-accent-bright group-not-data-selected:hidden group-data-focus:text-font-paragraph">
                                <CheckIcon
                                    aria-hidden="true"
                                    className="size-3"
                                />
                            </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    )
}
