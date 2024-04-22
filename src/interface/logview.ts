export interface EventStreamVo {

    messageKey: string;
    cid: string;
    eqpId: string;
    carrId: string;
    portId: string;
    timestamp: Date;
    formattedTime: string;
    logLevel: string;
}


export interface EventLogVo {

    messageKey: string;
    logName: string;
    timestamp: Date;
    logLevel: string;
    threadName: string;
    classTrace: string;
    payload: string;

}

