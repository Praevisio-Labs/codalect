import type { Product } from '../lib/products'

type ProductCardProps = {
    product: Product
    onSelect: () => void
}

// Renders a product card in the grid. Complete, no TODOs.
export function ProductCard({ product, onSelect }: ProductCardProps) {
    return (
        <button
            type="button"
            onClick={onSelect}
            className="group rounded-xl border bg-white p-4 text-left shadow-sm transition-shadow hover:shadow-md">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
            </div>
            <h3 className="mt-3 font-semibold text-gray-900">{product.name}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                {product.description}
            </p>
            <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                    ${product.price}
                </span>
                {!product.inStock && (
                    <span className="text-xs text-red-600">Out of stock</span>
                )}
            </div>
        </button>
    )
}
