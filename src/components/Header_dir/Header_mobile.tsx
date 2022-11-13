import styled from "@emotion/styled";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import NavBarX from "./Components/NavBarX";

const Box = styled.div<{ click: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => (props.click ? "12vh" : "7vh")};
  background-color: tomato;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
`;

const Title = styled.div<{ click: boolean }>`
  width: calc(100% - 35px);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: max(3vw, 14px);
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.1em;
  color: black;
  transition: 0.5s;
`;

const Dropdown = styled.div<{ click: boolean }>`
  display: ${(props) => (props.click ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  gap: 20px;

  margin-top: 10px;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadein 0.9s;

  a {
    color: black;
    text-decoration: none;
    font-size: 0.8em;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.1em;
    transition: top 1s ease;
    :hover {
      color: white;
      opacity: 0.8;
    }
  }
`;

const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    transform: scale(0.9);
  }
`;

function Header_mobile() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <Box click={click}>
      <Title click={click}>ЕВГЕНИЙ ПОНАСЕНКОВ</Title>
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: "10px",
        }}
      >
        <MenuIcon onClick={handleClick}>
          {click ? <NavBarX /> : <NavBar />}
        </MenuIcon>
      </div>
      <Dropdown click={click}>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </Dropdown>
    </Box>
  );
}

export default Header_mobile;
