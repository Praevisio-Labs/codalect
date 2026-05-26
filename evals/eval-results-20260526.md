# Eval Results

The result of this first-pass, manual evaluation showed clear differences between the task selector (Scope vs Build vs Learn). 

The impact of the constraint level selector (Low vs Medium vs High) was noticeable, but much less so. 

Given these results, I'm considering dropping the constraint level selector, but I think running some more targeted evals might give me better data to support a decision. 

For that I think an automated pipeline would be helpful, since setting up the selectors and configuring the right context file for each 3x3 matrix evaluation can be automated. 

Note: Prompt B was also used in the benchmark set ([evals/eval-benchmarks.md](./eval-benchmarks.md)), but the benchmarks show that all five baseline models responded identically to both prompts, so this manual eval includes only the responses to Prompt A.

---

## The 3×3 matrix - Intended Results

| | Low (1) | Medium (2) | High (3) |
|---|---|---|---|
| Scope | Refining questions, may name candidate features | Refining questions only, no feature suggestions | Pure questions, no suggestions of any kind |
| Build | Hints + short snippets at the current step | Pseudocode + question per turn | Questions only, even mid-implementation |
| Learn | Concrete short examples + prediction Qs | Minimal snippets + prediction Qs | Pure conceptual questions, no code |

<br>

## Actual Results - Prompt A

These results were manually judged by me, with checkmarks being given to responses that performed substantially better than the benchmark responses from conventional models. 

I scored "Build · High" as a fail because it broke character and stated "since we're in Build mode...", which broke the Fifth wall, but did not necessarily break character. 

That being said, these responses are still far from being production ready, although they do show that the system guidance is effectively altering the completion-oriented behavior. 

<br> 

| | Low (1) | Medium (2) | High (3) |
|---|---|---|---|
| Scope | ✓ | ✓ | ✓ |
| Build | ✓ | ✓ | ✗ |
| Learn | ✓ | ✓ | ✓ |

<br> 

> Prompt A: How do I solve this question?

<br> 

### Scope · Low

```md
I’m glad you’re tackling it. To help you scope a solid approach, can you tell me:

* Who is this to-do app for (e.g., personal notes, team tasks, accessibility focus)?
* What does “done” look like for you (minimum viable behavior and any nice-to-have features)?
* Are there any constraints (time, tech stack, accessibility, persistence)?

One clarifying question: what’s your minimum viable version of the app that you want to implement first? For example, is the goal to just add and remove items with simple UI, or also persist them across reloads?
```

<br>

### Scope · Medium

```md
I’m guessing you’re working on this to-do app. To help you scope it, tell me:

What does “done” look like for this task? Are you aiming for:

* A fully working add/remove/toggle flow with unique IDs, or
* Just wiring the remaining pieces and basic state rendering?

One refining question: who is this for (e.g., a personal productivity tool, a learning project, or a demo for others), and what minimal behavior would you call “done”?
```

<br>

### Scope · High

```md
I’m curious: when you say “solve this question,” what’s the goal you’re aiming for—implementing the missing behavior in your app, or just understanding how it works and why it’s structured that way?

If your aim is to implement it, what would “done” look like for you? For example, should adding a todo also assign a unique id, or should there be persistence (localStorage) as a next step?
```

<br>

### Build · Low

```md
Great. Let’s break it down step by step. First, what would be the smallest first step you can take to move this toward a working app?

Hint for the first step (no code yet): you need to make addTodo create a `todo` object with id, text, and completed, and push it into the todos array. Then the existing render logic will display it.

What is your plan for the very first step? If you want, describe in words what the new todo object should look like, and we’ll translate that into the next small change.
```

<br>

### Build · Medium

```md
Great question. Let’s approach it step by step. First, what’s the smallest first action you want to take to move this app toward working functionality?

A sensible starting point: implement the missing addTodo behavior so that new todos get pushed into the `todos` array with a unique id, the input text, and `completed: false`. This is the core data update that other parts rely on (render, toggle, remove).

Questions to confirm before we proceed:

* How do you want to generate a unique id? (e.g., incremental counter, timestamp, or a UUID)
* Do you want any constraints on the shape of a todo object beyond id, text, completed?

If you’re ready to outline the first step, here’s the high-level plan for this step:

* Create a new todo object with fields: `id`, `text`, `completed`.
* Push it into the `todos` array.
* Use the chosen method to generate a unique `id`.
* Leave rendering to be triggered by the existing `render()` call after you add.

What do you want to use for generating the unique id? For example, we could use:

* A simple incremental counter stored outside the function, or
* `Date.now()` plus a counter to avoid collisions within the same millisecond, or
* A small UUID function if you have one in mind.

Once you decide, I’ll guide you through updating the code one tiny step at a time and we’ll verify as we go.
```

<br>

### Build · High

```md
Great question. Since we’re in Build mode, let’s break it down step by step. What is the smallest concrete first step you can do to move toward solving this?

As a hint for the first step: in the current code, two TODOs exist:

* addTodo(text): you need to push a new todo with id, text, completed.
* wire the remove button to call removeTodo with the correct id.

Which of these two would you like to tackle first, and how would you define the shape of a todo object you plan to push? For example, what fields and how will you generate a unique id?
```

<br>

### Learn · Low

```md
First, quick check:

* What concept are you trying to understand with this code? (e.g., arrays of objects, rendering lists, event handling, immutability, or DOM interactions)
* What do you already know about it?

If you want, I can guide you step by step through the key ideas in this file. I’ll pair each concept with a mini example/prediction question so you actively reason about it.

Concepts to cover in this snippet:

* How to store items as objects in an array (todo items with id, text, completed)
* Why we need a unique id for each item and how to generate it
* How addTodo should modify the `todos` array and trigger rendering
* How removeTodo finds and deletes by id
* How toggleTodo flips the completed flag and re-renders
* How render creates DOM nodes from the data and wires up events
* How the form submission flows: capture text, create todo, clear input, render

Prediction questions you can answer as you go:

* If I push a new todo with a unique id into `todos`, what will `render()` do with it?
* What happens when `remove` button is clicked if the `remove` element is wired to `removeTodo` with the todo’s id?
* Why is `render()` called after removing or toggling?

Free-form exercise prompts:

* Sketch the shape of a todo object you’d store in the array (types and fields).
* Describe the sequence of events from form submit to the new item appearing in the list.
* Explain how the code ensures the UI updates when state changes.

If you want, I can guide you by asking you to predict what each missing piece should do, and then we can map those predictions back to the code. What concept would you like to focus on first?
```

<br>

### Learn · Medium

```md
Great question. Before we dive in, tell me:

* What concept are you trying understand with this task? (e.g., array manipulation, rendering lists, event handling, closures, unique IDs)
* What do you already know about it?
* What part of the code is confusing or what outcome do you expect?

Also, here’s how I’ll approach it in a teaching way:

* I’ll pair any example with a short prediction question: “What do you think this returns?” or “Why might this fail?”
* I’ll stay at a high level and use pseudocode or short fragments (≤ 3 lines) to illustrate concepts, not full implementations.

To get started, what concept would you like to focus on with this to-do app code? For example, we could discuss:

* How to assign unique IDs to new todos
* How to wire the remove button to call `removeTodo`
* How rendering works with a central `render()` function

Once you pick, I’ll guide you step by step with questions and predictions.
```

<br>

### Learn · High

```md
I’m here to help you think through it, not provide a full solution. Let’s approach conceptually.

First, what concept are you trying to understand with this task? A few possibilities:

* How to extend a data model (the `todos` array) with objects that have id, text, completed.
* How to wire event handlers to dynamically created DOM elements (the remove button and label click).
* How rendering keeps the UI in sync with data (the render loop calling after mutations).
* How to generate a unique id for each new todo item.

To begin, tell me:

* What do you already understand about creating and mutating the `todos` array?
* What happens when you call `render()` in this code?
* How would you identify which todo to remove when the remove button is clicked?

Pair that with a small prediction exercise:

* If you push a new todo like { id: 1, text: "Example", completed: false }, what would the `todos` array look like after the push?
* If you click the label for a given todo, what code path runs (which function is invoked and with what id)?
* Why might attaching the click handler to the label be insufficient for removing items, and how would you approach wiring the remove button?

Guiding questions to scaffold the missing pieces without writing code:

* How can you ensure each new todo has a unique id? what strategies exist (incrementing counter, timestamp, UUID), and what are pros/cons in this small app?
* In the `render()` loop, how do you associate the remove button with the specific todo it should delete? What kind of data or closure enables that?
* After removing or toggling, why do we call `render()` again, and what would happen if we forgot to call it?

If you want, we can walk through a concrete mental model:

* Imagine you add a todo with id 1. How does the `todos` array change? How does `render()` create DOM nodes for that item? How does clicking the remove button know to remove id 1?

Tell me which of these angles you’d like to focus on, and I’ll guide you step by step with concept questions and small prompts to build the understanding.
```

---

Date of Eval: May 26, 2026
