import "./Navbar.css";

type NavbarProps = {
  onCreateDecision: () => void;
};

function Navbar({ onCreateDecision }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="navbar__inner">

        <a
          href="#"
          className="navbar__brand"
          onClick={(event) => {
            event.preventDefault();

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          SIGNAL
        </a>

        <nav className="navbar__nav">
          <a href="#product">
            Product
          </a>

          <a href="#how-it-works">
            How it works
          </a>

          <button
            type="button"
            className="navbar__cta"
            onClick={onCreateDecision}
          >
            <span>Create a decision</span>
            <span aria-hidden="true">→</span>
          </button>
        </nav>

        <button
          type="button"
          className="navbar__menu"
          aria-label="Open navigation"
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;