import "../assets/css/style.css";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";

export default function HomePage() {
  const { loggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/auth");
    }
  });
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}
