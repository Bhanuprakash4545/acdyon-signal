import "./HowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Frame the decision",
    description:
      "Turn a vague question into a clear decision with the context that matters.",
  },
  {
    number: "02",
    title: "Compare the trade-offs",
    description:
      "Put your options and priorities side by side so the important differences are visible.",
  },
  {
    number: "03",
    title: "Decide with clarity",
    description:
      "See what matters most and move forward with a decision you can explain.",
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="how-it-works__header">
          <p className="how-it-works__eyebrow">
            How Signal works
          </p>

          <h2>
            From uncertainty to a decision you can explain.
          </h2>

          <p>
            Signal gives you a simple structure for thinking
            through difficult choices without hiding the trade-offs.
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step) => (
            <article
              className="how-it-works__step"
              key={step.number}
            >
              <span className="how-it-works__number">
                {step.number}
              </span>

              <div>
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;