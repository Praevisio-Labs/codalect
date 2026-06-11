const form = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')

const todos = []

function addTodo(text) {
    // TODO: push a new todo onto the `todos` array.
    // Each todo should have a unique `id`, the `text` from the input,
    // and a `completed` boolean (false by default).
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
        remove.textContent = '\u00d7'
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
