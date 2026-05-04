import type { Project } from '@/types/index'

export const projectData: Project[] = [
    {
        id: 'spa-app',
        name: 'Simple SPA App',
        description: 'Build a mini todo list with HTML, JavaScript, and CSS.',
        skills: ['html-5', 'js', 'css-3'],
        files: [
            {
                name: 'index.html',
                fileType: 'html',
                content: `

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Mini Todo</title>
        <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <main class="app">
            <h1>Mini Todo</h1>
            <form id="todo-form" class="todo-form">
                <input
                    id="todo-input"
                    class="todo-input"
                    type="text"
                    placeholder="What needs doing?"
                    autocomplete="off"
                />
                <button type="submit" class="todo-add">Add</button>
            </form>
            <ul id="todo-list" class="todo-list"></ul>
        </main>
        <script src="app.js"></script>
    </body>
</html>

    `.trim(),
            },
            // src/data/modules.ts — files array, after index.html
            {
                name: 'app.js',
                fileType: 'javascript',
                content: `

const form = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')

const todos = []

function addTodo(text) {
    // TODO: push a new todo onto the \`todos\` array.
    // Each todo should have a unique \`id\`, the \`text\` from the input,
    // and a \`completed\` boolean (false by default).
}

function removeTodo(id) {
    const index = todos.findIndex((t) => t.id === id)
    if (index >= 0) todos.splice(index, 1)
    render()
}

function toggleTodo(id) {
    const todo = todos.find((t) => t.id === id)
    if (todo) todo.completed = !todo.completed
    render()
}

function render() {
    list.innerHTML = ''
    for (const todo of todos) {
        const li = document.createElement('li')
        li.className = 'todo'
        if (todo.completed) li.classList.add('todo--completed')

        const label = document.createElement('span')
        label.className = 'todo-label'
        label.textContent = todo.text
        label.addEventListener('click', () => toggleTodo(todo.id))

        const remove = document.createElement('button')
        remove.className = 'todo-remove'
        remove.textContent = '\\u00d7'
        // TODO: wire this button so clicking it removes the todo.

        li.appendChild(label)
        li.appendChild(remove)
        list.appendChild(li)
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const text = input.value.trim()
    if (!text) return
    addTodo(text)
    input.value = ''
    render()
})

    `.trim(),
            },
            {
                name: 'styles.css',
                fileType: 'css',
                content: `

* {
    box-sizing: border-box;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    margin: 0;
    padding: 2rem;
    background-color: #f5f5f5;
    color: #222;
}

.app {
    max-width: 480px;
    margin: 0 auto;
}

.todo-form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.todo-input {
    flex: 1;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
}

.todo-add {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #5a3a82;
    color: white;
    cursor: pointer;
}

.todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.todo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem;
    background-color: white;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 0.5rem;
}

.todo-label {
    cursor: pointer;
}

.todo--completed {
    /* TODO: style completed todos. The label should be visually
       de-emphasized — for example, struck through and faded. */
}

.todo-remove {
    border: none;
    background: transparent;
    font-size: 1.25rem;
    cursor: pointer;
    color: #888;
}

    `.trim(),
            },
        ],
    },
]

export const skillsData = [
    {
        id: 'html-5',
        name: 'HTML',
        content: `
## HTML Refresher

HTML (HyperText Markup Language) is the skeleton of every web page. It describes *structure* — not style or behavior. Browsers parse your HTML into a tree of objects called the **DOM** (Document Object Model), which CSS and JavaScript then read and manipulate.

---

### Document structure

Every HTML file starts with a doctype declaration and a root \`<html>\` element containing two children: \`<head>\` and \`<body>\`.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Page Title</title>
  </head>
  <body>
    <!-- visible content goes here -->
  </body>
</html>
\`\`\`

- \`<!DOCTYPE html>\` tells the browser to use modern HTML5 parsing rules.
- \`<head>\` holds metadata — things the browser needs but the user doesn't see directly.
- \`<body>\` holds everything that renders on screen.

---

### Elements and attributes

An **element** is an opening tag, optional content, and a closing tag:

\`\`\`html
<p class="intro">Hello, world.</p>
\`\`\`

**Attributes** live inside the opening tag as \`name="value"\` pairs. Common ones:

| Attribute | Purpose |
|-----------|---------|
| \`id\` | Unique identifier — used by CSS and JS to target one element |
| \`class\` | One or more space-separated labels for styling groups of elements |
| \`href\` | Destination URL on \`<a>\` tags |
| \`src\` | Resource URL on \`<img>\`, \`<script>\`, etc. |
| \`type\` | Subtype hint on \`<input>\`, \`<button>\`, \`<script>\` |

Some elements are **void** (self-closing) — they have no content and no closing tag:

\`\`\`html
<input type="text" placeholder="Enter text" />
<img src="photo.jpg" alt="A description" />
<br />
\`\`\`

---

### Semantic elements

Semantic tags communicate *meaning* to browsers, search engines, and screen readers — not just visual layout.

\`\`\`html
<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <article>
    <h1>Post Title</h1>
    <p>First paragraph...</p>
  </article>
</main>

<footer>© 2026</footer>
\`\`\`

Prefer semantic elements over generic \`<div>\` and \`<span>\` whenever the element has a clear role. Key ones to know:

- \`<header>\`, \`<footer>\`, \`<main>\`, \`<nav>\`, \`<aside>\` — page regions
- \`<article>\`, \`<section>\` — self-contained or thematic content blocks
- \`<h1>\`–\`<h6>\` — headings in descending importance (use only one \`<h1>\` per page)
- \`<p>\`, \`<ul>\`, \`<ol>\`, \`<li>\` — text and lists
- \`<button>\` — interactive controls (not \`<div onclick>\`)
- \`<label>\` — associates text with a form field

---

### Forms

Forms collect user input and submit it somewhere.

\`\`\`html
<form id="signup" action="/register" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />

  <label for="password">Password</label>
  <input id="password" name="password" type="password" required />

  <button type="submit">Sign up</button>
</form>
\`\`\`

Key points:

- Pair every \`<input>\` with a \`<label>\` using matching \`for\` / \`id\` values — this is required for accessibility.
- The \`name\` attribute is what gets sent to the server (or read by \`FormData\` in JS).
- \`type="email"\`, \`type="number"\`, etc. give the browser built-in validation and the right mobile keyboard.
- \`required\`, \`minlength\`, \`pattern\` add declarative validation without JavaScript.
- A \`<button type="submit">\` inside a \`<form>\` submits it; \`type="button"\` does not.

---

### Linking resources

\`\`\`html
<!-- stylesheet -->
<link rel="stylesheet" href="styles.css" />

<!-- script — defer keeps it from blocking HTML parsing -->
<script src="app.js" defer></script>

<!-- inline script (avoid for anything non-trivial) -->
<script>
  console.log('hello')
</script>
\`\`\`

Use \`defer\` on external scripts so the browser doesn't pause parsing while it downloads and executes them. \`async\` is an alternative but executes as soon as the file loads, which can cause ordering issues.

---

### Accessibility basics

- Always set \`lang\` on \`<html>\` so screen readers use the right pronunciation.
- Every \`<img>\` needs an \`alt\` attribute — describe the image, or use \`alt=""\` for decorative images.
- Use heading levels in order (\`<h1>\` → \`<h2>\` → \`<h3>\`) — don't skip levels for visual sizing.
- Interactive elements (\`<button>\`, \`<a>\`, \`<input>\`) are keyboard-focusable by default. Don't replace them with \`<div>\` + click handlers.

---

### Quick reference

\`\`\`html
<!-- Headings -->
<h1>Main title</h1>
<h2>Section title</h2>

<!-- Paragraph & inline text -->
<p>Some text with <strong>bold</strong> and <em>italic</em>.</p>

<!-- Link -->
<a href="https://example.com" target="_blank" rel="noopener">Visit</a>

<!-- Image -->
<img src="photo.jpg" alt="Descriptive text" width="400" />

<!-- Unordered list -->
<ul>
  <li>Item one</li>
  <li>Item two</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>

<!-- Generic containers -->
<div class="card">block-level wrapper</div>
<span class="highlight">inline wrapper</span>
\`\`\`
        `.trim(),
    },
    {
        id: 'js',
        name: 'JavaScript',
        content: `
## JavaScript Refresher

JavaScript is the language of the browser. It runs directly in the page, reads and modifies the DOM, responds to user events, and communicates with servers — all without a compile step. It also runs on the server via Node.js, but this refresher focuses on the browser context.

---

### Variables and scope

Prefer \`const\` by default. Use \`let\` when you need to reassign. Avoid \`var\` — it has function scope and hoisting behavior that causes subtle bugs.

\`\`\`js
const name = 'Ada'       // block-scoped, cannot be reassigned
let count = 0            // block-scoped, can be reassigned
count = 1                // ✓

const user = { age: 30 }
user.age = 31            // ✓ — const prevents reassignment, not mutation
\`\`\`

---

### Data types

JavaScript has seven primitive types: \`string\`, \`number\`, \`boolean\`, \`null\`, \`undefined\`, \`bigint\`, and \`symbol\`. Everything else is an **object** (including arrays and functions).

\`\`\`js
typeof 'hello'      // 'string'
typeof 42           // 'number'
typeof true         // 'boolean'
typeof null         // 'object'  ← historical quirk, not a real object
typeof undefined    // 'undefined'
typeof []           // 'object'
typeof {}           // 'object'
typeof function(){} // 'function'
\`\`\`

Use \`===\` (strict equality) instead of \`==\`. Loose equality coerces types in ways that are hard to predict.

---

### Functions

Three common ways to define a function:

\`\`\`js
// Function declaration — hoisted, available before its definition
function greet(name) {
    return \`Hello, \${name}!\`
}

// Function expression — not hoisted
const greet = function(name) {
    return \`Hello, \${name}!\`
}

// Arrow function — concise, and does not bind its own \`this\`
const greet = (name) => \`Hello, \${name}!\`
\`\`\`

Arrow functions with a single expression can omit \`return\` and the curly braces. With multiple statements, you need both:

\`\`\`js
const double = (n) => n * 2                    // implicit return
const add = (a, b) => { return a + b }         // explicit return
\`\`\`

---

### Arrays

Arrays are ordered lists. The most useful methods:

\`\`\`js
const nums = [1, 2, 3, 4, 5]

nums.push(6)                        // add to end → [1,2,3,4,5,6]
nums.pop()                          // remove from end → [1,2,3,4,5]
nums.splice(1, 2)                   // remove 2 items at index 1 → [1,4,5]

// Non-mutating — return a new array
nums.map((n) => n * 2)              // [2,4,6,8,10]
nums.filter((n) => n % 2 === 0)     // [2,4]
nums.find((n) => n > 3)             // 4
nums.findIndex((n) => n > 3)        // 3
nums.some((n) => n > 4)             // true
nums.every((n) => n > 0)            // true
nums.reduce((acc, n) => acc + n, 0) // 15
\`\`\`

Prefer the non-mutating methods (\`map\`, \`filter\`, \`reduce\`) when you don't need to change the original array.

---

### Objects

Objects are key-value stores. Keys are strings (or symbols); values can be anything.

\`\`\`js
const user = {
    id: 1,
    name: 'Ada',
    active: true,
}

// Access
user.name          // 'Ada'
user['name']       // 'Ada' — useful when the key is dynamic

// Destructuring
const { name, active } = user

// Spread — shallow copy or merge
const updated = { ...user, active: false }

// Shorthand property names
const name = 'Ada'
const age = 30
const person = { name, age }  // same as { name: name, age: age }
\`\`\`

---

### Control flow

\`\`\`js
// if / else
if (count > 0) {
    console.log('has items')
} else {
    console.log('empty')
}

// Ternary — good for simple inline conditions
const label = count > 0 ? 'has items' : 'empty'

// Optional chaining — safely access nested properties
const city = user?.address?.city   // undefined instead of throwing

// Nullish coalescing — fallback only for null/undefined (not 0 or '')
const display = user.name ?? 'Anonymous'
\`\`\`

---

### Loops

\`\`\`js
const items = ['a', 'b', 'c']

// for...of — cleanest way to iterate an array
for (const item of items) {
    console.log(item)
}

// forEach — same idea, callback style
items.forEach((item, index) => {
    console.log(index, item)
})

// for...in — iterates object keys (not recommended for arrays)
const obj = { x: 1, y: 2 }
for (const key in obj) {
    console.log(key, obj[key])
}
\`\`\`

---

### DOM interaction

The browser exposes the page as the \`document\` object. Common operations:

\`\`\`js
// Select elements
const btn = document.getElementById('submit')
const items = document.querySelectorAll('.todo-item')  // NodeList

// Read and write content
btn.textContent = 'Save'
btn.innerHTML = '<strong>Save</strong>'  // use sparingly — XSS risk

// Classes
btn.classList.add('active')
btn.classList.remove('active')
btn.classList.toggle('active')
btn.classList.contains('active')  // true / false

// Attributes
btn.setAttribute('disabled', '')
btn.removeAttribute('disabled')

// Create and insert elements
const li = document.createElement('li')
li.textContent = 'New item'
document.querySelector('ul').appendChild(li)
\`\`\`

---

### Events

\`\`\`js
const btn = document.getElementById('submit')

btn.addEventListener('click', (event) => {
    console.log('clicked', event.target)
})

// Prevent default browser behavior (e.g. form submission, link navigation)
form.addEventListener('submit', (event) => {
    event.preventDefault()
    // handle submission manually
})

// Event delegation — listen on a parent, check the target
list.addEventListener('click', (event) => {
    if (event.target.matches('.todo-remove')) {
        removeTodo(event.target.dataset.id)
    }
})
\`\`\`

---

### Async JavaScript

JavaScript is single-threaded. Async operations (network requests, timers) use callbacks, Promises, or \`async\`/\`await\`.

\`\`\`js
// Promise chain
fetch('/api/users')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err))

// async/await — same thing, cleaner syntax
async function loadUsers() {
    try {
        const res = await fetch('/api/users')
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.error(err)
    }
}
\`\`\`

\`await\` can only be used inside an \`async\` function (or at the top level of a module). An \`async\` function always returns a Promise.

---

### Modules

Modern JavaScript uses ES modules to split code across files.

\`\`\`js
// math.js
export function add(a, b) { return a + b }
export const PI = 3.14159

// main.js
import { add, PI } from './math.js'
import * as math from './math.js'   // namespace import

// Default export (one per file)
export default function greet(name) { return \`Hi, \${name}\` }
import greet from './greet.js'
\`\`\`

---

### Common gotchas

- \`this\` inside an arrow function refers to the enclosing scope, not the element that triggered an event. Use a regular function when you need \`event.target\` or \`this\` to refer to the DOM node.
- \`0\`, \`''\`, \`null\`, \`undefined\`, \`NaN\`, and \`false\` are all **falsy**. Everything else is truthy.
- Arrays and objects are compared by reference, not value: \`[] === []\` is \`false\`.
- \`parseInt('10px')\` returns \`10\` — it stops at the first non-numeric character. Use \`Number('10px')\` if you want \`NaN\` for invalid input.
        `.trim(),
    },
    {
        id: 'css-3',
        name: 'CSS',
        content: `
## CSS Refresher

CSS (Cascading Style Sheets) controls the visual presentation of HTML. It describes *how* elements look — their size, color, spacing, layout, and more. The "cascading" part means multiple rules can apply to the same element, and the browser resolves conflicts using specificity and source order.

---

### How CSS is applied

\`\`\`html
<!-- External stylesheet (preferred) -->
<link rel="stylesheet" href="styles.css" />

<!-- Inline styles (avoid — hard to override and maintain) -->
<p style="color: red;">Hello</p>
\`\`\`

In an external stylesheet, rules follow this structure:

\`\`\`css
selector {
    property: value;
    property: value;
}
\`\`\`

---

### Selectors

\`\`\`css
/* Element */
p { color: #333; }

/* Class — reusable, most common */
.card { border-radius: 8px; }

/* ID — unique per page, high specificity */
#header { background: #fff; }

/* Descendant — any .label inside a .todo */
.todo .label { font-weight: bold; }

/* Direct child */
.todo > button { margin-left: auto; }

/* Pseudo-class — element state */
button:hover { opacity: 0.8; }
input:focus { outline: 2px solid #5a3a82; }
li:first-child { border-top: none; }
li:last-child { border-bottom: none; }
li:nth-child(2n) { background: #f9f9f9; }

/* Pseudo-element — virtual sub-element */
p::first-line { font-weight: bold; }
.required::after { content: ' *'; color: red; }

/* Attribute */
input[type="checkbox"] { width: 1rem; }
a[target="_blank"]::after { content: ' ↗'; }
\`\`\`

---

### The cascade and specificity

When multiple rules target the same element and property, the browser picks the winner using **specificity** — a score based on selector type:

| Selector type | Specificity |
|---------------|-------------|
| Inline style | Highest |
| ID (\`#id\`) | High |
| Class, pseudo-class, attribute | Medium |
| Element, pseudo-element | Low |

More specific rules win regardless of source order. Equal-specificity rules are resolved by whichever appears last in the stylesheet.

\`\`\`css
p { color: black; }           /* specificity: 0,0,1 */
.intro { color: blue; }       /* specificity: 0,1,0 — wins over p */
#hero { color: red; }         /* specificity: 1,0,0 — wins over .intro */
\`\`\`

Avoid \`!important\` — it breaks the cascade and makes debugging painful.

---

### The box model

Every element is a rectangular box made of four layers, from inside out:

1. **Content** — the text or child elements
2. **Padding** — space between content and border
3. **Border** — the element's edge
4. **Margin** — space outside the border, between elements

\`\`\`css
.card {
    padding: 1rem;           /* all four sides */
    padding: 0.5rem 1rem;    /* top/bottom  left/right */
    border: 1px solid #eee;
    margin-bottom: 1rem;
}
\`\`\`

By default, \`width\` and \`height\` apply to the content box only — padding and border add to the total size. Fix this globally with:

\`\`\`css
*, *::before, *::after {
    box-sizing: border-box;
}
\`\`\`

With \`border-box\`, \`width: 200px\` means the total rendered width is 200px, padding and border included.

---

### Units

| Unit | What it's relative to |
|------|----------------------|
| \`px\` | Fixed pixels |
| \`%\` | Parent element's dimension |
| \`em\` | Current element's \`font-size\` |
| \`rem\` | Root element's \`font-size\` (usually 16px) |
| \`vw\` / \`vh\` | 1% of viewport width / height |
| \`ch\` | Width of the "0" character in the current font |

Prefer \`rem\` for font sizes and spacing — it scales predictably when users change their browser's base font size. Use \`px\` for borders and fine details that shouldn't scale.

---

### Flexbox

Flexbox is the go-to tool for one-dimensional layouts (a row or a column).

\`\`\`css
.container {
    display: flex;
    flex-direction: row;        /* row (default) | column */
    justify-content: space-between; /* main axis alignment */
    align-items: center;        /* cross axis alignment */
    gap: 1rem;                  /* space between children */
    flex-wrap: wrap;            /* allow children to wrap */
}

.child {
    flex: 1;          /* grow and shrink equally, share available space */
    flex: 0 0 200px;  /* don't grow, don't shrink, fixed 200px basis */
}
\`\`\`

Key \`justify-content\` values: \`flex-start\`, \`flex-end\`, \`center\`, \`space-between\`, \`space-around\`.  
Key \`align-items\` values: \`flex-start\`, \`flex-end\`, \`center\`, \`stretch\` (default), \`baseline\`.

---

### Grid

Grid is for two-dimensional layouts — rows *and* columns at the same time.

\`\`\`css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */
    grid-template-columns: 200px 1fr 1fr;   /* fixed + flexible */
    gap: 1.5rem;
}

/* Place an item explicitly */
.featured {
    grid-column: 1 / 3;   /* span from line 1 to line 3 */
    grid-row: 1 / 2;
}
\`\`\`

\`fr\` is a fractional unit — \`1fr\` means "one share of the remaining space." \`repeat(auto-fill, minmax(200px, 1fr))\` creates a responsive grid that adds columns as space allows.

---

### Positioning

\`\`\`css
/* Default — follows normal document flow */
.box { position: static; }

/* Offset from its normal position, still occupies space */
.box { position: relative; top: 10px; left: 20px; }

/* Removed from flow, positioned relative to nearest non-static ancestor */
.tooltip { position: absolute; top: 0; right: 0; }

/* Stays in place as the page scrolls */
.navbar { position: fixed; top: 0; width: 100%; }

/* Like fixed, but relative to its scroll container */
.sticky-header { position: sticky; top: 0; }
\`\`\`

\`absolute\` positioning is relative to the nearest ancestor with \`position: relative\` (or \`absolute\`/\`fixed\`). If none exists, it's relative to the viewport.

---

### Typography

\`\`\`css
body {
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 1rem;       /* 16px by default */
    line-height: 1.5;      /* unitless — relative to font-size */
    color: #222;
}

h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.02em;
}

p {
    max-width: 65ch;       /* ~65 characters — comfortable reading width */
}

.truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
\`\`\`

---

### Colors

\`\`\`css
color: #5a3a82;              /* hex */
color: rgb(90, 58, 130);     /* rgb */
color: hsl(270, 38%, 37%);   /* hsl — often easiest to reason about */
color: oklch(45% 0.12 290);  /* oklch — perceptually uniform, modern */

/* Transparency */
color: rgb(90 58 130 / 0.5);
color: hsl(270 38% 37% / 50%);
\`\`\`

---

### Custom properties (CSS variables)

\`\`\`css
:root {
    --color-primary: #5a3a82;
    --color-text: #222;
    --spacing-md: 1rem;
    --radius: 4px;
}

.button {
    background-color: var(--color-primary);
    padding: var(--spacing-md);
    border-radius: var(--radius);
}

/* Override in a local scope */
.card {
    --spacing-md: 1.5rem;
}
\`\`\`

Custom properties cascade and inherit like any other property. They're the foundation of theming — swap values on \`:root\` and the whole UI updates.

---

### Responsive design

\`\`\`css
/* Mobile-first: base styles apply to all sizes */
.container {
    padding: 1rem;
}

/* Enhance for larger screens */
@media (min-width: 640px) {
    .container {
        padding: 2rem;
    }
}

@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}

/* Respect user motion preferences */
@media (prefers-reduced-motion: reduce) {
    * { animation: none !important; transition: none !important; }
}
\`\`\`

---

### Common gotchas

- **Margin collapse**: vertical margins between adjacent block elements merge into one. The larger margin wins. Padding and borders prevent collapse.
- **\`z-index\` only works** on elements with a \`position\` other than \`static\` (or with certain other properties like \`opacity < 1\`).
- **Percentage heights** require the parent to have an explicit height. Use \`min-height: 100vh\` on \`body\` instead of \`height: 100%\` chains.
- **Flexbox and Grid children** ignore \`float\` and \`vertical-align\` — those are for older layout models.
- **\`display: none\`** removes the element from layout entirely. \`visibility: hidden\` hides it but keeps its space. \`opacity: 0\` makes it invisible but still interactive.
        `.trim(),
    },
    {
        id: 'next',
        name: 'Next.js',
        content: 'Learn the basics of...',
    },
    {
        id: 'tailwind',
        name: 'Tailwind CSS',
        content: 'Learn the basics of...',
    },
    {
        id: 'git',
        name: 'Git',
        content: 'Learn the basics of...',
    },
    {
        id: 'open-ai',
        name: 'OpenAI API',
        content: 'Learn the basics of...',
    },
    {
        id: 'supabase',
        name: 'Supabase',
        content: 'Learn the basics of...',
    },
    {
        id: 'ai-sdk',
        name: 'Vercel AI SDK',
        content: 'Learn the basics of...',
    },
    {
        id: 'aws-development',
        name: 'AWS IAM, CLI, SDK',
        content: 'Learn the basics of devloping with AWS...',
    },
    {
        id: 'bedrock',
        name: 'AWS Bedrock',
        content: 'Learn the basics of RAG and AI...',
    },
]
