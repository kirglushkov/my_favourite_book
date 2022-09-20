import styled from "@emotion/styled";

type Header_navbarProps = {
  dropdown: boolean;
  part: string[];
  content_dropdown?: string[];
};

function Header_navbar({
  dropdown,
  part,
  content_dropdown,
}: Header_navbarProps) {
  const Navbar_nav = styled.div`
    list-style-type: none;
    display: flex;
    gap: 10px;

    border-top: 1px solid black;
    border-bottom: 1px solid black;
    letter-spacing: 0.1em;
  `;

  const Dropdown = styled.div`
    opacity: 0;
    position: absolute;
    width: auto;
    z-index: 2;
    background: grey;
    display: grid;
    grid-template-columns: repeat(auto, 1fr);
    gap: 10px;

    height: auto;
    margin-top: 2rem;
    padding: 0.5rem;

    transition: opacity 0.15s ease-out;

    a {
      width: 100%;
      height: 100%;
      color: white !important;
    }
  `;

  const Navbar_nav_item = styled.div`
    margin: 10px 10px 10px 10px;

    :focus-within ${Dropdown} {
      opacity: 1;
      pointer-events: all;
    }

    display: flex;
    align-items: flex-start;
    justify-content: center;

    a {
      text-decoration: none;
      color: black;
      &:hover {
        opacity: 0.8;
      }
    }
  `;
  return (
    <div>
      {dropdown ? (
        <Navbar_nav>
          <Navbar_nav_item>
            <a href="#">{part[0]}</a>
          </Navbar_nav_item>
          <Navbar_nav_item>
            <a href="#">{part[1]}</a>
          </Navbar_nav_item>
          <Navbar_nav_item>
            <a href="#">{part[2]}</a>
            <Dropdown>
              {content_dropdown?.map((item) => (
                <a href="#">{item}</a>
              ))}
            </Dropdown>
          </Navbar_nav_item>
        </Navbar_nav>
      ) : (
        <Navbar_nav>
          {part.map((item) => (
            <Navbar_nav_item>
              <a href="#">{item}</a>
            </Navbar_nav_item>
          ))}
        </Navbar_nav>
      )}
    </div>
  );
}

export default Header_navbar;
