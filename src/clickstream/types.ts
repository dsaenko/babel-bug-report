import { ClickstreamEvent } from './events';

export type Clickstream = {
    sendEvent: SendClickStreamEvent;
};

export type SendClickStreamEvent = {
    (eid: number, eventVersion: number, params: Record<string, unknown>): void;
};

export type SendEvent = (event: ClickstreamEvent) => void;
