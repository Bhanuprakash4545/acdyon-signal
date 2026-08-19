import { useState } from "react";
import "./DecisionBuilder.css";

function DecisionBuilder() {
  const [question, setQuestion] = useState("");
  const [context, setContext] = useState("");

  const [options, setOptions] = useState([
    "",
    "",
    "",
  ]);

  const [criteria, setCriteria] = useState([
    "",
    "",
    "",
  ]);

  const updateOption = (index: number, value: string) => {
    setOptions((current) =>
      current.map((option, i) =>
        i === index ? value : option,
      ),
    );
  };

  const updateCriterion = (index: number, value: string) => {
    setCriteria((current) =>
      current.map((criterion, i) =>
        i === index ? value : criterion,
      ),
    );
  };

  const addOption = () => {
    if (options.length < 5) {
      setOptions((current) => [...current, ""]);
    }
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      setOptions((current) =>
        current.filter((_, i) => i !== index),
      );
    }
  };

  const addCriterion = () => {
    if (criteria.length < 5) {
      setCriteria((current) => [...current, ""]);
    }
  };

  const removeCriterion = (index: number) => {
    if (criteria.length > 2) {
      setCriteria((current) =>
        current.filter((_, i) => i !== index),
      );
    }
  };

  const isValid =
    question.trim().length > 0 &&
    context.trim().length > 0 &&
    options.filter((option) => option.trim()).length >= 2 &&
    criteria.filter((criterion) => criterion.trim()).length >= 2;

  const handleSubmit = () => {
    if (!isValid) {
      return;
    }

    const decision = {
      question: question.trim(),
      context: context.trim(),
      options: options
        .filter((option) => option.trim())
        .map((option) => option.trim()),
      criteria: criteria
        .filter((criterion) => criterion.trim())
        .map((criterion) => criterion.trim()),
    };

    console.log("Decision created:", decision);

    alert("Decision created successfully.");
  };

  return (
    <div className="decision-builder">
      <div className="container">

        <div className="decision-builder__intro">
          <span>CREATE A DECISION</span>

          <h1>
            What decision are you trying to make?
          </h1>

          <p>
            Define the question, options, and criteria you want
            Signal to evaluate.
          </p>
        </div>

        <div className="decision-builder__form">

          {/* 01 — DECISION */}

          <section className="builder-section">
            <div className="builder-section__heading">
              <span>01</span>

              <div>
                <h2>Decision</h2>

                <p>
                  Start with the question you need to answer.
                </p>
              </div>
            </div>

            <label>
              Decision question

              <input
                type="text"
                value={question}
                onChange={(event) =>
                  setQuestion(event.target.value)
                }
                placeholder="Which database should we use?"
              />
            </label>

            <label>
              Context

              <textarea
                value={context}
                onChange={(event) =>
                  setContext(event.target.value)
                }
                placeholder="Add context that will help explain this decision."
                rows={4}
              />
            </label>
          </section>

          {/* 02 — OPTIONS */}

          <section className="builder-section">
            <div className="builder-section__heading">
              <span>02</span>

              <div>
                <h2>Options</h2>

                <p>
                  What are the possible choices?
                </p>
              </div>
            </div>

            <div className="builder-list">
              {options.map((option, index) => (
                <div
                  className="builder-list__row"
                  key={index}
                >
                  <input
                    type="text"
                    value={option}
                    onChange={(event) =>
                      updateOption(
                        index,
                        event.target.value,
                      )
                    }
                    placeholder={`Option ${index + 1}`}
                  />

                  {options.length > 2 && (
                    <button
                      type="button"
                      className="builder-remove"
                      onClick={() =>
                        removeOption(index)
                      }
                      aria-label={`Remove option ${
                        index + 1
                      }`}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>

            {options.length < 5 && (
              <button
                type="button"
                className="builder-add"
                onClick={addOption}
              >
                + Add option
              </button>
            )}
          </section>

          {/* 03 — CRITERIA */}

          <section className="builder-section">
            <div className="builder-section__heading">
              <span>03</span>

              <div>
                <h2>Criteria</h2>

                <p>
                  What matters when comparing the options?
                </p>
              </div>
            </div>

            <div className="builder-list">
              {criteria.map((criterion, index) => (
                <div
                  className="builder-list__row"
                  key={index}
                >
                  <input
                    type="text"
                    value={criterion}
                    onChange={(event) =>
                      updateCriterion(
                        index,
                        event.target.value,
                      )
                    }
                    placeholder={`Criterion ${
                      index + 1
                    }`}
                  />

                  {criteria.length > 2 && (
                    <button
                      type="button"
                      className="builder-remove"
                      onClick={() =>
                        removeCriterion(index)
                      }
                      aria-label={`Remove criterion ${
                        index + 1
                      }`}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>

            {criteria.length < 5 && (
              <button
                type="button"
                className="builder-add"
                onClick={addCriterion}
              >
                + Add criterion
              </button>
            )}
          </section>

          {/* REVIEW */}

          <section className="builder-review">
            <div>
              <span>READY?</span>

              <h2>
                Review your decision
              </h2>

              <p>
                Signal will use these options and criteria
                to make the trade-offs visible.
              </p>
            </div>

            <button
              type="button"
              className="builder-submit"
              disabled={!isValid}
              onClick={handleSubmit}
            >
              Create decision →
            </button>
          </section>

        </div>
      </div>
    </div>
  );
}

export default DecisionBuilder;