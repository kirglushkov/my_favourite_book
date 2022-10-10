import styled from "@emotion/styled";

const Navigation_bar = styled.div`
  :hover {
    transition: 0.5s;
    opacity: 0.8;
  }
  :active {
    .bar1 {
      width: 35px;
      height: 5px;
      background-color: white;
      margin: 6px 0;
      transition: 0.4s;
      :after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 35px;
        height: 5px;
        background-color: white;
        transition: 0.4s;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
      }
    }
  }
  .bar1 {
    width: 35px;
    height: 5px;
    background-color: #333;
    transition: 0.4s;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);

    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 35px;
      height: 5px;
      background-color: #333;
      transition: 0.4s;
      -webkit-transform: rotate(90deg);
      -moz-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
      -o-transform: rotate(90deg);
      transform: rotate(90deg);
    }
  }
`;

function NavBar() {
  return (
    <Navigation_bar>
      <div className="bar1"></div>
    </Navigation_bar>
  );
}

export default NavBar;
