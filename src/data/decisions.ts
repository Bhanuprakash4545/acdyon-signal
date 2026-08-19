import type { Decision } from "../types/decision";

export const databaseDecision: Decision = {
  id: "database-selection",

  title: "Which database should we use?",

  context: "Choosing a default database for a new product.",

  options: [
    {
      id: "postgres",
      name: "PostgreSQL",
      description: "Relational database with strong consistency.",
      rationale:
        "Strongest overall fit because it leads on performance and scalability while remaining a practical default for a new product.",
    },
    {
      id: "mongodb",
      name: "MongoDB",
      description: "Document database designed for flexible schemas.",
      rationale:
        "A strong choice when schema flexibility matters, with excellent scalability and a balanced operational profile.",
    },
    {
      id: "sqlite",
      name: "SQLite",
      description: "Lightweight database for simpler deployments.",
      rationale:
        "Best for cost and simplicity, but its scalability makes it less suitable as the default for a growing product.",
    },
  ],

  criteria: [
    {
      id: "performance",
      name: "Performance",
      description: "Illustrative evaluation of expected performance.",
    },
    {
      id: "scalability",
      name: "Scalability",
      description: "Illustrative evaluation of growth flexibility.",
    },
    {
      id: "cost",
      name: "Cost",
      description: "Illustrative evaluation of operating cost.",
    },
    {
      id: "simplicity",
      name: "Simplicity",
      description: "Illustrative evaluation of operational complexity.",
    },
  ],

  scores: [
    {
      optionId: "postgres",
      criterionId: "performance",
      score: 5,
    },
    {
      optionId: "postgres",
      criterionId: "scalability",
      score: 5,
    },
    {
      optionId: "postgres",
      criterionId: "cost",
      score: 3,
    },
    {
      optionId: "postgres",
      criterionId: "simplicity",
      score: 3,
    },

    {
      optionId: "mongodb",
      criterionId: "performance",
      score: 4,
    },
    {
      optionId: "mongodb",
      criterionId: "scalability",
      score: 5,
    },
    {
      optionId: "mongodb",
      criterionId: "cost",
      score: 3,
    },
    {
      optionId: "mongodb",
      criterionId: "simplicity",
      score: 4,
    },

    {
      optionId: "sqlite",
      criterionId: "performance",
      score: 3,
    },
    {
      optionId: "sqlite",
      criterionId: "scalability",
      score: 2,
    },
    {
      optionId: "sqlite",
      criterionId: "cost",
      score: 5,
    },
    {
      optionId: "sqlite",
      criterionId: "simplicity",
      score: 5,
    },
  ],

  recommendation: "PostgreSQL",
};