import { useState } from 'react'
import HomePage from './app/page'
import ProductPage from './app/products/[id]/page'
import { CartProvider } from './lib/cart'

export default function App() {
    const [selectedProductId, setSelectedProductId] = useState<string | null>(
        null,
    )

    return (
        <CartProvider>
            {selectedProductId ? (
                <ProductPage
                    productId={selectedProductId}
                    onBack={() => setSelectedProductId(null)}
                />
            ) : (
                <HomePage onSelectProduct={setSelectedProductId} />
            )}
        </CartProvider>
    )
}
