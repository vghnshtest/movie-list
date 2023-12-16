import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { throttle } from "lodash";
import { theme } from "../../config/theme";
import MovieCard from "../MovieCard";

const MovieSectionWrap = styled.section`
  padding-top: 1.5rem;
  background-color: ${theme.black};
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  justify-content: center;
  .year {
    color: ${theme.white};
    display: block;
    width: 100%;
    text-align: left;
    padding-left: 0.8rem;
    font-family: Archivo;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 1.875rem */
    letter-spacing: -0.01375rem;

    @media (min-width: 768px) {
      text-align: center;
    }
  }
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
      const updatedMovies = [...data.results];
      setMovies((prevMovies) => [
        ...prevMovies,
        { year: currentYear, movies: updatedMovies },
      ]);
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
      setMovies(() => [{ year: currentYear, movies: data.results }]);
    };

    fetchMovies();
  }, [selectedGenre, searchText]);

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
  }, []);

  return (
    <>
      {movies.map((data) => (
        <MovieSectionWrap>
          <span className="year">{data.year}</span>
          {data.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MovieSectionWrap>
      ))}
    </>
  );
};

export default MovieSection;
