'use client'

import { useState } from 'react'
import { useCart } from '../lib/cart'
import type { Product } from '../lib/products'

type ProductDetailProps = {
    product: Product
    onBack: () => void
}

// Product detail page content. The product data is passed in.
// You'll implement the quantity selector and add-to-cart logic.
export function ProductDetail({ product, onBack }: ProductDetailProps) {
    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)

    function handleAddToCart() {
        // TODO: Call addToCart with the product and quantity.
        // Then navigate back to the home page with router.push('/').
    }

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="mx-auto max-w-4xl">
                <button
                    onClick={onBack}
                    className="mb-6 text-sm text-violet-600 hover:underline">
                    ← Back to products
                </button>

                <div className="grid gap-8 md:grid-cols-2">
                    {/* TODO: Render the product image in a large container */}

                    <div>
                        {/* TODO: Render product name, price, and description */}

                        {/* TODO: Add a quantity selector.
                            A simple number input or +/- buttons work well.
                            Update the quantity state when the user changes it. */}

                        {/* TODO: Wire the "Add to cart" button to handleAddToCart.
                            Disable it if the product is out of stock. */}
                        <button
                            onClick={handleAddToCart}
                            disabled={!product.inStock}
                            className="mt-6 w-full rounded-lg bg-violet-600 py-3 text-sm font-medium text-white hover:bg-violet-700 disabled:opacity-50">
                            {product.inStock ? 'Add to cart' : 'Out of stock'}
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}
