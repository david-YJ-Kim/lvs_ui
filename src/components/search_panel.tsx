import styled from "styled-components";
import SimpleInput from "./simple_input";
import {
  toolcodeListStartWithSelector,
  toolcodeListState,
  toolcodeValueSate,
} from "../RecoilState";
import { useRecoilState, useRecoilValue } from "recoil";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 30px;
`;
const SearchForm = styled.div`
  width: 30vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const BasicSpan = styled.span`
  font-size: 10px;
`;
const ViewResult = styled.div`
  display: flex;
  align-items: flex-start;
  width: 80vw;
  overflow-y: auto; /* Add scroll if content exceeds height */
  max-height: 60vh; /* Limit maximum height to 60% of viewport height */
`;
const ToolCodeBox = styled.button<{ bgcolor: string }>`
  width: 25vh;
  border-radius: 10px;
  border: 1px solid black;
  padding: 0px 5px;
  margin: 10px 0px;
  margin-right: 10px;
  background-color: ${(props) => props.bgcolor};
  cursor: pointer;
`;

export default function SearchPanel() {
  const [toolcodeState, setToolcodeState] = useRecoilState(toolcodeValueSate);
  // const [toolcodeList, setToolCodeList] = useRecoilState(toolcodeListState);
  // → use selector for search list
  const toolcodeList = useRecoilValue(toolcodeListStartWithSelector);

  // Click event handler for ToolCodeBox
  const handleToolCodeBoxClick = (selectedToolCode: string) => {
    setToolcodeState({ toolcode: selectedToolCode });
  };

  return (
    <Container>
      <SearchForm>
        <BasicSpan>search eqp id</BasicSpan>
        <SimpleInput />
      </SearchForm>
      <ViewResult>
        {/* #dfe6e9 */}
        {toolcodeList.map((crnToolCode, index) => (
          <ToolCodeBox
            bgcolor={
              toolcodeState.toolcode === crnToolCode ? "#00b894" : "#dfe6e9"
            }
            key={index}
            onClick={() => handleToolCodeBoxClick(crnToolCode)}
          >
            {" "}
            <BasicSpan>{crnToolCode}</BasicSpan>
          </ToolCodeBox>
        ))}
      </ViewResult>
    </Container>
  );
}
