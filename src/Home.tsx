import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const MenuBox = styled.div<{ bgcolor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgcolor};
`;

export default function Home() {
  return (
    <Container>
      <MenuBox bgcolor="#74b9ff"></MenuBox>
      <MenuBox bgcolor="#0984e3">
        <Link to="/logview">
          <button>Log view page</button>
        </Link>
      </MenuBox>
      <MenuBox bgcolor="#00b894">
        <Link to="/actionpage">
          <button>Action Page</button>
        </Link>
      </MenuBox>
      <MenuBox bgcolor="#55efc4"></MenuBox>
    </Container>
  );
}
