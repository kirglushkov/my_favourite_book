import styled from "@emotion/styled";
import StyledLink from "./StyledLink";

const LinkToPhoto =
  "https://www.vokrug.tv/pic/person/2/6/3/c/263cc68e33b8a67a210d131119bea6c2.jpg";

const Image = styled.img`
  max-width: 100%;
  width: 400px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  justify-content: center;
  align-items: center;
  font-size: min(calc(1em + 0.5vw), calc(12px + 0.2vw));
  padding: 3% 10% 3% 10%;
  gap: 10%;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

function AboutMe() {
  return (
    <Wrapper>
      <div>
        <h1>About Me</h1>
        <h3>
          I grew up in Bremen, Germany, in a family of book-crazy women. My
          career in advertising brought me to New York City in my early
          twenties. After working for several large ad agencies in the city, I
          left the rat race to be home with my three spirited (read: loud and
          strong-willed) children. Being a full-time mom is the best job in the
          world. It’s also the hardest and not always the most fulfilling. Then
          a magical thing happened: I discovered my love for writing. And over
          the course of a couple of life-changing years, I wrote my first novel,
          Only Child. I can’t believe I get to share it with you now! Only Child
          has been published by Knopf here in the U.S. and by Mantle in the
          U.K.. It will also be published in many countries around the world and
          translated into sixteen other languages. I can’t wait for you to read
          it. I made this website for you, dear reader. I invite you to become
          involved. Would you like to invite me to talk about Only Child at your
          next book club or library event? I'm available for events in the NYC
          area or via Skype or FaceTime. Contact me here. Please check out my
          upcoming events, I would love to see you there.{" "}
          <StyledLink>Read more about me.</StyledLink>
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Image src={LinkToPhoto}></Image>
        <span>Evgeny Ponasenkov</span>
      </div>
    </Wrapper>
  );
}

export default AboutMe;
