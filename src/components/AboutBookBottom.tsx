import styled from "@emotion/styled";
import StyledLink from "./StyledLink";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% 20% 5% 20%;
  font-size: min(calc(0.7em + 0.5vw), 15px);
`;

function AboutBookBottom() {
  return (
    <Wrapper>
      <div style={{ paddingBottom: "2%" }}>
        <StyledLink href="#">Only Child</StyledLink> tells the story of
        six-year-old Zach, who survives a deadly shooting in his school by
        hiding in his classroom closet. In the middle of the raw and devastating
        aftermath, Zach finds the strength and determination to help the adults
        in his life rediscover the love and compassion needed to pull them
        through their darkest hour.
      </div>
      <StyledLink href="#">Learn more about the book →</StyledLink>
    </Wrapper>
  );
}

export default AboutBookBottom;
