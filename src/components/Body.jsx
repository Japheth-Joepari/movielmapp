import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import PopularMovies from "./RecentMovies";
import RecentMovies from "./PopularMovies";
import { API_KEY } from "../api/api";

async function fetchData() {
  const urls = [
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_video=true&with_genres=28&page=4`,
    `https://api.themoviedb.org/4/discover/movie?api_key=${API_KEY}&language=en-US&include_video=true`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_video=true&with_genres=27&page=4`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_video=true&with_genres=35&page=4`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_video=true&with_genres=18&page=4`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_video=true&with_genres=878&page=4`,
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&include_video=true&with_genres=16&page=4`,
  ];

  const requests = urls.map((url) => fetch(url).then((res) => res.json()));
  const [res, popularRes, hororRes, comedyRes, dramaRes, scienceRes, animeRes] =
    await Promise.all(requests);

  return {
    res,
    popularRes,
    hororRes,
    comedyRes,
    dramaRes,
    scienceRes,
    animeRes,
  };
}

function HomePage() {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDataAsync() {
      const newData = await fetchData();
      setData(newData);
    }
    fetchDataAsync();
  });

  if (!data) {
    return <p style={{ color: "white" }}>Loading...</p>;
  }

  return (
    <>
      <Banner />
      <main>
        <div className="grid gap-16 grid-cols-fluid">
          <PopularMovies res={data.res} imagePath={imagePath} />
          <RecentMovies
            popularRes={data.popularRes}
            imagePath={imagePath}
            hororRes={data.hororRes}
            comedyRes={data.comedyRes}
            dramaRes={data.dramaRes}
            scienceRes={data.scienceRes}
            animeRes={data.animeRes}
          />
        </div>
      </main>
    </>
  );
}

export default HomePage;
