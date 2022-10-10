import styled from "@emotion/styled";
import book from "../assets/book.jpg";

function Main_body() {
  const Image = styled.img`
    width: 100%;
    display: block;
    @media (max-width: 900px) {
      width: 40vw;
    }
  `;

  const SecondImage = styled(Image)`
    width: 100%;
    @media (max-width: 900px) {
      display: none;
    }
  `;

  const Wrapper = styled.div`
    display: flex;
    fit-content: ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: min(calc(1em + 0.5vw), 32px);
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 1%;
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap: 5%;
    @media (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
  `;

  const StyledIMG = styled.img`
    width: 50%;
    height: 50%;
    @media (max-width: 900px) {
      width: 100%;
      height: 100%;
    }
    margin-bottom: 15%;
  `;

  return (
    <Wrapper>
      <Grid>
        <Image src={book}></Image>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              paddingBottom: "60px",
              paddingLeft: "1%",
              paddingRight: "1%",
            }}
          >
            “It was a brave decision by Navin to entrust the telling of such a
            powerful story to a six-year-old but she pulls it off to perfection.
            This is the authentic voice of an honest, bright, intelligent, and
            observant child. It struck me that any of us would be proud to have
            Zach as their son.” — RICHARD AND JUDY BOOK CLUB
          </div>
          <a
            style={{ width: "60%", height: "auto" }}
            href="https://www.tutorialspoint.com/How-to-use-an-image-as-a-link-in-HTML"
          >
            <StyledIMG
              src={
                "https://s3.amazonaws.com/stickers.wiki/ponasenkovfull/2392.512.webp"
              }
            ></StyledIMG>
          </a>
        </div>
        <SecondImage src={book}></SecondImage>
      </Grid>
    </Wrapper>
  );
}

export default Main_body;
