import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem;
`;

function Header_title() {
  return (
    <Wrapper>
      <h1>“An audacious debut novel.”</h1>
      <h3>– THE NEW YORK TIMES</h3>
    </Wrapper>
  );
}

export default Header_title;
