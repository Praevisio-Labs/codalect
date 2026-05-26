# Eval Benchmarks 

The thesis was that completion-oriented models, which most conventional models are, will jump to complete the exercise. 

Their responses are recorded below, which can be compared to how `Codalect` fairs when given the same prompt: [evals/eval-results.md](./eval-results.md)

<br>


## Prompts: Two Variations

```
Prompt A: "How do I solve this question?"
Prompt B: "I have no idea what to do with this - go."
```

<br>


## Attached File Context

Here is the context file attached to each query:

<details>

  <summary>Fill-in-Blanks Exercise</summary>

```js
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
    const index = todos.findIndex((t) =### t.id === id)
    if (index >= 0) todos.splice(index, 1)
    render()
}

function toggleTodo(id) {
    const todo = todos.find((t) =### t.id === id)
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
        label.addEventListener('click', () =### toggleTodo(todo.id))

        const remove = document.createElement('button')
        remove.className = 'todo-remove'
        remove.textContent = '\u00d7'
        // TODO: wire this button so clicking it removes the todo.

        li.appendChild(label)
        li.appendChild(remove)
        list.appendChild(li)
    }
}

form.addEventListener('submit', (event) =### {
    event.preventDefault()
    const text = input.value.trim()
    if (!text) return
    addTodo(text)
    input.value = ''
    render()
})
```

</details>

<br>


## Claude Opus 4.7 

### Prompt A

<details>

  <summary>Response</summary>

````md
Two TODOs, both small. Here's what each one needs.

**`addTodo`** just has to push a properly-shaped object onto `todos`:

```javascript
function addTodo(text) {
  todos.push({
    id: crypto.randomUUID(),
    text,
    completed: false,
  });
}
```

Note it deliberately doesn't call `render()` — the submit handler already does that right after calling `addTodo`. (`removeTodo` and `toggleTodo` call `render()` themselves because *they* have no other caller doing it.) If you add `render()` here too you'd render twice per submit. Harmless since render is idempotent, but inconsistent.

On the `id`: `crypto.randomUUID()` is the clean choice. `Date.now()` works but can collide if two todos land in the same millisecond, and since `removeTodo`/`toggleTodo` look up by `id`, a collision would make one item's actions affect the other. A module-scoped incrementing counter (`let nextId = 0; ... id: nextId++`) is also fine and arguably simpler.

**The remove button** just needs a click handler mirroring the one already on `label`:

```javascript
const remove = document.createElement("button");
remove.className = "todo-remove";
remove.textContent = "\u00d7";
remove.addEventListener("click", () => removeTodo(todo.id));
```

The `() => removeTodo(todo.id)` closure capturing the current `todo` is the key bit — same pattern as the label's `toggleTodo(todo.id)` right above it. Because `render()` rebuilds the whole list from scratch each time, every button gets a fresh listener bound to the right id, so you don't have to worry about stale closures across renders.

That's the whole thing. The architecture is already sound: single `todos` array as source of truth, full re-render on every mutation. Your two gaps were just "create the data" and "wire the one event handler that was left unhooked."
````

</details>

<br>

### Prompt B

<details>

  <summary>Response</summary>

````md
This is a barebones todo app with two gaps to fill. Both are marked, and it's about a two-minute job.

**1. `addTodo` — build the object and push it:**

```js
function addTodo(text) {
  todos.push({
    id: crypto.randomUUID(),
    text,
    completed: false,
  });
}
```

`crypto.randomUUID()` is the clean choice for the id — `Date.now()` collides if someone adds two todos in the same millisecond.

**2. The remove button — wire the click:**

```js
remove.addEventListener("click", () => removeTodo(todo.id));
```

The pattern is already set by the label's `toggleTodo` handler right above it; you're just mirroring it.

One thing worth noticing since you'll hit this kind of asymmetry in real codebases: `removeTodo` and `toggleTodo` both call `render()` internally, but `addTodo` does *not* — the submit handler calls `render()` itself after `addTodo` returns. So if you "follow the pattern" and add a `render()` call inside `addTodo`, you get a harmless but redundant double render. I left it out to match how the caller actually uses it. The cleaner long-term fix would be to make all three mutators consistent (either they all render, or none do and the caller always renders), but that's a refactor, not a fill-in-the-blank.

That's the whole thing working — add via the form, click a label to toggle, click × to remove. Want me to drop the completed file back to you, or is pasting these two in enough?
````

</details>

<br>


## Claude Sonnet 4.6 

### Prompt A

<details>

  <summary>Response</summary>

````md
Looking at the file, there are two `TODO` comments to complete:

## TODO 1 — `addTodo(text)`

You need to push a new object onto `todos` with a unique `id`, the `text`, and `completed: false`:

```js
function addTodo(text) {
  todos.push({
    id: Date.now(),      // simple unique id using timestamp
    text: text,
    completed: false
  });
}
```

`Date.now()` is a quick way to get a unique numeric ID. You could also use a counter variable if you prefer.

---

## TODO 2 — wire the remove button

Just add a `click` listener to the `remove` button that calls `removeTodo` with the todo's `id`:

```js
remove.addEventListener("click", () =### removeTodo(todo.id));
```

---

## Complete fixed file

```js
function addTodo(text) {
  todos.push({
    id: Date.now(),
    text: text,
    completed: false
  });
}

// inside render(), after creating the remove button:
remove.addEventListener("click", () =### removeTodo(todo.id));
```

That's it! The rest of the logic (`removeTodo`, `toggleTodo`, `render`, the form submit handler) is already correctly implemented — you just needed to fill in those two gaps.
````

</details>

<br>

### Prompt B

<details>

  <summary>Response</summary>

````md
Looking at the file, there are two `TODO` comments that need to be filled in. Let me fix them both.

<Returned Completed File>

Two TODOs filled in:

1. **`addTodo`** — pushes a new object onto `todos` with `Date.now()` as a simple unique ID, the provided `text`, and `completed: false`.

2. **Remove button** — wired with a click listener that calls `removeTodo(todo.id)`, which already had its logic written.
````

</details>

<br>


## ChatGPT 5.5  

### Prompt A

<details>

  <summary>Response</summary>

````md
You’ve got two missing pieces in this todo app:

1. Add a new todo into the `todos` array.
2. Make the remove button actually remove the todo.

Here’s how to think about it.

---

## 1. Solving `addTodo(text)`

The comment tells you exactly what each todo needs:

* a unique `id`
* the `text`
* `completed: false`

Since `todos` is an array, you use `.push()`.

A simple way to create a unique id is `Date.now()`.

So:

```js
function addTodo(text) {
  todos.push({
    id: Date.now(),
    text: text,
    completed: false
  });
}
```

---

## 2. Wiring the remove button

You already have:

```js
function removeTodo(id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index >= 0) todos.splice(index, 1);
  render();
}
```

So the button only needs to call `removeTodo(todo.id)` when clicked.

Add this inside `render()`:

```js
remove.addEventListener("click", () => removeTodo(todo.id));
```

---

# Final completed version

```js
function addTodo(text) {
  todos.push({
    id: Date.now(),
    text: text,
    completed: false
  });
}
```

and:

```js
remove.addEventListener("click", () => removeTodo(todo.id));
```

---

# Why this works

* `todos.push(...)` adds a new object into the array.
* `Date.now()` gives a different number each time, acting as a unique id.
* The click listener connects the button to the remove function.
* `render()` redraws the list after changes.

That’s the core pattern behind many beginner JavaScript apps:

* state (`todos`)
* update state
* re-render UI

````

</details>

<br>

### Prompt B

<details>

  <summary>Response</summary>

````md
This is a small todo app skeleton. Two parts are unfinished:

1. `addTodo(text)` doesn’t actually create/store todos.
2. The remove button isn’t wired up.

Here’s the completed version:

```js
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

const todos = [];

function addTodo(text) {
  todos.push({
    id: Date.now(), // simple unique id
    text,
    completed: false,
  });
}

function removeTodo(id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index >= 0) todos.splice(index, 1);
  render();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.completed = !todo.completed;
  render();
}

function render() {
  list.innerHTML = "";

  for (const todo of todos) {
    const li = document.createElement("li");
    li.className = "todo";

    if (todo.completed) {
      li.classList.add("todo--completed");
    }

    const label = document.createElement("span");
    label.className = "todo-label";
    label.textContent = todo.text;

    label.addEventListener("click", () => toggleTodo(todo.id));

    const remove = document.createElement("button");
    remove.className = "todo-remove";
    remove.textContent = "×";

    remove.addEventListener("click", () => removeTodo(todo.id));

    li.appendChild(label);
    li.appendChild(remove);
    list.appendChild(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();

  if (!text) return;

  addTodo(text);

  input.value = "";

  render();
});
```

What this app now does:

* Add todos
* Toggle completed state by clicking the text
* Remove todos with the × button
* Re-render UI after every change

One thing I’d improve next:
Instead of `Date.now()` for IDs, use `crypto.randomUUID()` in modern browsers:

```js
id: crypto.randomUUID()
```

That avoids edge cases where two items are added in the same millisecond.

````

</details>

<br>


## Gemini 3.1 Pro 

### Prompt A

<details>

  <summary>Response</summary>

````md
This code is a classic example of managing state (the `todos` array) and keeping the DOM (the HTML) in sync with that state. To get this working, we need to fill in two missing pieces: creating new data and wiring up an event listener. Let's break down each step.

### 1. Implementing `addTodo(text)`

Our goal here is to take the string of text provided by the user, package it into a structured object, and add it to our global `todos` array.

Whenever we create a list of items that can be modified or deleted later, each item needs a unique identifier (`id`). Without an ID, functions like `removeTodo` and `toggleTodo` wouldn't know exactly which item to target—especially if you had two todos with the exact same text. For a simple client-side project, a reliable trick is to use the current timestamp as the ID.

Here is how we construct the function step-by-step:

```javascript
function addTodo(text) {
  // Step 1: Create a new object representing the todo item.
  // Date.now() returns the number of milliseconds since Jan 1, 1970.
  // Because it changes every millisecond, it serves well as a unique ID here.
  const newTodo = {
    id: Date.now(), 
    text: text,
    completed: false
  };

  // Step 2: Push this newly created object onto the global 'todos' array.
  todos.push(newTodo);
  
  // Note: We don't need to call render() here because the form's 'submit' 
  // event listener already handles calling render() right after addTodo finishes.
}

```

### 2. Wiring the Remove Button

Inside the `render()` function, the code dynamically builds out the HTML elements for each todo item using a `for...of` loop. It creates the list item (`li`), the text (`label`), and the delete button (`remove`).

The missing step is attaching an event listener to that newly created button so it actually triggers a deletion.

Because we are inside the `for (const todo of todos)` loop, we have direct access to the specific `todo` object currently being rendered. We can capture that `todo.id` inside an anonymous function and pass it into the pre-existing `removeTodo` function.

Here is how to update that section of the `render` function:

```javascript
    // ... inside the render loop ...
    
    const remove = document.createElement("button");
    remove.className = "todo-remove";
    remove.textContent = "\u00d7"; // The Unicode character for the multiplication sign (×)

    // Add this event listener block:
    remove.addEventListener("click", () => {
      // When the button is clicked, it executes the removeTodo function,
      // passing in the 'id' of the specific todo from this iteration of the loop.
      removeTodo(todo.id);
    });

    li.appendChild(label);
    li.appendChild(remove);
    list.appendChild(li);
    
    // ...

```

### The Fully Solved File

For clarity, here is how the complete, functioning script looks once those two pieces are integrated:

```javascript
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

const todos = [];

function addTodo(text) {
  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false
  };
  todos.push(newTodo);
}

function removeTodo(id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index >= 0) todos.splice(index, 1);
  render();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.completed = !todo.completed;
  render();
}

function render() {
  list.innerHTML = "";
  for (const todo of todos) {
    const li = document.createElement("li");
    li.className = "todo";
    if (todo.completed) li.classList.add("todo--completed");

    const label = document.createElement("span");
    label.className = "todo-label";
    label.textContent = todo.text;
    label.addEventListener("click", () => toggleTodo(todo.id));

    const remove = document.createElement("button");
    remove.className = "todo-remove";
    remove.textContent = "\u00d7";
    
    // Wired event listener
    remove.addEventListener("click", () => {
      removeTodo(todo.id);
    });

    li.appendChild(label);
    li.appendChild(remove);
    list.appendChild(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTodo(text);
  input.value = "";
  render();
});

```
````

</details>

<br>

### Prompt B

<details>

  <summary>Response</summary>

````md
What you have here is a classic vanilla JavaScript script for a simple Todo list application. It is designed to manage the application's "state" (the `todos` array) and update the browser's DOM (the webpage) to match that state.

Right now, the script is almost completely functional, but the original author left two specific `// TODO:` comments that act as missing puzzle pieces. Let's break down exactly what needs to be done and build the solution step-by-step.

### Step 1: Fleshing out `addTodo`

If you look at the top of the file, the `addTodo(text)` function is empty. When a user submits the form, this function is called and handed the string of text they typed. We need to package that text into a data object and add it to our `todos` array.

To do this, we need a unique `id` for every item so we can easily find it later (like when we want to delete or check it off). A quick and common trick in vanilla JavaScript is to use `Date.now()`, which generates the current timestamp in milliseconds.

Here is how we build out that function:

```javascript
function addTodo(text) {
  // 1. Create a new object representing our todo item
  const newTodo = {
    id: Date.now(),    // Gives us a unique number based on the current time
    text: text,        // The text string passed into the function
    completed: false   // All new todos start as uncompleted
  };

  // 2. Push this new object onto our global state array
  todos.push(newTodo);
}

```

### Step 2: Wiring the Remove Button

Next, scroll down to the `render()` function. This function's job is to clear out the old HTML and rebuild the visual list from scratch every single time our `todos` array changes.

Inside the `for` loop, it creates a `button` element for removing a task. However, if you were to click it right now, nothing would happen because the button isn't listening for any events. We need to attach an event listener to it that calls the `removeTodo` function (which is already written for us up above).

Here is how we wire it up:

```javascript
    const remove = document.createElement("button");
    remove.className = "todo-remove";
    remove.textContent = "\u00d7";
    
    // Wire the button by adding a click event listener.
    // When clicked, it passes the current todo's unique ID to the removeTodo function.
    remove.addEventListener("click", () => {
      removeTodo(todo.id);
    });

```

### The Completed Script

By filling in those two gaps, the logic is complete. The form captures the input, `addTodo` updates the state array, and `render` handles drawing the HTML and attaching the necessary click events.

Here is your fully completed and functional file:

```javascript
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

const todos = [];

function addTodo(text) {
  const newTodo = {
    id: Date.now(), 
    text: text, 
    completed: false
  };
  todos.push(newTodo);
}

function removeTodo(id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index >= 0) todos.splice(index, 1);
  render();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.completed = !todo.completed;
  render();
}

function render() {
  list.innerHTML = "";
  for (const todo of todos) {
    const li = document.createElement("li");
    li.className = "todo";
    if (todo.completed) li.classList.add("todo--completed");

    const label = document.createElement("span");
    label.className = "todo-label";
    label.textContent = todo.text;
    label.addEventListener("click", () => toggleTodo(todo.id));

    const remove = document.createElement("button");
    remove.className = "todo-remove";
    remove.textContent = "\u00d7";
    
    remove.addEventListener("click", () => {
      removeTodo(todo.id);
    });

    li.appendChild(label);
    li.appendChild(remove);
    list.appendChild(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTodo(text);
  input.value = "";
  render();
});

```

Would you like to walk through how the `findIndex` and `splice` array methods are working together inside the `removeTodo` function to actually delete the data?
````

</details>

<br>


## Gemini 3.5 Flash 

### Prompt A

<details>

  <summary>Response</summary>

````md
Let's break down this plain vanilla JavaScript todo list app and fill in the missing gaps step-by-step.

Looking at the code, there are two `TODO` comments we need to address:

1. Pushing a structured todo object into the `todos` array inside `addTodo(text)`.
2. Wiring up the event listener for the remove button inside `render()`.

---

### Step 1: Completing the `addTodo` Function

To fulfill the requirements, each todo needs a unique `id`, the `text` passed into the function, and a `completed` flag set to `false`.

A robust and simple way to get a unique ID in modern JavaScript without using external libraries is `Crypto.randomUUID()`, or you can use `Date.now()` for a simple timestamp-based ID. Let's stick with `Date.now()` or a simple incremental counter for standard web environments.

Here is how we can build out that function pedagogically:

```javascript
function addTodo(text) {
  // 1. Create a well-structured object representing the new item
  const newTodo = {
    id: Date.now(),       // A simple unique timestamp ID
    text: text,           // The actual text message of the todo
    completed: false      // It starts uncompleted by default
  };

  // 2. Push this new object onto our global state tracking array
  todos.push(newTodo);
}

```

---

### Step 2: Wiring up the Remove Button

Inside the `render()` loop, a dynamic delete button is created for every todo item: `const remove = document.createElement("button");`.

We need to add an event listener to it so that when a user clicks the button, it triggers the existing `removeTodo(id)` function, passing the specific todo's ID.

Here is how you wire it up:

```javascript
    const remove = document.createElement("button");
    remove.className = "todo-remove";
    remove.textContent = "\u00d7"; // This renders as an '×' symbol
    
    // TODO Solution: Wire this button so clicking it removes the todo.
    remove.addEventListener("click", () => {
      removeTodo(todo.id);
    });

```

---

### The Complete Complete Code

Putting it all together, your updated file should look like this:

```javascript
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

const todos = [];

function addTodo(text) {
  // SOLUTION: Create and push the structured todo object
  const newTodo = {
    id: Date.now(), 
    text: text,
    completed: false
  };
  todos.push(newTodo);
}

function removeTodo(id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index >= 0) todos.splice(index, 1);
  render();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.completed = !todo.completed;
  render();
}

function render() {
  list.innerHTML = "";
  for (const todo of todos) {
    const li = document.createElement("li");
    li.className = "todo";
    if (todo.completed) li.classList.add("todo--completed");

    const label = document.createElement("span");
    label.className = "todo-label";
    label.textContent = todo.text;
    label.addEventListener("click", () => toggleTodo(todo.id));

    const remove = document.createElement("button");
    remove.className = "todo-remove";
    remove.textContent = "\u00d7";
    
    // SOLUTION: Hook up the event listener to execute removeTodo with this item's ID
    remove.addEventListener("click", () => removeTodo(todo.id));

    li.appendChild(label);
    li.appendChild(remove);
    list.appendChild(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTodo(text);
  input.value = "";
  render();
});

```

Does the state management flow (updating the array first, then calling `render()` to sync the DOM) make sense, or would you like to dive deeper into how array methods like `findIndex` and `splice` work here?
````

</details>

<br>

### Prompt B

<details>

  <summary>Response</summary>

````md
It looks like you have a starter file for a classic **Vanilla JavaScript Todo List application**!

Right now, the core logic is mostly there, but a couple of critical pieces are missing. Let's break down exactly what this file is doing and fill in those missing pieces together step-by-step.

---

## What is This Code Doing?

1. **Selecting Elements:** It grabs the HTML form, input field, and list container from the page using `document.getElementById`.
2. **State Management:** It sets up an empty array called `todos` to hold your list items.
3. **Event Listening:** It listens for when you submit the form. When you do, it prevents the page from reloading (`event.preventDefault()`), grabs your text, and calls `addTodo()`.
4. **Rendering:** The `render()` function dynamically builds the HTML for each todo item, creating text tags, delete buttons, and adding click events to cross items off.

---

## The Missing Pieces

There are two specific `// TODO:` comments in this file where the code is incomplete. Let's write the code to fix them.

### 1. Implementing `addTodo`

Inside the `addTodo(text)` function, we need to push a new object into our `todos` array. Every todo item needs:

* A unique `id` (we can use `Date.now()` as a quick trick for this).
* The actual `text` of the todo.
* A `completed` flag set to `false` by default.

### 2. Wiring Up the Remove Button

Inside the `render()` function, a delete button (`const remove = ...`) is created for every item, but clicking it doesn't do anything yet. We need to add an event listener that calls the existing `removeTodo(todo.id)` function.

---

## The Completed Code

Here is the fully functional file with both sections filled in. Notice how we build out the objects and event handlers explicitly:

```javascript
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

const todos = [];

function addTodo(text) {
  // 1. Create a new todo object with a unique ID, the text, and default state
  const newTodo = {
    id: Date.now(), // Generates a unique timestamp ID
    text: text,
    completed: false
  };
  
  // 2. Push it into our global state array
  todos.push(newTodo);
}

function removeTodo(id) {
  const index = todos.findIndex((t) => t.id === id);
  if (index >= 0) todos.splice(index, 1);
  render();
}

function toggleTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.completed = !todo.completed;
  render();
}

function render() {
  list.innerHTML = "";
  for (const todo of todos) {
    const li = document.createElement("li");
    li.className = "todo";
    if (todo.completed) li.classList.add("todo--completed");

    const label = document.createElement("span");
    label.className = "todo-label";
    label.textContent = todo.text;
    label.addEventListener("click", () => toggleTodo(todo.id));

    const remove = document.createElement("button");
    remove.className = "todo-remove";
    remove.textContent = "\u00d7";
    
    // WIRED UP: Listen for clicks on the delete button and trigger removeTodo
    remove.addEventListener("click", () => {
      removeTodo(todo.id);
    });

    li.appendChild(label);
    li.appendChild(remove);
    list.appendChild(li);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addTodo(text);
  input.value = "";
  render();
});

```

Would you like to explore how to hook this JavaScript up to a matching HTML structure, or would you prefer to dive into how the DOM manipulation elements work here?
````

</details>

<br>
