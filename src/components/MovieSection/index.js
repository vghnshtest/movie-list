import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { throttle } from "lodash";
import { theme } from "../../config/theme";
import { MovieCard } from "../MovieCard";

const MovieSectionWrap = styled.section`
  background-color: ${theme.black};
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieSection = ({ searchText, selectedGenre, movies, setMovies }) => {
  const [currentYear, setCurrentYear] = useState(2012);

  const genreString = selectedGenre.map((genre) => genre.id).join(",");

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = "2dca580c2a14b55200e784d157207b4d";
      const response = await fetch(
        searchText
          ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&year=${currentYear}&with_genres=${genreString}`
          : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&query=${searchText}&year=${currentYear}&with_genres=${genreString}`
      );
      const data = await response.json();

      // Determine whether to add movies to the start or end based on scroll direction
      const updatedMovies = [...data.results];
      setMovies((prevMovies) => [...prevMovies, ...updatedMovies]);
    };

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentYear]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = "2dca580c2a14b55200e784d157207b4d";
      const response = await fetch(
        searchText
          ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}&year=${currentYear}&with_genres=${genreString}`
          : `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&query=${searchText}&year=${currentYear}&with_genres=${genreString}`
      );
      const data = await response.json();

      // Determine whether to add movies to the start or end based on scroll direction
      setMovies(data.results);
    };

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenre, searchText]);
  console.log(currentYear);

  const handleScroll = throttle(() => {
    const doc = window.document.documentElement;
    if (doc.scrollTop + doc.clientHeight + 200 >= doc.scrollHeight) {
      setCurrentYear((prevYear) => prevYear + 1);
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MovieSectionWrap>
      {/* <input onChange={handleSearch} /> */}
      <span style={{ color: "white" }}>{currentYear}</span>{" "}
      {movies.map((movie) => (
        <MovieCard />
      ))}
    </MovieSectionWrap>
  );
};

export default MovieSection;
