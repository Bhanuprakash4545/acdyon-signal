import { useState } from "react";
import { databaseDecision } from "../data/decisions";
import "./DecisionPreview.css";

function DecisionPreview() {
  const decision = databaseDecision;

  const [selectedOptionId, setSelectedOptionId] = useState(
    decision.options[0].id,
  );

  const selectedOption = decision.options.find(
    (option) => option.id === selectedOptionId,
  );

  const getScore = (criterionId: string) => {
    return (
      decision.scores.find(
        (score) =>
          score.optionId === selectedOptionId &&
          score.criterionId === criterionId,
      )?.score ?? 0
    );
  };

  const totalScore = decision.criteria.reduce(
    (total, criterion) => total + getScore(criterion.id),
    0,
  );

  const maxScore = decision.criteria.length * 5;

  const fitPercentage = Math.round((totalScore / maxScore) * 100);

  return (
    <div className="decision-preview" id="decision-demo">
      <div className="decision-preview__header">
        <div>
          <span className="decision-preview__eyebrow">
            Example decision
          </span>

          <h2>{decision.title}</h2>

          <p>{decision.context}</p>
        </div>

        <span className="decision-preview__status">In review</span>
      </div>

      <div className="decision-preview__options">
        {decision.options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`decision-option ${
              selectedOptionId === option.id ? "is-selected" : ""
            }`}
            onClick={() => setSelectedOptionId(option.id)}
            aria-pressed={selectedOptionId === option.id}
          >
            <span>{option.name}</span>
          </button>
        ))}
      </div>

      <div className="decision-preview__criteria">
        {decision.criteria.map((criterion) => {
          const score = getScore(criterion.id);
          const percentage = score * 20;

          return (
            <div className="decision-criterion" key={criterion.id}>
              <span>{criterion.name}</span>

              <div className="decision-criterion__track">
                <div
                  className="decision-criterion__value"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <span className="decision-criterion__score">
                {score}/5
              </span>
            </div>
          );
        })}
      </div>

      <div className="decision-preview__recommendation">
        <div className="decision-preview__recommendation-header">
          <div>
            <span>Signal's view</span>

            <strong>{selectedOption?.name}</strong>
          </div>

          <div className="decision-fit">
            <strong>{fitPercentage}%</strong>
            <span>fit</span>
          </div>
        </div>

        <p>{selectedOption?.rationale}</p>
      </div>
    </div>
  );
}

export default DecisionPreview;