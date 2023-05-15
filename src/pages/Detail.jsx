import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_KEY } from "../api/api";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Detail() {
  const loader = {
    width: "100vw",
    height: "100%",
    display: "flex",
    marginTop: "12rem",
    flexDirection: "row",
    justifyContent: "center",
  };

  const { id } = useParams();
  const [data, setData] = useState(null);
  const path = "https://image.tmdb.org/t/p/original";
  const notify = () => {
    toast.warning("Browser not compatible");
    console.log("clicked");
  };

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      const res = await data.json();
      setData({ res });
    }
    fetchData();
  });

  if (!data) {
    return (
      <div style={loader}>
        <img src={"https://i.gifer.com/VAyR.gif"} alt="" />
      </div>
    );
  }

  const { res } = data;

  return (
    <>
      <Header />
      <ToastContainer />
      <section className="movie-detail">
        <div className="container">
          {" "}
          <figure className="movie-detail-banner">
            <img
              alt="loading"
              height={600}
              width={900}
              src={path + res.backdrop_path}
              style={{ height: "30rem", objectFit: "cover" }}
            />
            <button className="play-btn">
              <ion-icon name="play-circle-outline" onClick={notify}></ion-icon>
            </button>
          </figure>
          <div className="movie-detail-content">
            <p className="detail-subtitle">Check out 👇</p>
            <h1 className="h1 detail-title">{res.title}</h1>
            <div className="meta-wrapper">
              <div className="badge-wrapper">
                <div className="badge badge-outline">HD</div>
                <div className="badge badge-fill">{res.status}</div>
              </div>

              <div className="date-time">
                <div>
                  <ion-icon name="calendar-outline" />
                  <time dateTime={2021}>{res.release_date}</time>
                </div>
                <div>
                  <ion-icon name="time-outline" />
                  <time dateTime="PT115M">{res.runtime} minutes </time>
                </div>
              </div>
            </div>
            <p className="storyline">{res.overview}</p>
            <Link to="/" download className="download-btn">
              <span href="/">Back to Home</span>

              <ion-icon name="download-outline"></ion-icon>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
