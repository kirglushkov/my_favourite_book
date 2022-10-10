import styled from "@emotion/styled";
import Header_mobile from "./Header_mobile";
import Header_navbar from "./Header_navbar";
import Header_text from "./Header_text";
import useMobile from "./UseMobile";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  align-items: center;
  gap: 5%;
`;

const First_Part = ["Home", "About", "Services"];
const Second_Part = ["Contact", "Blog", "Careers"];
const content_dropdown = ["Dropdown", "Dropdown", "Dropdown"];

function Header() {
  const size = useMobile();

  const isMobile = size.width <= 768 ? true : false;

  return (
    <Wrapper>
      {isMobile ? (
        <Header_mobile />
      ) : (
        <>
          <Header_navbar
            dropdown={true}
            part={First_Part}
            content_dropdown={content_dropdown}
          />
          <Header_text />
          <Header_navbar dropdown={false} part={Second_Part} />
        </>
      )}
    </Wrapper>
  );
}

export default Header;
