import styled from "@emotion/styled";
import React from "react";
import { Icon24LogoVkOutline } from "@vkontakte/icons";
import { Icon24LogoTwitter } from "@vkontakte/icons";
import Git from "../../assets/github-icon.svg";
import useMobile from "../Header_dir/UseMobile";

const LinksDiv = styled.div`
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

const Copyright = styled.div`
  font-size: ${(props) => (props.ismobile ? "0.7em" : "1em")};
  text-align: center;
`;

function Links() {
  const size = useMobile();

  const isMobile = size.width <= 768 ? true : false;
  return (
    <>
      <LinksDiv>
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
      </LinksDiv>
      <Copyright ismobile={isMobile}>
        © Copyright 2022 Evgeny Ponasenkov. All rights reserved. • Privacy
        Policy site by basedkkk
      </Copyright>
    </>
  );
}

export default Links;
