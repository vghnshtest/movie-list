import styled from "styled-components";
import { theme } from "../../config/theme";
import MovieListLogo from "../../../src/assets/ic_movie_list_logo.png";
const MovieCardWrapper = styled.div`
  // background-image: url(${MovieListLogo});
  background-color: gray;
  height: 13.875rem;
  display: flex;
  align-items: end;
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
export const MovieCard = () => {
  return (
    <MovieCardWrapper>
      <div className="meta">
        <span className="title">Title</span>
        <span className="rating">Rating</span>
      </div>
    </MovieCardWrapper>
  );
};
