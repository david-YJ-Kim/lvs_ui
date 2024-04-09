import { useRecoilState } from "recoil";
import { toolcodeValueSate } from "../RecoilState";
import { ChangeEvent } from "react";

export default function SimpleInput() {

    const [toolCodeValue, setToolCodeValue] = useRecoilState(toolcodeValueSate);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setToolCodeValue({ toolcode: newValue });
    };

    return (
        <>
            <input
                type="text"
                value={toolCodeValue.toolcode}
                onChange={handleChange}
                placeholder="tool code"
            >
            </input>
        </>

    )
}