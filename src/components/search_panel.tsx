import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const SearchForm = styled.div``;
const ViewResult = styled.div``;

export default function SearchPanel() {
  return (
    <Container>
      <h1>Search Panel</h1>
      <SearchForm></SearchForm>
      <ViewResult></ViewResult>
    </Container>
  );
}
