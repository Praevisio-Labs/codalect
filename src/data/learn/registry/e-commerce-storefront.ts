import type { ModuleMeta } from '@/types/index'

export const eCommerceStorefront: ModuleMeta = {
    id: 'e-commerce-storefront',
    name: 'E-commerce Storefront',
    description:
        'Create a polished storefront with product pages, cart state, and responsive merchandising UI built with Next.js and Tailwind.',
    overview: `## Overview

You'll build a product storefront: a grid of products, individual product detail pages, and a shopping cart that persists across navigation. No payment processing — the focus is on the UI patterns and state management that make up the front half of any e-commerce experience.

E-commerce UIs are a great learning target because they're familiar (you've used dozens of them), they have well-established patterns, and they require you to solve real problems: how do you share cart state across pages? How do you handle product variants (size, color)? How do you make a product grid that looks good at every screen size?

This project is specifically well-suited to learning because the cart is a genuinely interesting state management problem. It's not just a list — it needs to handle adding, removing, updating quantities, and computing totals. Implementing it from scratch, rather than reaching for a library, forces you to think through the data model before writing any UI.`,
    instructions: `## Your Exercise

The starter files give you the product data, the page layouts, and the cart context shell. The cart logic and product detail page are left for you to implement.

**\`app/layout.tsx\`, \`app/page.tsx\`, and \`app/globals.css\`** are complete — read them to see how the app is structured and how CartProvider wraps everything.

**\`components/ProductCard.tsx\` and \`components/CartButton.tsx\`** are complete — read them to understand the product grid and cart button.

**\`lib/products.ts\`** contains the product data and types. It's complete — read it to understand the \`Product\` type and the \`products\` array.

**\`lib/cart.tsx\`** is a React context that will hold the cart state. The context and provider are set up, but the cart operations are empty. You'll need to:
1. Implement \`addToCart(product, quantity)\` — if the product is already in the cart, increment its quantity; otherwise add a new entry.
2. Implement \`removeFromCart(productId)\` — remove the item with that ID.
3. Implement \`updateQuantity(productId, quantity)\` — update the quantity, or remove the item if quantity drops to 0.
4. Implement the \`total\` derived value — sum of \`item.price * item.quantity\` across all cart items.

**\`app/products/[id]/page.tsx\`** is the product detail page. The product lookup is done — you'll need to:
1. Render the product image, name, price, and description.
2. Add a quantity selector (a simple number input or +/- buttons).
3. Wire the "Add to cart" button to call \`addToCart\` from the cart context.

**\`components/CartDrawer.tsx\`** is a slide-in panel that shows the cart contents. The open/close toggle is wired. You'll need to:
1. Render each cart item with its name, quantity, and line total.
2. Add a remove button for each item.
3. Show the cart total at the bottom.

Build in this order: implement the cart context operations first (they're pure logic, easy to reason about in isolation), then the product detail page, then the cart drawer.`,
    outcomes: `## Learning Outcomes

By the time you finish, you should be able to:

- **Implement** a React context-based cart with add, remove, update, and derived total — and understand why context is the right tool for cross-page shared state in a Next.js app.
- **Understand** Next.js dynamic routes (\`[id]\`) and how \`generateStaticParams\` pre-renders product pages at build time for fast navigation.
- **Recognize** the data model decisions behind a cart — why items are keyed by product ID, why quantity is stored on the cart item rather than the product, and how that model extends to handle variants.`,
    skills: ['next', 'tailwind', 'typescript'],
    domains: ['frontend', 'full-stack'],
    level: 'Intermediate',
    duration: '12 hrs',
    isReleased: true,
    template: 'react-ts',
    activeFile: '/lib/cart.tsx',
    visibleFiles: [
        '/app/page.tsx',
        '/app/products/[id]/page.tsx',
        '/components/ProductCard.tsx',
        '/components/CartButton.tsx',
        '/components/CartDrawer.tsx',
        '/components/ProductDetail.tsx',
        '/lib/cart.tsx',
        '/lib/products.ts',
        '/styles.css',
    ],
}
