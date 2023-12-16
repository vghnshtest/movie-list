import styled from "styled-components";

// Styled components for styling
const MovieDialogOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const MovieDialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1002;
`;

const CloseButton = styled.span`
  position: absolute;
  font-size: 3rem;
  width: 3rem;
  height: 3rem;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 1002;
`;

const MovieDetailsDialog = ({ data, isOpen, onClose }) => {
  return (
    <MovieDialogOverlay isOpen={isOpen}>
      <MovieDialog>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>{data.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt="Movie Poster"
          style={{ maxWidth: "100%" }}
        />
        <p>Rating: {data.vote_average}</p>
        <p>Short Description: {data.overview}</p>
      </MovieDialog>
    </MovieDialogOverlay>
  );
};

export default MovieDetailsDialog;
