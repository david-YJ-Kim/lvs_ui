import { useRecoilState } from "recoil";
import { toolcodeValueSate } from "../RecoilState";
import { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";


const BasicInput = styled.input`
    width: 100%;
`;


export default function SimpleInput() {

    const [toolCodeValue, setToolCodeValue] = useRecoilState(toolcodeValueSate);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setToolCodeValue({ toolcode: newValue });
        console.log(toolCodeValue)
    };


    const handleEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        // e.preventDefault();
        console.log(e.key);
        if (e.key === 'Enter') {
            alert('Confirmation message'); // Show confirmation message
        }
    };

    return (
        <>
            <BasicInput
                type="text"
                autoFocus={true}
                value={toolCodeValue.toolcode}
                onChange={handleChange}
                onKeyDown={handleEnterKeyPress}
                placeholder="tool code"
            >
            </BasicInput>
        </>

    )
}