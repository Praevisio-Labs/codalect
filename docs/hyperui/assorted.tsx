// button

export function Button() {
    return (
        <div className="sm:flex sm:items-end sm:justify-end">
            <a href="#" className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400">
                Read Blog
            </a>
        </div>
    )
}

// badge

export function Badge() {
    return (
        <div className="mt-4 flex flex-wrap gap-1">
            <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600 dark:bg-purple-600 dark:text-purple-100">
                Snippet
            </span>

            <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs whitespace-nowrap text-purple-600 dark:bg-purple-600 dark:text-purple-100">
                JavaScript
            </span>
        </div>
    )
}
