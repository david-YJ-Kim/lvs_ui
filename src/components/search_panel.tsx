import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toolcodeValueSate } from "../RecoilState";
import SimpleInput from "./simple_input";

const Container = styled.div`
  display: flex;
`;
const SearchForm = styled.div``;
const ViewResult = styled.div``;



export default function SearchPanel() {
  // const [toolcodeValue, setToolcodeValue] = useRecoilState(toolcodeValueSate);


  return (
    <Container>
      <h1>Search Panel</h1>
      <SearchForm>
        <SimpleInput />
      </SearchForm>
      <ViewResult></ViewResult>
    </Container>
  );
}
