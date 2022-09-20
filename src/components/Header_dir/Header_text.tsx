import styled from "@emotion/styled";
import React from "react";

const Header_text_div = styled.div`
  display: flex;
  align-items: center;
  font-size: min(calc(1.2em + 0.5vw), 44px);
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1em;
  color: tomato;
`;

function Header_text() {
  return <Header_text_div>ЕВГЕНИЙ ПОНАСЕНКОВ</Header_text_div>;
}

export default Header_text;
