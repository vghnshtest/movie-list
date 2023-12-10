import "./App.css";
import MovieListLogo from "../src/assets/ic_movie_list_logo.png";
import styled from "styled-components";
import { theme } from "./config/theme";
import Button from "./components/Button";
import MovieSection from "./components/MovieSection";
import { useEffect, useState } from "react";

const HeaderWrapper = styled.header`
  background-color: ${theme.gray};
`;
function App() {
  const [movies, setMovies] = useState<any>([]);

  // const genre = ["Action", "Comedy", "Horror", "Drama", "Sci-Fi"];
  const [genre, setGenre] = useState<any>([]);
  const [selectedGenre, setSelectedGenre] = useState<any>([]);
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
  }, []);

  const handleGenre = (genreData: any) => {
    setSelectedGenre([...selectedGenre, genreData]);
  };

  return (
    <div className="App">
      <HeaderWrapper className="">
        <img src={MovieListLogo} alt="movie-list-logo" />
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.8rem",
            paddingBottom: "1rem",
          }}
        >
          {genre?.map((item: any) => {
            return (
              <Button onClick={() => handleGenre(item)}>{item.name}</Button>
            );
          })}
        </section>
      </HeaderWrapper>
      <MovieSection
        selectedGenre={selectedGenre}
        movies={movies}
        setMovies={setMovies}
      />
    </div>
  );
}

export default App;
