import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: min(calc(0.7em + 0.5vw), 30px);
  font-weight: 400;
`;

function Header_title() {
  return (
    <Wrapper>
      <h1 style={{ marginBottom: 0 }}>“ЕВГЕНИАЛЬНО”</h1>
      <h3>– Комсомольская Правда</h3>
    </Wrapper>
  );
}

export default Header_title;
