import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  background: #a1b29f;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: #333;
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;

  position: fixed;
  bottom: 115px;
  right: 50px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    bottom: 265px;
    right: 230px;
  }

  }
`;
const Toggle = ({ theme, toggleTheme }) => {
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
