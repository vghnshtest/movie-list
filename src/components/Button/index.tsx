import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { theme } from "../../config/theme";

// Button component
const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  const ButtonWrapper = styled.button`
    display: flex;
    padding: 0.375rem 0.75rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.25rem;
    background: ${theme.red};
    color: ${theme.whiteRedBg};
    border: none;
    cursor: pointer;
  `;
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
