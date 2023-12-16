import "./App.css";
import MovieSection from "./components/MovieSection";
import { ChangeEvent, useState } from "react";
import { debounce } from "lodash";
import Header from "./components/Header";
import { HeaderWrapper, SearchInput } from "./style";

const debouncedSearch = debounce((searchFn) => searchFn(), 500);

function App() {
  const [movies, setMovies] = useState<any>([]);
  const [genre, setGenre] = useState<any>([]);
  const [selectedGenre, setSelectedGenre] = useState<any>([]);
  const [searchText, setSearchText] = useState("");

  const handleGenre = (genreData: any) => {
    window.scrollTo(0, 0);
    setMovies([]);

    // Check if genreData is already present in selectedGenre
    const isGenreAlreadySelected = selectedGenre.some(
      (genre: { id: any }) => genre.id === genreData.id
    );

    if (isGenreAlreadySelected) {
      // If genreData is already selected, remove it
      const updatedGenres = selectedGenre.filter(
        (genre: { id: any }) => genre.id !== genreData.id
      );
      setSelectedGenre(updatedGenres);
    } else {
      // If genreData is not selected, add it
      setSelectedGenre([...selectedGenre, genreData]);
    }
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setMovies([]);
    setSearchText(event.target.value);
  };
  // Clear the debounce function on component unmount

  return (
    <div className="App">
      <HeaderWrapper>
        <Header
          selectedGenre={selectedGenre}
          handleGenre={handleGenre}
          genre={genre}
          setGenre={setGenre}
          setSelectedGenre={setSelectedGenre}
        />
        <SearchInput
          placeholder="Search Movie"
          onChange={(e) => debouncedSearch(() => handleSearch(e))}
        />
      </HeaderWrapper>
      <MovieSection
        searchText={searchText}
        selectedGenre={selectedGenre}
        movies={movies}
        setMovies={setMovies}
      />
    </div>
  );
}

export default App;
