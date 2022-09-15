import styled from "@emotion/styled";
import book from "../assets/book.jpg";

function Main_body() {
  const Image = styled.img`
    display: block;
    width: 50%;
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
        <div>
          “It was a brave decision by Navin to entrust the telling of such a
          powerful story to a six-year-old but she pulls it off to perfection.
          This is the authentic voice of an honest, bright, intelligent, and
          observant child. It struck me that any of us would be proud to have
          Zach as their son.” — RICHARD AND JUDY BOOK CLUB
        </div>
        <Image src={book}></Image>
      </Grid>
    </Wrapper>
  );
}

export default Main_body;
