import { Clickstream } from './types';

export type ClickstreamEventDetail = {
    eid: number;
    version: number;
    params: Record<string, unknown>;
};

export const ClickstreamEmitter: Clickstream = {
    sendEvent: (eid, version, params) => {
        document.dispatchEvent(
            new CustomEvent<ClickstreamEventDetail>('clickstream.event', {
                detail: {
                    eid,
                    version,
                    params
                }
            })
        );
    }
};
