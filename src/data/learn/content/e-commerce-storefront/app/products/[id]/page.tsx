import { getProduct } from '../../../lib/products'
import { ProductDetail } from '../../../components/ProductDetail'

type ProductPageProps = {
    productId: string
    onBack: () => void
}

export default function ProductPage({ productId, onBack }: ProductPageProps) {
    const product = getProduct(productId)

    if (!product) {
        return (
            <main className="min-h-screen bg-gray-50 px-6 py-12">
                <div className="mx-auto max-w-4xl">
                    <button
                        onClick={onBack}
                        className="mb-6 text-sm text-violet-600 hover:underline">
                        ← Back to products
                    </button>
                    <p>Product not found.</p>
                </div>
            </main>
        )
    }

    return <ProductDetail product={product} onBack={onBack} />
}
