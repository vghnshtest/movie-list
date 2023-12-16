import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";

// Define the type for the ButtonWrapper props
interface ButtonWrapperProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

// Styled component for the button
const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  padding: 0rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.25rem;
  background: ${(props) => (props.isActive ? theme.red : theme.lightGray)};
  color: ${theme.whiteRedBg};
  border: none;
  cursor: pointer;

  // Text Css
  font-family: Saira;
  font-size: 1rem;
  font-style: normal;
  font-weight: ${(props) => (props.isActive ? 600 : 400)};
  line-height: 1.25rem;
`;

// Button component
const Button: React.FC<ButtonWrapperProps> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
