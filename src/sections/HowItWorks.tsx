import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="how-it-works"
      aria-labelledby="how-it-works-title"
    >
      <div className="container">
        <div className="how-it-works__intro">
          <p className="how-it-works__eyebrow">
            <span className="how-it-works__eyebrow-dot" />
            HOW SIGNAL WORKS
          </p>

          <h2 id="how-it-works-title">
            From uncertainty to a
            <br />
            decision you can explain.
          </h2>

          <p className="how-it-works__description">
            Signal gives you a simple structure for thinking through
            difficult choices without hiding the trade-offs.
          </p>
        </div>

        <div className="how-it-works__steps">
          <article className="how-step">
            <span className="how-step__number">01</span>

            <div className="how-step__content">
              <h3>Frame the decision</h3>

              <p>
                Turn a vague question into a clear decision with
                the context that matters.
              </p>
            </div>
          </article>

          <article className="how-step">
            <span className="how-step__number">02</span>

            <div className="how-step__content">
              <h3>Compare the trade-offs</h3>

              <p>
                Put your options and priorities side by side so
                the important differences are visible.
              </p>
            </div>
          </article>

          <article className="how-step">
            <span className="how-step__number">03</span>

            <div className="how-step__content">
              <h3>Decide with clarity</h3>

              <p>
                See what matters most and move forward with a
                decision you can explain.
              </p>
            </div>
          </article>
        </div>

        <div className="how-it-works__statement">
          <p>
            Better decisions come from making the important trade-offs visible.
          </p>
        </div>

        <footer className="how-it-works__footer">
          <div className="how-it-works__footer-left">
            <p className="how-it-works__footer-brand">
              SIGNAL
            </p>

            <p className="how-it-works__footer-description">
              A clearer way to evaluate options, priorities, and uncertainty.
            </p>
          </div>

          <div className="how-it-works__footer-meta">
            <span>Decision workspace</span>
            <span>© 2026 Signal</span>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default HowItWorks;