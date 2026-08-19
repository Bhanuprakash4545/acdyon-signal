import { useState } from "react";
import "./Navbar.css";

type NavbarProps = {
  onCreateDecision: () => void;
};

function Navbar({ onCreateDecision }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHowItWorks = () => {
    setIsMenuOpen(false);

    document.getElementById("how-it-works")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCreateDecision = () => {
    setIsMenuOpen(false);
    onCreateDecision();
  };

  const handleBrandClick = () => {
    setIsMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Brand */}
        <button
          type="button"
          className="navbar__brand"
          onClick={handleBrandClick}
        >
          SIGNAL
        </button>

        {/* Desktop navigation */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <button
            type="button"
            className="navbar__link"
            onClick={handleHowItWorks}
          >
            How it works
          </button>

          <button
            type="button"
            className="navbar__cta"
            onClick={handleCreateDecision}
          >
            <span>Create a decision</span>
            <span aria-hidden="true">→</span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`navbar__mobile-menu ${
            isMenuOpen ? "navbar__mobile-menu--open" : ""
          }`}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`navbar__mobile-panel ${
          isMenuOpen ? "navbar__mobile-panel--open" : ""
        }`}
      >
        <div className="navbar__mobile-panel-inner">
          <button
            type="button"
            className="navbar__mobile-link"
            onClick={handleHowItWorks}
          >
            How it works
          </button>

          <button
            type="button"
            className="navbar__mobile-cta"
            onClick={handleCreateDecision}
          >
            <span>Create a decision</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;