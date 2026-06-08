'use client'

import { useCart } from '../lib/cart'

type CartDrawerProps = {
    isOpen: boolean
    onClose: () => void
}

// Slide-in cart panel. The open/close toggle is wired.
// You'll implement the cart item rendering and total display.
export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
    const { items, total, removeFromCart } = useCart()

    if (!isOpen) return null

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />

            {/* Drawer */}
            <div className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-xl">
                <div className="flex items-center justify-between border-b px-6 py-4">
                    <h2 className="text-lg font-semibold">Shopping Cart</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600">
                        ✕
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4">
                    {items.length === 0 ? (
                        <p className="text-center text-sm text-gray-500">
                            Your cart is empty
                        </p>
                    ) : (
                        <div className="space-y-4">
                            {/* TODO: Map over items and render each one.
                                Show product name, quantity, and line total (price * quantity).
                                Add a remove button that calls removeFromCart(item.product.id). */}
                        </div>
                    )}
                </div>

                <div className="border-t px-6 py-4">
                    {/* TODO: Show the cart total.
                        Display it as "Total: $X.XX" with the total from useCart. */}
                    <button
                        onClick={onClose}
                        className="mt-3 w-full rounded-lg bg-violet-600 py-3 text-sm font-medium text-white hover:bg-violet-700">
                        Checkout
                    </button>
                </div>
            </div>
        </>
    )
}
