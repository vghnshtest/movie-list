import styled from "styled-components";

const HeaderWrapper = styled.header`
  padding: 1rem 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
  .movie-list-logo {
    height: 2.5rem;
    margin-right: auto;
    display: flex;
    margin-bottom: 1rem;
  }
`;

const GenreWrapper = styled.section`
  display: flex;
  gap: 0.8rem;
  paddingbottom: 0.5rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
`;

export { HeaderWrapper, GenreWrapper };
