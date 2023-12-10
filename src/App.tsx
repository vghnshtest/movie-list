import "./App.css";
import MovieListLogo from "../src/assets/ic_movie_list_logo.png";
import styled from "styled-components";
import { theme } from "./config/theme";
import Button from "./components/Button";

function App() {
  const HeaderWrapper = styled.header`
    background-color: ${theme.gray};
  `;

  const genre = ["Action", "Comedy", "Horror", "Drama", "Sci-Fi"];

  const MovieSection = styled.section`
    background-color: ${theme.black};
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const MovieCard = () => {
    const MovieCardWrapper = styled.div`
      // background-image: url(${MovieListLogo});
      background-color: gray;
      height: 13.875rem;
      display: flex;
      align-items: end;
      // padding: 1rem;
      .meta {
        margin-top: auto;
        color: ${theme.white};
        font-family: Archivo;
        font-style: normal;
        font-weight: 600;
        line-height: 1rem;
        padding: 0.2rem;
        display: flex;
        flex-direction: column;
        .title {
          font-size: 0.875rem;
          letter-spacing: -0.00963rem;
        }
        .rating {
          font-size: 0.5rem;
          letter-spacing: -0.0055rem;
        }
      }

      /* Media query for mobile devices (up to 767px width) */
      @media only screen and (max-width: 767px) {
        width: 45%; /* Two cards per row */
      }

      /* Media query for larger devices (768px width and above) */
      @media only screen and (min-width: 768px) {
        width: 18%; /* Five cards per row */
      }
    `;
    return (
      <MovieCardWrapper>
        <div className="meta">
          <span className="title">Title</span>

          <span className="rating">Rating</span>
        </div>
      </MovieCardWrapper>
    );
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
          {genre.map((item) => {
            return <Button>{item}</Button>;
          })}
        </section>
      </HeaderWrapper>
      <MovieSection>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </MovieSection>
    </div>
  );
}

export default App;
