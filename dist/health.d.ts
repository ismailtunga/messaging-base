import { uuid } from './uuid';
export declare enum HealthEventType {
    Create = "create",
    Configure = "configure",
    Start = "start",
    StartFailure = "start-failure",
    Initialize = "initialize",
    InitializeFailure = "initialize-failure",
    Sleep = "sleep",
    Delete = "delete"
}
export interface HealthEvent {
    id: uuid;
    conduitId: uuid;
    time: Date;
    type: HealthEventType;
    data?: any;
}
export interface HealthReport {
    channels: {
        [channel: string]: {
            events: HealthReportEvent[];
        };
    };
}
export declare type HealthReportEvent = Omit<HealthEvent, 'id' | 'conduitId'>;
