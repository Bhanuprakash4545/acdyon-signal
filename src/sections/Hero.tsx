import DecisionPreview from "../components/DecisionPreview";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="hero__eyebrow">Decision workspace</p>

            <h1 className="hero__title">
              Make better decisions by making trade-offs visible.
            </h1>

            <p className="hero__description">
              Bring evidence, priorities, and options into one focused
              decision workspace.
            </p>

            <div className="hero__actions">
              <a className="hero__cta" href="#decision-demo">
                Create a decision
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div id="decision-demo" className="hero__product">
            <DecisionPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;