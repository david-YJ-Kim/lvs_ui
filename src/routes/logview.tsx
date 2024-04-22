import styled from "styled-components";
import SearchPanel from "../components/search_panel";
import { Autocomplete, Button, Drawer, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { toolcodeListStartWithSelector, toolcodeListState, toolcodeValueSate } from "../RecoilState";
import LogContent from "../components/log_content";
import { useQuery } from "react-query";
import { fetchEqpList } from "../Api";

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
  /* height: 15vh;  → 위와 같이 높이 제한 시, 내부 element가 삐져나옴*/
  background-color: ${(props) => props.bgcolor};
`;

const Body = styled.div`
  height: 85vh;
`;
const Content = styled(Body)``;
const Navi = styled(Body)``;

export default function LogView() {
  const [toolcodeState, setToolcodeState] = useRecoilState(toolcodeValueSate);
  const [, setToolcodeList] = useRecoilState(toolcodeListState);

  const selectedToolcodeList = useRecoilValue(
    toolcodeListStartWithSelector(toolcodeState.toolcode)
  );

  const [toggleDrawer, setToggleDrawer] = useState(true);

  const selectedValues = (event: React.SyntheticEvent<Element, Event>, value: string | null) => {
    value === null
      ? setToolcodeState({ toolcode: "" })
      : setToolcodeState({ toolcode: value });
  }

  const { isLoading: isEqpListLoading, data: eqpList } = useQuery<[]>("eqpList", fetchEqpList)

  useEffect(() => {
    if (!isEqpListLoading && eqpList) {
      // Update Recoil state with eqpList data
      const toolcodes = eqpList.map((eqp: string) => eqp);
      setToolcodeList(toolcodes); // Set new value of toolcodeListState
    }
  }, [isEqpListLoading, eqpList]);


  return (
    <Container>
      <Header bgcolor="#dfe6e9">
        <Button onClick={() => setToggleDrawer(!toggleDrawer)}>Open drawer</Button>
      </Header>

      {isEqpListLoading ? "Loading..." : (

        <Drawer open={toggleDrawer} onClose={() => setToggleDrawer(false)}>
          <Autocomplete disablePortal id="seach-tool-id" options={selectedToolcodeList} sx={{ width: 300 }} value={toolcodeState.toolcode} onChange={selectedValues} renderInput={(params) => <TextField {...params} label="Tool Id" />} />
          <Button onClick={() => setToggleDrawer(!toggleDrawer)}>Search</Button>
        </Drawer>
      )}
      <Content>
        {toolcodeState.toolcode ? (<LogContent />) : (<h1>Choose Tool Code</h1>)}
      </Content>
      <Navi></Navi>
    </Container>
  );
}
