import { EventV0 } from './events';

export default class ClickstreamEventFactory {
    public static createEventV0(): EventV0 {
        return new EventV0();
    }
}
