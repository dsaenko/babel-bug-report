import { SendEvent } from './types';
import ClickstreamEventFactory from './factory';

export const trackEvent = (
    sendEvent: SendEvent,
) => {
    const event = ClickstreamEventFactory.createEventV0()

    sendEvent(event);
};

