import MovieElmLogo from "../assets/images/movieElm.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import userImg from "../assets/images/user_prev_ui.png";

export default function Header() {
  const { image, userSignOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleImageClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
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
          {/* <select className="bttn" onClick={() => userSignOut()}>
            <option value="">{name ? name.slice(0, 4) : "User"}</option>
          </select> */}

          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={image ? image : userImg}
              alt="Dropdown Image"
              onClick={handleImageClick}
              style={{
                cursor: "pointer",
                height: "2.7rem",
                borderRadius: "50%",
              }}
            />

            {isDropdownOpen && (
              <div>
                {/* Dropdown Content */}
                <a href="#" onClick={userSignOut} className="white">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
