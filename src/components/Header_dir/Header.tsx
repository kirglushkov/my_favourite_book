import styled from "@emotion/styled";
import Header_navbar from "./Header_navbar";
import Header_text from "./Header_text";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const First_Part = ["Home", "About", "Services"];
const Second_Part = ["Contact", "Blog", "Careers"];
const content_dropdown = ["Dropdown", "Dropdown", "Dropdown"];

function Header() {
  return (
    <Wrapper>
      <Header_navbar
        dropdown={true}
        part={First_Part}
        content_dropdown={content_dropdown}
      />
      <Header_text />
      <Header_navbar dropdown={false} part={Second_Part} />
    </Wrapper>
  );
}

export default Header;
