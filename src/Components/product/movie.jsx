import React, { useEffect, useState } from "react";
import "../../App.css";

const MoviesList = () => {
  const [kino, setKino] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const api = `https://www.omdbapi.com/?s=Panda&apikey=c65fcde9`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) setKino(data.Search);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  const handleChange = (e) => setName(e.target.value);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    await fetch(`https://www.omdbapi.com/?s=${name}&apikey=c65fcde9`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) setKino(data.Search);
        else setKino([]);
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div>
      <h1 className="title">Movie</h1>

      <form onSubmit={handleSearch}>
        <input
          onChange={handleChange}
          value={name}
          className="input"
          type="search"
          placeholder="Write name of film"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>T/R</th>
            <th>Name</th>
            <th>Year</th>
            <th>Type</th>
            <th>imdbId</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {kino.length > 0 ? (
            kino.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Title}</td>
                <td>{item.Year}</td>
                <td>{item.Type}</td>
                <td>{item.imdbID}</td>
                <td>
                  <img src={item.Poster} alt={item.Title} width="80" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", color: "#888" }}>
                No movies found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesList;
