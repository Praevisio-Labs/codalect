// Utility for conditionally joining class names.
// TODO: Implement a function that takes any number of arguments,
// filters out falsy values (false, null, undefined, ''),
// and joins the remaining strings with spaces.
//
// Example usage:
//   cn('base-class', isActive && 'active', 'another-class')
//   → 'base-class active another-class' (if isActive is true)
//   → 'base-class another-class' (if isActive is false)

export function cn(...inputs: (string | boolean | null | undefined)[]): string {
    // TODO: implement
    return ''
}
