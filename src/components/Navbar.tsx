import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <a
            className="navbar__logo"
            href="/"
            aria-label="Signal home"
            onClick={closeMenu}
          >
            SIGNAL
          </a>

          <nav className="navbar__links" aria-label="Main navigation">
            <a href="#product">Product</a>
            <a href="#how-it-works">How it works</a>
          </nav>

          <a className="navbar__cta" href="#decision">
            Create a decision
            <span aria-hidden="true">→</span>
          </a>

          <button
            className={`navbar__menu ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={`navbar__mobile ${menuOpen ? "is-open" : ""}`}
          aria-label="Mobile navigation"
        >
          <a href="#product" onClick={closeMenu}>
            Product
          </a>

          <a href="#how-it-works" onClick={closeMenu}>
            How it works
          </a>

          <a href="#decision" onClick={closeMenu}>
            Create a decision
            <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;