import React, { useState, useEffect } from "react";

const Movie = () => {
  const [movieData, setMovieData] = useState([]);
  const [movieTitle, setMovieTitle] = useState('Avengers');
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if(movieTitle !== undefined){
    const fetchMovies = async () => {
      const URL = `http://www.omdbapi.com/?s=${movieTitle}&apikey=f2c67f94`;
      const response = await fetch(URL);
      const final_Data = await response.json();
      //console.log(final_Data.Search);
      setMovieData(final_Data.Search);
    };
            fetchMovies();
  }
    // eslint-disable-next-line
  }, [isClicked]);
  return (
    <>
      <div>
        <div className="header">
          <h2>Moviestaan</h2>
        </div>
        <div className="body">
          <input
            type="text"
            name="search"
            placeholder="Movies , Series.."
            onChange={(e) => {
              setMovieTitle(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setIsClicked((prevState) => !prevState);
            }}
            className="searchBtn"
          >
            Search
          </button>
        </div>
        <p>If site doesn't work properly try to change  > Site setting > Insecure Content > Allow and then reload.</p>
        <div className="body-container">
    
        </div>
        <div className="display">
          {movieData !== undefined ? movieData.map((item, i) => {
            return (
              <div key={i} className="display-cards">
                <img src={item.Poster} className="picture" alt="poster"/>
                <h4>{item.Title}</h4>
                <p>Year- {item.Year}</p>
              </div>
            );
          }):false}
        </div>
      </div>
    </>
  );
};

export default Movie;
