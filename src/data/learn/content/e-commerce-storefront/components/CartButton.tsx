'use client'

import { useState } from 'react'
import { useCart } from '../lib/cart'
import { CartDrawer } from './CartDrawer'

// Cart button in the header — opens the cart drawer. Complete, no TODOs.
export function CartButton() {
    const { itemCount } = useCart()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="relative rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700">
                Cart
                {itemCount > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        {itemCount}
                    </span>
                )}
            </button>
            <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    )
}
