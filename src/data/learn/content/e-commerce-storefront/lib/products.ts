export type Product = {
    id: string
    name: string
    description: string
    price: number // in dollars
    image: string // URL or path
    category: string
    inStock: boolean
}

// Static product catalog — in a real app this would come from a database or CMS.
export const products: Product[] = [
    {
        id: 'prod-001',
        name: 'Ceramic Pour-Over Set',
        description:
            'A hand-thrown ceramic dripper and carafe for a meditative morning ritual. ' +
            'Holds 600ml. Dishwasher safe.',
        price: 68,
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600',
        category: 'Kitchen',
        inStock: true,
    },
    {
        id: 'prod-002',
        name: 'Linen Notebook',
        description:
            'A5 dot-grid notebook with a natural linen cover and 160 pages of 90gsm paper. ' +
            'Lay-flat binding.',
        price: 24,
        image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=600',
        category: 'Stationery',
        inStock: true,
    },
    {
        id: 'prod-003',
        name: 'Brass Desk Lamp',
        description:
            'Adjustable brass lamp with a warm Edison bulb. Weighted base, fabric cord. ' +
            'Height: 45cm.',
        price: 145,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600',
        category: 'Lighting',
        inStock: true,
    },
    {
        id: 'prod-004',
        name: 'Merino Wool Throw',
        description:
            '100% merino wool blanket, 130 × 180cm. Machine washable on cold. ' +
            'Available in natural, slate, and rust.',
        price: 195,
        image: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=600',
        category: 'Home',
        inStock: false,
    },
]

export function getProduct(id: string): Product | undefined {
    return products.find((p) => p.id === id)
}
