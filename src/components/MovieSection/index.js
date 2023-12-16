/* eslint-disable react-hooks/exhaustive-deps */
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
  const [loading, setLoading] = useState(false);
  const genreString = selectedGenre.map((genre) => genre.id).join(",");
  const apiKey = process.env.REACT_APP_IMDB_API_KEY;

  const fetchMovies = async ({
    searchText,
    currentYear,
    genreString,
    onSucess,
  }) => {
    if (currentYear === 2012) {
      setLoading(true);
    }
    const response = await fetch(
      searchText
        ? `${process.env.REACT_APP_BASE_URL}/search/movie?api_key=${apiKey}&query=${searchText}&year=${currentYear}&with_genres=${genreString}`
        : `${process.env.REACT_APP_BASE_URL}/discover/movie?api_key=${apiKey}&query=${searchText}&year=${currentYear}&with_genres=${genreString}`
    );
    const data = await response.json();
    onSucess(data.results);
    setLoading(false);
  };

  useEffect(() => {
    const onSucess = (updatedMovies) => {
      setMovies((prevMovies) => [
        ...prevMovies,
        { year: currentYear, movies: updatedMovies },
      ]);
    };
    fetchMovies({
      searchText,
      currentYear,
      genreString,
      onSucess: (d) => onSucess(d),
    });
  }, [currentYear]);

  useEffect(() => {
    const onSucess = (data) => {
      setMovies(() => [{ year: 2012, movies: data }]);
    };
    fetchMovies({
      searchText,
      currentYear,
      genreString,
      onSucess: (d) => onSucess(d),
    });
  }, [selectedGenre, searchText]);

  const handleScroll = throttle(() => {
    const doc = window.document.documentElement;
    if (doc.scrollTop + doc.clientHeight + 400 >= doc.scrollHeight) {
      setCurrentYear((prevYear) => prevYear + 1);
    }
  }, 500);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div style={{ backgroundColor: theme.black }}>
        <h2 style={{ color: theme.white }}>Loading...</h2>;
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: theme.black }}>
      {movies.map((data) => (
        <MovieSectionWrap>
          <span className="year">{data.year}</span>
          {data.movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MovieSectionWrap>
      ))}
    </div>
  );
};

export default MovieSection;
