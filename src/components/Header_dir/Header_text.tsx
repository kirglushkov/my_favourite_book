import styled from "@emotion/styled";
import React from "react";

const Header_text_div = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: max(3vw, 24px);
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1em;
  color: tomato;
  margin-top: 2%;
  transition: 0.5s;
`;

function Header_text() {
  return <Header_text_div>ЕВГЕНИЙ ПОНАСЕНКОВ</Header_text_div>;
}

export default Header_text;
