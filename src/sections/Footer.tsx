import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">SIGNAL</div>

            <p>
              Make better decisions by making
              trade-offs visible.
            </p>
          </div>

          <div className="footer__meta">
            <span>Decision workspace</span>
            <span>Built for clarity</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Signal</span>

          <span>
            Evidence. Priorities. Decisions.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;