import styled from "@emotion/styled";

const Navigation_bar = styled.div`
  :hover {
    transition: 0.5s;
    opacity: 0.8;
  }
  :active {
    .bar1,
    .bar2,
    .bar3 {
      width: 35px;
      height: 5px;
      background-color: white;
      margin: 6px 0;
      transition: 0.4s;
    }
  }
  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }
`;

function NavBar() {
  return (
    <Navigation_bar>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </Navigation_bar>
  );
}

export default NavBar;
