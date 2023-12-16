import React, { useEffect } from "react";
import styled from "styled-components";
import MovieListLogo from "../../../src/assets/ic_movie_list_logo.png";
import Button from "../Button";

const Header = ({ handleGenre, genre, setGenre }) => {
  const getGenre = async () => {
    const apiKey = "2dca580c2a14b55200e784d157207b4d";
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
    );
    const data = await response.json();
    setGenre(data?.genres);
    // Determine whether to add movies to the start or end based on scroll direction
  };

  useEffect(() => {
    getGenre();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const HeaderWrapper = styled.header`
    padding: 1rem;
    .movie-list-logo {
      height: 2.5rem;
      margin-right: auto;
      display: flex;
      margin-bottom: 1rem;
    }
  `;

  const GenreWrapper = styled.section`
    display: flex;
    // justifyContent: center;
    gap: 0.8rem;
    paddingbottom: 0.5rem;
    overflow-y: auto;
  `;

  return (
    <HeaderWrapper className="">
      <img
        src={MovieListLogo}
        className="movie-list-logo"
        alt="movie-list-logo"
      />
      <GenreWrapper>
        <Button isActive onClick={() => handleGenre("")}>
          All
        </Button>

        {genre?.map((item) => {
          return (
            <Button isActive={false} onClick={() => handleGenre(item)}>
              {item.name}
            </Button>
          );
        })}
      </GenreWrapper>
    </HeaderWrapper>
  );
};

export default Header;
