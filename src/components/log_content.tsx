import { useRecoilState } from "recoil";
import { toolcodeValueSate } from "../RecoilState";
import FlowViewTable from "./log_content/flow_table";
import LogViewTable from "./log_content/log_table";
import { useQuery } from "react-query";
import { EventStreamVo } from "../interface/logview";
import { fetchEventStreamList } from "../Api";




export default function LogContent() {

    const [toolcodeState, setToolcodeState] = useRecoilState(toolcodeValueSate);

    const { isLoading: isEventStreamList, data: eventStreamList } = useQuery<EventStreamVo[]>(["eventStreamList", toolcodeState.toolcode], () => fetchEventStreamList(toolcodeState.toolcode), {
        refetchInterval: 2500
    });

    return (

        <>
            <h1>{toolcodeState.toolcode}</h1>
            <FlowViewTable />
            <LogViewTable trcakingKey="ABCDEFG" />


        </>
    );
}