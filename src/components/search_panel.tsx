import styled from "styled-components";
import SimpleInput from "./simple_input";
import {
  toolcodeListStartWithSelector,
  toolcodeListState,
  toolcodeValueSate,
} from "../RecoilState";
import { useRecoilState, useRecoilValue } from "recoil";
import React from "react";
import { Autocomplete, TextField } from "@mui/material";

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
  // const handleToolBtnClick = (selectedToolCode: string) => {
  //   selectedToolCode === toolcodeState.toolcode
  //     ? setToolcodeState({ toolcode: "" })
  //     : setToolcodeState({ toolcode: selectedToolCode });
  // };

  const selectedValues = (event: React.SyntheticEvent<Element, Event>, value: string | null) => {
    value === null
      ? setToolcodeState({ toolcode: "" })
      : setToolcodeState({ toolcode: value });
  }

  return (
    <Container>
      <SearchForm>
        <Autocomplete disablePortal id="seach-tool-id" options={toolcodeList} sx={{ width: 300 }} onChange={selectedValues} renderInput={(params) => <TextField {...params} label="Tool Id" />} />
      </SearchForm>
    </Container>
  );
}
