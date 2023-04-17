import MovieElmLogo from "../assets/images/movieElm.jpg";

export default function Header() {
  return (
    <>
      <header className="header" data-header>
        <div className="container">
          <div className="overlay" data-overlay />
          <a href="/">
            <img src={MovieElmLogo} alt="Filmlane logo" className="hlogo" />
            <b style={{ color: "white", margintop: "2rem" }}>MovieElm</b>
          </a>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="./index.html" className="logo"></a>
              <button className="menu-close-btn" data-menu-close-btn>
                <ion-icon name="close-outline" />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
