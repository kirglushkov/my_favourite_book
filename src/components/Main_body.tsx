import styled from "@emotion/styled";
import book from "../assets/book.jpg";

function Main_body() {
  const Image = styled.img`
    width: 60%;
  `;

  const Wrapper = styled.div`
    display: flex;
    fit-content: ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: min(calc(1em + 0.5vw), 32px);
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
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
            marginTop: "5%",
          }}
        >
          <div style={{ paddingBottom: "60px" }}>
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
            <img
              style={{ width: "50%" }}
              src={
                "https://s3.amazonaws.com/stickers.wiki/ponasenkovfull/2392.512.webp"
              }
            ></img>
          </a>
        </div>
        <Image src={book}></Image>
      </Grid>
    </Wrapper>
  );
}

export default Main_body;
