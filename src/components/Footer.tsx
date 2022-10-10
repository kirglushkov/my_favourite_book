import styled from "@emotion/styled";
import { Icon24LogoVkOutline } from "@vkontakte/icons";
import { Icon24LogoTwitter } from "@vkontakte/icons";
import Git from "../assets/github-icon.svg";

const Square = styled.div`
  background-color: rgb(234, 232, 232);
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-size: 1.5em;
  font-weight: 400;
  letter-spacing: 0.1em;

  padding: 1.5% 2.5%;
  &:focus {
    outline: none;
  }
`;

const StyledInputButton = styled.input`
  border: none;
  background-color: tomato;
  color: white;
  font-size: 1.5em;
  font-weight: 400;
  padding: 1.5% 2.5%;
  &:hover {
    opacity: 0.8;
  }
  transition: 0.3s;
`;

const Links = styled.div`
  display: flex;
  margin-top: 1%;

  &:hover {
    opacity: 0.7;
  }
  transition: 0.3s;

  a:link {
    color: black !important;
  }

  a:visited {
    color: black !important;
  }
`;

const StyledVK = styled(Icon24LogoVkOutline)`
  &:hover {
    color: red;
  }
  transition: 0.3s;
`;

const StyledTwitter = styled(Icon24LogoTwitter)`
  &:hover {
    color: blue;
  }
  transition: 0.3s;
`;

const StyledGit = styled.img`
  width: 22px;
  height: 22px;
  &:hover {
    opacity: 0.5;
  }
  transition: 0.3s;
`;

function Footer() {
  return (
    <Square>
      <h2>COME ALONG</h2>
      <span style={{ marginRight: "25%", marginLeft: "25%" }}>
        Accompany me on my exciting journey from stay-at-home mom to published
        author. <br />
        Subscribe to my monthly newsletter and get the first 2 chapters of Only
        Child.
      </span>
      <div style={{ display: "flex", gap: "1%" }}>
        <StyledInput placeholder="Email Adress"></StyledInput>
        <StyledInputButton type="button" value="SIGN UP"></StyledInputButton>
      </div>
      <span
        style={{
          fontSize: "0.7em",
        }}
      >
        (I will never share your email with anyone, anywhere. Promise.)
      </span>
      <span
        style={{
          width: "25vw",
          height: "0.3%",
          backgroundColor: "whitesmoke",
        }}
      ></span>
      <Links>
        <a href="https://vk.com/glushkovkkk">
          <StyledVK />
        </a>
        <div>&nbsp;&nbsp;</div>
        <a href="https://rkn.gov.ru/">
          <StyledTwitter />
        </a>
        <div>&nbsp;&nbsp;</div>
        <a href="https://github.com/kirglushkov">
          <StyledGit src={Git} />
        </a>
      </Links>
      <div>
        © Copyright 2022 Evgeny Ponasenkov. All rights reserved. • Privacy
        Policy site by basedkkk
      </div>
    </Square>
  );
}

export default Footer;
