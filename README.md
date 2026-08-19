# Signal — Decision Workspace

A premium decision-making workspace designed to help people structure difficult choices, compare options, and understand trade-offs clearly.

Signal turns an uncertain decision into a structured workspace where users can define the decision, provide context, compare options against criteria, and review the resulting trade-offs.

## Live Demo

**Live Website:**  
https://acdyon-signal-tan.vercel.app/

**GitHub Repository:**  
https://github.com/Bhanuprakash4545/acdyon-signal

---

## Overview

Making an important decision often becomes difficult when there are too many options, competing priorities, and unclear trade-offs.

Signal provides a simple structure for turning an open-ended question into a decision that can be evaluated and explained.

The experience is organized around three main steps:

1. **Frame the decision**
2. **Compare the trade-offs**
3. **Decide with clarity**

The interface focuses on clarity, hierarchy, restrained interaction, and responsive behavior rather than unnecessary visual complexity.

---

## Features

- Create a structured decision
- Define the decision question
- Add supporting context
- Add multiple decision options
- Remove options when necessary
- Define comparison criteria
- Add and remove criteria
- Interactive decision preview
- Compare options against evaluation criteria
- View scores and trade-offs
- Display a recommendation based on the evaluation
- Responsive desktop and mobile layouts
- Responsive navigation
- Hover and selection micro-interactions
- Clean, minimal visual design

---

## Example Decision

The included example demonstrates a database-selection decision:

> **Which database should we use?**

The available options include:

- PostgreSQL
- MongoDB
- SQLite

The options are evaluated against criteria such as:

- Performance
- Scalability
- Cost
- Simplicity

This example demonstrates how Signal makes trade-offs visible instead of presenting a decision as a simple yes/no choice.

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- CSS

### Development

- Node.js
- npm
- Git
- GitHub

### Deployment

- Vercel

---

## How It Works

### 1. Frame the Decision

The user begins by defining:

- The decision question
- The relevant context

This converts a vague problem into a clearly defined decision.

### 2. Add Options

The user adds the possible choices.

Signal supports multiple options and allows unnecessary options to be removed.

### 3. Define Criteria

The user defines the factors that matter when comparing the available options.

Examples include:

- Performance
- Scalability
- Cost
- Simplicity

### 4. Review the Decision

The decision preview presents the available options and their evaluation against the selected criteria.

The user can interact with the options to understand the trade-offs and recommendation.

---

## Design Approach

The interface was designed around a few principles:

### Clarity over decoration

The visual system uses typography, spacing, borders, and hierarchy to communicate structure rather than relying heavily on decorative elements.

### Visible trade-offs

The product experience is centered around making differences between options easy to understand.

### Restrained interaction

Interactions are intentionally subtle and functional. Hover states, selections, and transitions provide feedback without distracting from the decision-making process.

### Responsive by default

The layout adapts across desktop, tablet, and mobile screen sizes while maintaining readable typography, spacing, and usable controls.

---

## Responsive Design

The application was designed and tested for:

- Desktop layouts
- Tablet layouts
- Mobile layouts
- 390px mobile viewport
- 1440px desktop viewport

The layout is designed to avoid horizontal scrolling and maintain usable interactions across screen sizes.

---

## Accessibility Considerations

The interface uses semantic HTML elements and accessible interaction patterns where appropriate, including:

- Semantic sections
- Navigation labels
- Button elements for interactive actions
- Form labels
- `aria-label` attributes where necessary
- `aria-pressed` for selectable decision options
- Keyboard-friendly native controls

---

## Deployment

The project is deployed using Vercel.

### Production URL

[https://acdyon-signal-tan.vercel.app/](https://acdyon-signal-tan.vercel.app/)


## Project Structure

```text
acdyon-signal/
│
├── public/
├── src/
│   ├── components/
│   │   ├── DecisionBuilder.css
│   │   ├── DecisionBuilder.tsx
│   │   ├── DecisionPreview.tsx
│   │   ├── Navbar.css
│   │   └── Navbar.tsx
│   │
│   ├── data/
│   │   └── decisions.ts
│   │
│   ├── sections/
│   │   ├── Footer.css
│   │   ├── Footer.tsx
│   │   ├── Hero.css
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.css
│   │   └── HowItWorks.tsx
│   │
│   ├── styles/
│   │   └── tokens.css
│   │
│   ├── types/
│   │   └── decision.ts
│   │
│   ├── utils/
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── DECISIONS.md
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

---

## Future Improvements

With additional development time, Signal could be extended with:

- Persistent decision storage
- User accounts
- Saved decision history
- Custom scoring weights
- More advanced comparison visualizations
- AI-assisted decision analysis
- Decision sharing
- Exportable decision reports
- Collaborative decision-making
- Backend persistence
- Authentication and authorization

These features were intentionally kept outside the current scope to focus on the core decision-making experience.

---

## Status

**Project Status:** Completed

**Frontend:** React + TypeScript

**Build Tool:** Vite

**Deployment:** Vercel

**Repository:** GitHub

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### Clone the repository

```bash
git clone https://github.com/Bhanuprakash4545/acdyon-signal.git
```
### Navigate into the project
```bash
cd acdyon-signal
```
### Install dependencies
```bash
npm install
```
### Start the development server
```bash
npm run dev
```

The application will be available at the local development URL shown in the terminal.

---

## Production Build

To create a production build:
```bash
npm run build
```
The production files are generated inside:

dist/
To preview the production build locally:
```bash
npm run preview
```
