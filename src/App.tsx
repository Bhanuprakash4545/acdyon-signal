import { useState } from "react";

import Navbar from "./components/Navbar";
import DecisionPreview from "./components/DecisionPreview";
import DecisionBuilder from "./components/DecisionBuilder";
import HowItWorks from "./sections/HowItWorks";

import "./sections/Hero.css";
import "./index.css";

function App() {
  const [showBuilder, setShowBuilder] = useState(false);

  const openBuilder = () => {
    setShowBuilder(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeBuilder = () => {
    setShowBuilder(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*
   * CREATE DECISION PAGE
   */

  if (showBuilder) {
    return (
      <main className="builder-page">
        <button
          type="button"
          className="builder-page__back"
          onClick={closeBuilder}
          aria-label="Go back to Signal"
        >
          ←
        </button>

        <DecisionBuilder onCancel={closeBuilder} />
      </main>
    );
  }

  /*
   * HOME PAGE
   */

  return (
    <>
      <Navbar onCreateDecision={openBuilder} />

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero__layout">
              {/* LEFT — HERO CONTENT */}

              <div className="hero__content">
                <p className="hero__eyebrow">
                  Decision workspace
                </p>

                <h1>
                  Make better decisions by making trade-offs
                  visible.
                </h1>

                <p className="hero__description">
                  Bring evidence, priorities, and options into one
                  focused decision workspace.
                </p>

                <button
                  type="button"
                  className="hero__cta"
                  onClick={openBuilder}
                >
                  <span>Create a decision</span>

                  <span aria-hidden="true">→</span>
                </button>
              </div>

              {/* RIGHT — INTERACTIVE DEMO */}

              <div className="hero__preview">
                <DecisionPreview />
              </div>
            </div>
          </div>
        </section>

        {/* HOW SIGNAL WORKS */}

        <HowItWorks />
      </main>
    </>
  );
}

export default App;