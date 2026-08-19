export type DecisionOption = {
  id: string;
  name: string;
  description: string;
  rationale: string;
};

export type DecisionCriterion = {
  id: string;
  name: string;
  description: string;
};

export type DecisionScore = {
  optionId: string;
  criterionId: string;
  score: number;
};

export type Decision = {
  id: string;
  title: string;
  context: string;
  options: DecisionOption[];
  criteria: DecisionCriterion[];
  scores: DecisionScore[];
  recommendation: string;
};