import styled from "@emotion/styled";
import useMobile from "../Header_dir/UseMobile";
import Links from "./Links";

const Square = styled.div<{ isMobile: boolean }>`
  background-color: rgb(234, 232, 232);
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.ismobile ? "0" : "5%")};
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

const EmailDiv = styled.div<{ isMobile: boolean }>`
  display: flex;
  gap: 1%;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
`;

const WhiteStripe = styled.span`
  width: 25vw,
  height: 0.3%,
  background-color: whitesmoke,
`;

function Footer() {
  const size = useMobile();

  const isMobile = size.width <= 768 ? true : false;
  return (
    <Square ismobile={isMobile}>
      {!isMobile ? (
        <>
          <h2>COME ALONG</h2>
          <span style={{ marginRight: "25%", marginLeft: "25%" }}>
            Accompany me on my exciting journey from stay-at-home mom to
            published author. <br />
            Subscribe to my monthly newsletter and get the first 2 chapters of
            Only Child.
          </span>
        </>
      ) : (
        <>
          <div>COME ALONG</div>
          <span style={{ marginRight: "5%", marginLeft: "5%" }}>
            Accompany me on my exciting journey from stay-at-home mom to
            published author. <br />
            Subscribe to my monthly newsletter and get the first 2 chapters of
            Only Child.
          </span>
        </>
      )}
      <EmailDiv isMobile={isMobile}>
        <StyledInput placeholder="Email Adress"></StyledInput>
        <StyledInputButton type="button" value="SIGN UP"></StyledInputButton>
      </EmailDiv>
      <span
        style={{
          fontSize: "0.7em",
        }}
      >
        (I will never share your email with anyone, anywhere. Promise.)
      </span>
      {!isMobile && <WhiteStripe />}
      <Links />
    </Square>
  );
}

export default Footer;
