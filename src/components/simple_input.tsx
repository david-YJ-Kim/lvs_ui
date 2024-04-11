import { useRecoilState } from "recoil";
import { toolcodeValueSate } from "../RecoilState";
import { ChangeEvent, KeyboardEvent, useEffect } from "react";
import styled from "styled-components";


const BasicInput = styled.input`
    width: 100%;
`;


export default function SimpleInput() {

    const [toolCodeValue, setToolCodeValue] = useRecoilState(toolcodeValueSate);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setToolCodeValue({ toolcode: newValue });
    };



    /**
     * Handel keyboard push event.
     * @param e 
     */
    const handleEnterKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        // e.preventDefault();
        if (e.key === 'Enter') {
            alert('Confirmation message'); // Show confirmation message
        }

        if (e.key === "Escape") {
            setToolCodeValue({ toolcode: '' });
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