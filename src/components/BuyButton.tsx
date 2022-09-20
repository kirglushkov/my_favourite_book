import styled from "@emotion/styled";

const Square = styled.div`
  background-color: tomato;
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBuy = styled.button`
  border: none;
  background-color: #f5f5f5;
  color: tomato;
  padding: 1.8% 2.8%;
  font-size: 1.7em;
  font-weight: 600;
  letter-spacing: 0.1em;
  &:hover {
    opacity: 0.8;
  }
  transition: 0.3s;
`;

function BuyButton() {
  return (
    <Square>
      <ButtonBuy>КУПИТЬ ШЕДЕВР</ButtonBuy>
    </Square>
  );
}

export default BuyButton;
