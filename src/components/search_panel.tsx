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
  width: 90vh;
`;
const SearchForm = styled.div`
  width: 30vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const BasicSpan = styled.span`
  font-size: 1.5vh;
`;
const ViewResult = styled.div`
  display: flex;
  align-items: flex-start;
  /* width: 80vw; */
  overflow-y: auto; /* Add scroll if content exceeds height */
  max-height: 60vh; /* Limit maximum height to 60% of viewport height */
  overflow-x: hidden;
  overflow-y: hidden;
`;

const ToolBox = styled.div`
  min-width: 100px;
  min-height: 50px;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  display: flex;
  align-items: center;
`;

const ToolList = styled.div`
  width: 100px;
  height: 100%;
  padding: 0.5;
  box-sizing: border-box;
`;

const ToolBtn = styled.button<{ bgcolor: string }>`
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${(props) => props.bgcolor};
  cursor: pointer;
`;

// https://codepen.io/mahish/pen/RajmQw
// → 참고로 search panel 만들기555

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
            <ToolList>
              <ToolBtn
                bgcolor={
                  toolcodeState.toolcode === crnToolCode ? "#00b894" : "#dfe6e9"
                }
                key={crnToolCode + "_" + index}
                onClick={() => handleToolBtnClick(crnToolCode)}
              >
                <BasicSpan>{crnToolCode}</BasicSpan>
              </ToolBtn>
            </ToolList>
          </ToolBox>
        ))}
      </ViewResult>
    </Container>
  );
}
