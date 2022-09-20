import styled from "@emotion/styled";

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

function Footer() {
  return (
    <Square>
      <h2>COME ALONG</h2>
      <span>
        Accompany me on my exciting journey from stay-at-home mom to published
        author. <br />
        Subscribe to my monthly newsletter and get the first 2 chapters of Only
        Child.
      </span>
      <div style={{ display: "flex", gap: "1%" }}>
        <StyledInput placeholder="Email Adress"></StyledInput>
        <StyledInputButton type="button" value="SIGN UP"></StyledInputButton>
      </div>
      <span>
        (I will never share your email with anyone, anywhere. Promise.)
      </span>
      <span></span>
      <div>links</div>
      <div>copyright</div>
    </Square>
  );
}

export default Footer;
