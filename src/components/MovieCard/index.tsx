import styled from "styled-components";
import { theme } from "../../config/theme";
import MovieDetailsDialog from "../Modal";
import { ReactNode, useState } from "react";

interface MovieCardProps {
  movie: {
    vote_average: ReactNode;
    title: ReactNode;
    poster_path: string;
    // Add other movie details here
  };
}

const MovieCardWrapper = styled.div<{ posterPath?: string }>`
  position: relative;
  box-shadow: inset 0 -20px 20px 20px #0000008c;
  background-image: ${({ posterPath }) =>
    `url(https://image.tmdb.org/t/p/original/${posterPath})`};
  background-color: gray;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 13.875rem;
  display: flex;
  align-items: end;

  .meta {
    position: absolute;
    bottom: 0;
    left: 0;
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
      font-size: 1rem;
      letter-spacing: -0.00963rem;
    }

    .rating {
      font-size: 0.7rem;
      letter-spacing: -0.0055rem;
      text-align: left;
    }
  }

  /* Media query for mobile devices (up to 767px width) */
  @media only screen and (max-width: 767px) {
    width: 45%; /* Two cards per row */
  }

  /* Media query for larger devices (768px width and above) */
  @media only screen and (min-width: 768px) {
    width: 18%; /* Five cards per row */
    height: 18.75rem;
  }
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  console.log(movie);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    console.log("cloe");
    setIsDialogOpen(false);
  };
  return (
    <MovieCardWrapper posterPath={movie.poster_path}>
      <div className="meta">
        <span className="title">{movie.title}</span>
        <span className="rating">{movie.vote_average}</span>
      </div>
      <span
        style={{ height: "100%", width: "100%" }}
        onClick={openDialog}
      ></span>
      {isDialogOpen && (
        <MovieDetailsDialog
          data={movie}
          isOpen={isDialogOpen}
          onClose={closeDialog}
        />
      )}
    </MovieCardWrapper>
  );
};

export default MovieCard;
