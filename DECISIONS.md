# DECISIONS.md

# Signal — Frontend Challenge Decisions

## 1. Approach and the alternative I rejected

I chose **Part 2 — The Premium Home Page** rather than the scraper track because I wanted to go deep on one complete product experience instead of splitting the available time across two unrelated systems.

For Signal, I chose a lightweight **React + TypeScript + CSS** implementation. I deliberately avoided adding a larger UI framework or backend because the challenge evaluates the quality of the shipped home page, not the size of the technology stack. This allowed me to focus the time on visual hierarchy, responsive behavior, interaction design, and product clarity.

The main product demonstration is an interactive decision card. Users can switch between **PostgreSQL, MongoDB, and SQLite**, and the displayed trade-offs and Signal's view change with the selected option. I chose this over a static product screenshot because it demonstrates the core idea of Signal within the home page itself.

## 2. Trade-off under the time limit

I prioritized the **homepage experience, responsive behavior, and interactive product demonstration** over building a full production backend, authentication system, or additional application screens.

I also deliberately avoided fabricated testimonials, user counts, customer logos, and incomplete dark-mode support. This keeps the product presentation honest and follows the assessment's emphasis on real product value rather than invented credibility.

With a real week, I would connect the decision flow to a real evaluation engine and persistence layer, add stronger accessibility and keyboard interaction, and introduce automated tests for the decision logic and responsive behavior.

## 3. AI usage and what I verified

I used AI tools during development for implementation ideas, CSS refinement, responsive layout work, debugging, and reviewing alternative approaches. I treated AI output as a development aid rather than as final code.

I personally ran and tested the application locally, inspected the homepage at desktop and mobile sizes, refined spacing and typography, verified the responsive navigation, tested the PostgreSQL/MongoDB/SQLite interaction, and checked the Create a Decision and How It Works flows. I also removed or changed suggestions that did not fit the assessment or the intended Signal design.

The final implementation is intentionally limited to features and interactions that I understand and can explain during a technical follow-up discussion.