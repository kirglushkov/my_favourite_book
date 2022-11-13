import styled from "@emotion/styled";
import useMobile from "./Header_dir/UseMobile";
import StyledLink from "./StyledLink";

const Square = styled.div`
  background-color: rgb(234, 232, 232);
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Article = styled.div<{ ismobile: boolean }>`
  margin: ${(props) => (props.ismobile ? "0" : "1% 20% 1% 20%")};
`;

function ReviewPage() {
  const size = useMobile();

  const isMobile = size.width <= 768 ? true : false;
  return (
    <Square>
      <Article ismobile={isMobile}>
        “Only Child triumphs. Zach, at only 6 years old, understands more about
        the human heart than the broken adults around him. His hope and optimism
        will have every reader cheering him on, and believing in happy endings
        even in the face of such tragedy.” — ANN HOOD, THE WASHINGTON POST
      </Article>
      <Article ismobile={isMobile}>
        “This hotly anticipated debut novel takes on topics both timely and
        tragically universal: school shootings, love, loss, forgiveness, and
        pain.” — LIZ EGAN AND ELIZABETH LOGAN, GLAMOUR “ALL THE BOOKS WE CAN'T
        WAIT TO READ IN 2018”
      </Article>
      <StyledLink href="#">Read more reviews</StyledLink>
    </Square>
  );
}

export default ReviewPage;
