import { products } from '../lib/products'
import { ProductCard } from '../components/ProductCard'
import { CartButton } from '../components/CartButton'

type HomePageProps = {
    onSelectProduct: (productId: string) => void
}

// Home page — renders the product grid. Complete, no TODOs.
export default function HomePage({ onSelectProduct }: HomePageProps) {
    return (
        <main className="min-h-screen bg-gray-50">
            <header className="border-b bg-white px-6 py-4">
                <div className="mx-auto flex max-w-6xl items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-900">
                        Store
                    </h1>
                    <CartButton />
                </div>
            </header>
            <div className="mx-auto max-w-6xl px-6 py-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onSelect={() => onSelectProduct(product.id)}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}
