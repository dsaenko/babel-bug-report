type EventFields = Record<string, any>;

export interface ClickstreamEvent {
    getId(): number;
    getVersion(): number;
    getFields(): EventFields;
}

abstract class BaseEvent implements ClickstreamEvent {
    // // TODO: it works
    // private readonly eid: number;
    // private readonly version: number;
    // protected constructor(eid: number, version: number) {
    //     this.eid = eid;
    //     this.version = version;
    // }

    protected constructor(
        private readonly eid: number,
        private readonly version: number,
    ) {
        this.eid = eid;
        this.version = version;
    }

    public getId(): number {
        return this.eid;
    }

    public getVersion(): number {
        return this.version;
    }

    public getFields(): EventFields {
        return {};
    }
}

export class EventV0 extends BaseEvent {
    constructor() {
        super(1111, 0);
    }

    public getFields(): EventFields {
        return {
            ...super.getFields(),
        };
    }
}
