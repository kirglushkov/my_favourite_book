import styled from "@emotion/styled";

const Link = styled.a`
  text-decoration: none;
  color: #e1302d;
  padding-bottom: 0.05em;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: rgba(225, 48, 45, 0.3);
  transition: border-color 0.15s ease-out, color 0.15s ease-out;
  &:hover {
    border-bottom-color: #e1302d;
    color: #e1302d;
    opacity: 0.6;
  }
`;

function StyledLink({ children, href }: any) {
  return <Link href={href}>{children}</Link>;
}

export default StyledLink;
