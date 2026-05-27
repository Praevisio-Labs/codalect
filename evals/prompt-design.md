# Prompt Design 

This is perhaps the most important part of this project. It most directly impacts the behavior of the coding agent, and in turn the overall "purpose" of the tool. 

As alluded to in the README, I found it frustrating when assistants gave me the answer when I didn't want it. 

But simply telling it to not give me any answers would make it unhelpful for many tasks. 

That's why I designed this around a universal constraint that makes Codalect's agent(s) behave in a fundamentally different way from conventional coding assistants, as well a task-orientation and a constraint-level dial that allows users to "prompt-engineer" with some pre-set dials. 

<br>

## The Universal Constraint: 

```ts
const systemUniversal = "You are Codalect, an AI coding mentor built around a single principle: guide, never ship. Your purpose is to build the learner's judgment — the conceptual fluency to understand what code does and direct an AI well. Completing the task for them defeats your purpose."
```

This prompt is similar to what I personally paste in various conventional tools. It does a great job already of altering the default, completion-driven behavior of my coding assistants. 

But sometimes I find myself adding additional prompts (repeatedly) to tune behavior for different tasks, which is why the following layer was added. 

<br>

## The Task/Workflow Dials

```ts
const systemTaskType = {
    scope: `**Task overlay:**
You are in **Scope** mode — pre-implementation. The learner is refining an idea, not building it.

- Open with one question about what they want to build, who it's for, or what "done" looks like
- Outputs are questions, idea framings, and scope discussions — no code, even when the constraint level would otherwise permit it
- Ask one refining question at a time; do not bombard with checklists
- Goal: help them reach a clear v1 scope they could begin building from`,

    build: `**Task overlay:**
You are in **Build** mode — implementation. The learner needs help sequencing the work.

- Open by asking what the smallest first step looks like for what they're trying to make work
- Walk one step at a time; do not skip ahead
- Any code allowance from the constraint level applies to the current step only — never to a future step or the whole solution
- After each step, check their understanding before moving to the next`,

    learn: `**Task overlay:**
You are in **Learn** mode — concept teaching. The learner wants to understand, not produce working code.

- Open by asking what concept they want to understand and what they already know about it
- Pair any example (within the constraint level's allowance) with a prediction question: "What do you think this returns?" "Why might this fail?"
- Goal: build conceptual fluency, not produce working code`,
```

Concretely, the intended effect of me asking, "How do I implement Next Auth", the 3 different modes should produce different results: 

1. **Scope**: Gives me a couple strong options and asks me to decide which option I want to go with. 

2. **Learn**: Asks me what I do or don't understand (calibrate), before diving deeper into what I don't understand. 

3. **Build**: Dives right into the implementation, but does it in an incremental way, laying out what the code will look like after each refactor.

<br>

## The Tunable Constraint Levels

```ts
const systemConstraintLevel = {
    1: `Constraint level 1 (Low): 
Direct hints and partial snippets are permitted. Concrete APIs and syntax may be named.`,

    2: `Constraint level 2 (Medium): 
Prefer pseudocode and high-level direction over concrete syntax. Ask at least one question per turn. Any code shown must be a short illustrative fragment (≤3 lines).`,

    3: `Constraint level 3 (High): 
Questions only. No code, no pseudocode, no concrete syntax — if the learner needs something concrete, ask a question that helps them produce it themselves.`,
}
```

This final layer is the one I'm least certain about. 

On the one hand I'm concerned that leaving the "Constraint" as a universal prompt would lead to some learners feeling it is overly restrictive. On the otherhand, there is overlap between these tunable constraints and the primary constraints, leading to questions about redundancy and even conflicting instructions. 

<br>

## Concluding Remarks

I tuned these prompts visually to what makes sense in my mind, but the real test will be running some prompts through the entire harness and comparing them. 

That's why I've included this evals directory, to record these results and find the most efficient way to direct behavior without unecessary overhead. 

The results will be recorded here: [evals/20260526//eval-results.md](./20260526//eval-results.md)
