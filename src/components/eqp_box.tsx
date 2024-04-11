import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toolcodeValueSate } from "../RecoilState";

const ToolCodeBox = styled.button<{ bgcolor: string }>`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 0px 5px;
  margin: 10px 0px;
  margin-right: 10px;
  background-color: ${(props) => props.bgcolor};
  cursor: pointer;
`;

interface IEqpBox {
    eqpId: string,
    isSelected: boolean
}

export default function EqpBox({ eqpId, isSelected }: IEqpBox) {

    const [toolcodeState, setToolcodeState] = useRecoilState(toolcodeValueSate);
    // Click event handler for ToolCodeBox
    const handleToolCodeBoxClick = (selectedToolCode: string) => {
        setToolcodeState({ toolcode: selectedToolCode });
    };


    return (
        <>
            <ToolCodeBox bgcolor={isSelected ? "#00b894" : "#dfe6e9"}
                onClick={handleToolCodeBoxClick}>

                <span>{eqpId}</span>
            </ToolCodeBox>
        </>
    )


}