import { useEffect } from "react";
import MovieListLogo from "../../../src/assets/ic_movie_list_logo.png";
import Button from "../Button";
import { GenreWrapper, HeaderWrapper } from "./style";

const Header = ({
  selectedGenre,
  setSelectedGenre,
  handleGenre,
  genre,
  setGenre,
}) => {
  const getGenre = async () => {
    const apiKey = process.env.REACT_APP_IMDB_API_KEY;
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/genre/movie/list?api_key=${apiKey}`
    );
    const data = await response.json();
    setGenre(data?.genres);
    // Determine whether to add movies to the start or end based on scroll direction
  };

  useEffect(() => {
    getGenre();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isIdPresent(array, targetId) {
    return array.some((item) => item.id === targetId);
  }
  return (
    <HeaderWrapper className="">
      <img
        src={MovieListLogo}
        className="movie-list-logo"
        alt="movie-list-logo"
      />
      <GenreWrapper>
        <Button
          isActive
          onClick={() => {
            setSelectedGenre([]);
            window.scrollTo(0, 0);
          }}
        >
          All
        </Button>

        {genre?.map((item) => {
          return (
            <Button
              isActive={isIdPresent(selectedGenre, item.id)}
              onClick={() => handleGenre(item)}
            >
              {item.name}
            </Button>
          );
        })}
      </GenreWrapper>
    </HeaderWrapper>
  );
};

export default Header;
