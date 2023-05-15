import { toast, ToastContainer } from "react-toastify";
import "../assets/css/auth.css";
import logo from "../assets/images/movieElm.jpg";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Auth() {
  const { signInWithGoogle, signInWithTwitter, loggedIn } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);
  const googleSignin = () => {
    signInWithGoogle();
    if (loggedIn) {
      console.log(loggedIn);
      navigate("/");
    }
  };

  const twitterSignIn = () => {
    toast.warning("Twitter not allowed ... Use Google Instead");
  };

  const facebookSignIn = () => {
    toast.warning("Facebook not allowed ... Use Google Instead");
  };
  return (
    <div className="contain">
      <ToastContainer />
      <div className="bts">
        <div className="img">
          <img src={logo} alt="" />
          <h4>
            <b> ▶️Movieem</b>
          </h4>
        </div>
        <a href="#" className="gplogin social" onClick={googleSignin}>
          <i className="fa-brands fa-google-plus" />
          <span>continue with Google</span>
        </a>
        <a href="#" className="fblogin social" onClick={facebookSignIn}>
          <i className="fa-brands fa-facebook" />
          <span>continue with Facebook</span>
        </a>
        <a href="#" className="twlogin social" onClick={twitterSignIn}>
          <i className="fa-brands fa-twitter" />
          <span>continue with Twitter</span>
        </a>
      </div>
    </div>
  );
}
