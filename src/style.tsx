import styled from "styled-components";
import { theme } from "./config/theme";

const HeaderWrapper = styled.div`
  background-color: ${theme.gray};
  position: sticky;
  top: 0;
`;

const SearchInput = styled.input`
  width: 16rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
  outline: none;
  background-color: ${theme.lightGray};
  margin-bottom: 1.5rem;
`;
export { HeaderWrapper, SearchInput };
