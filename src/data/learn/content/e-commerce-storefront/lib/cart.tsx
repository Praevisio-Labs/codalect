'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Product } from './products'

type CartItem = {
    product: Product
    quantity: number
}

type CartContextType = {
    items: CartItem[]
    total: number
    addToCart: (product: Product, quantity: number) => void
    removeFromCart: (productId: string) => void
    updateQuantity: (productId: string, quantity: number) => void
    itemCount: number
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])

    // TODO: Implement addToCart.
    // If an item with product.id already exists in items, increment its quantity
    // by the given amount. Otherwise, push a new CartItem onto the array.
    // Remember: don't mutate state directly — create a new array.
    function addToCart(product: Product, quantity: number) {
        setItems((prev) => {
            // TODO
            return prev
        })
    }

    // TODO: Implement removeFromCart.
    // Filter out the item whose product.id matches productId.
    function removeFromCart(productId: string) {
        // TODO
    }

    // TODO: Implement updateQuantity.
    // If the new quantity is 0 or less, remove the item entirely.
    // Otherwise, update the quantity for the matching item.
    function updateQuantity(productId: string, quantity: number) {
        setItems((prev) => {
            // TODO
            return prev
        })
    }

    // TODO: Compute total — sum of (item.product.price * item.quantity) for all items.
    const total = 0

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <CartContext.Provider
            value={{
                items,
                total,
                addToCart,
                removeFromCart,
                updateQuantity,
                itemCount,
            }}>
            {children}
        </CartContext.Provider>
    )
}

// Custom hook — throws if used outside CartProvider, which catches mistakes early.
export function useCart(): CartContextType {
    const ctx = useContext(CartContext)
    if (!ctx) throw new Error('useCart must be used within a CartProvider')
    return ctx
}
