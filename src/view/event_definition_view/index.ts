// event definition view
// → flow를 구성하는 event를 정의하는 view 페이지

import styled from "styled-components"
import ScenarioEventSelectionView from "./impl/scenario_event_selection";
import MessageSpecSelectionView from "./impl/message_spec_selection";
import EventOperationSelectionView from "./impl/event_operation_selection";
// import EventOperationSelectionView from "./impl/event_operation_selection";
// import MessageSpecSelectionView from "./impl/message_spec_selection";

// // 시나리오와 이벤트 그리고 이벤트 설명 선택
const ScenarioEventSelection = styled.div``;

// // 메시지 스펙 관련한 데이터 설정
const MessageSpecSelection = styled.div``;

// // 이벤트 작업에 대한 설정
const EventOperationSelection = styled.div``;

export default function EventDefinitionView() {

    return (
        <div>
        <ScenarioEventSelection>
        <ScenarioEventSelectionView />
        < /ScenarioEventSelection>
        < MessageSpecSelection >
        <MessageSpecSelectionView />
        < /MessageSpecSelection>
        < EventOperationSelection >
        <EventOperationSelectionView />
        < /EventOperationSelection>
        < /div>
    )
}