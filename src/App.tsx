import "./App.css";
import MovieSection from "./components/MovieSection";
import { ChangeEvent, useState } from "react";
import Header from "./components/Header";
import { HeaderWrapper, SearchInput } from "./style";

function App() {
  const [movies, setMovies] = useState<any>([]);
  const [genre, setGenre] = useState<any>([]);
  const [selectedGenre, setSelectedGenre] = useState<any>([]);
  const [searchText, setSearchText] = useState("");

  const handleGenre = (genreData: any) => {
    setMovies([]);
    setSelectedGenre([...selectedGenre, genreData]);
  };
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setMovies([]);
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      <HeaderWrapper>
        <Header handleGenre={handleGenre} genre={genre} setGenre={setGenre} />
        <SearchInput
          placeholder="Search Movie"
          value={searchText}
          onChange={(e) => handleSearch(e)}
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
