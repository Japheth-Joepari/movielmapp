export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="divider" />
          <div className="quicklink-wrapper">
            <ul className="quicklink-list">
              <li>
                <a href="#" className="quicklink-link">
                  <p className="copyright">
                    © 2022 joepari_codes All Rights Reserved
                  </p>
                </a>
              </li>
            </ul>
            <ul className="social-list">
              <li>
                <a
                  href="https://web.facebook.com/japhethjoepari"
                  className="social-link"
                >
                  <ion-icon name="logo-facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Joepari_Codes"
                  className="social-link"
                >
                  <ion-icon name="logo-twitter" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/japheth-joepari/"
                  className="social-link"
                >
                  <ion-icon name="logo-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
