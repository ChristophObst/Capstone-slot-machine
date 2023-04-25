import Link from "next/link";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 300px;
  height: 60px;
  background-color: gold;
  font-weight: 900;
`;

export default function Navigation() {
  return (
    <>
      <Link href={"/"}>
        <StyledButton>Home</StyledButton>
      </Link>

      <div></div>
    </>
  );
}
