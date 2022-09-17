import styled from "@emotion/styled";
import book from "../assets/book.jpg";

function Main_body() {
  const Image = styled.img`
    display: block;
    width: 50%;
  `;

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
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
          <a href="https://www.tutorialspoint.com/How-to-use-an-image-as-a-link-in-HTML">
          <Image src={book}></Image>
        </a>
        </div>
        <Image src={book}></Image>
      </Grid>
      <div>
        <a href="#">Only Child</a> tells the story of six-year-old Zach, who survives a deadly shooting in his school by hiding in his classroom closet. 
        In the middle of the raw and devastating aftermath, Zach finds the strength and determination to help the adults in his life 
        rediscover the love and compassion needed to pull them through their darkest hour. </div>
        <a href="#">Learn more about the book →</a>
    </Wrapper>
  );
}

export default Main_body;
