import { useRecoilState } from "recoil";
import { toolcodeValueSate } from "../RecoilState";
import FlowViewTable from "./log_content/flow_table";
import LogViewTable from "./log_content/log_table";




export default function LogContent() {

    const [toolcodeState, setToolcodeState] = useRecoilState(toolcodeValueSate);

    return (

        <>

            <FlowViewTable />
            <LogViewTable trcakingKey="ABCDEFG" />


        </>
    );
}