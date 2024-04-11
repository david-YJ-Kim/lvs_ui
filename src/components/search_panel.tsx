import styled from "styled-components";
import SimpleInput from "./simple_input";
import {
  toolcodeListStartWithSelector,
  toolcodeListState,
  toolcodeValueSate,
} from "../RecoilState";
import { useRecoilState, useRecoilValue } from "recoil";
import { KeyboardEvent } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 30px;
  width: 90%;
`;
const SearchForm = styled.div`
  width: 30vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const BasicSpan = styled.span`
  font-size: 20px;
`;
const ViewResult = styled.div`
  display: flex;
  align-items: flex-start;
  /* width: 80vw; */
  width: 100%;
  overflow-y: auto; /* Add scroll if content exceeds height */
  max-height: 60vh; /* Limit maximum height to 60% of viewport height */
`;

const ToolBox = styled.div`
  width: 100px;
  height: 50px;
`;

const ToolBtn = styled.button<{ bgcolor: string }>`
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
  const toolcodeList = useRecoilValue(
    toolcodeListStartWithSelector(toolcodeState.toolcode)
  );

  // Click event handler for ToolBtn
  // is already clicked then make it null
  const handleToolBtnClick = (selectedToolCode: string) => {
    selectedToolCode === toolcodeState.toolcode
      ? setToolcodeState({ toolcode: "" })
      : setToolcodeState({ toolcode: selectedToolCode });
  };

  return (
    <Container>
      <SearchForm>
        <BasicSpan>search eqp id</BasicSpan>
        <SimpleInput />
      </SearchForm>
      <ViewResult>
        {toolcodeList.map((crnToolCode, index) => (
          <ToolBox>
            <ToolBtn
              bgcolor={
                toolcodeState.toolcode === crnToolCode ? "#00b894" : "#dfe6e9"
              }
              key={crnToolCode + "_" + index}
              onClick={() => handleToolBtnClick(crnToolCode)}
            >
              <BasicSpan>{crnToolCode}</BasicSpan>
            </ToolBtn>
          </ToolBox>
        ))}
      </ViewResult>
    </Container>
  );
}
