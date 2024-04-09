import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const MenuBox = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

export default function Home() {
  return (
    <Container>
      <MenuBox bgColor="#74b9ff"></MenuBox>
      <MenuBox bgColor="#0984e3">
        <Link to="/logview">
          <button>Log view page</button>
        </Link>
      </MenuBox>
      <MenuBox bgColor="#00b894">
        <Link to="/actionpage">
          <button>Action Page</button>
        </Link>
      </MenuBox>
      <MenuBox bgColor="#55efc4"></MenuBox>
    </Container>
  );
}
