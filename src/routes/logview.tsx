import styled from "styled-components";
import SearchPanel from "../components/search_panel";

const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const Header = styled.div<{ bgcolor: string }>`
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  background-color: ${(props) => props.bgcolor};
`;

const Body = styled.div`
  height: 85vh;
`;
const Content = styled(Body)``;
const Navi = styled(Body)``;

export default function LogView() {
  return (
    <Container>
      <Header bgcolor="#dfe6e9">
        <SearchPanel />
      </Header>
      <Content></Content>
      <Navi></Navi>
    </Container>
  );
}
