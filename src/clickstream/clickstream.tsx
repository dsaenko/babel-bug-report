import React, { useCallback, useContext } from 'react';
import { Clickstream, SendEvent } from './types';
import { ClickstreamEvent } from './events';
import { ClickstreamEmitter } from './emitter';

export const ClickStreamContext = React.createContext<{ clickstream: Clickstream }>({
    clickstream: { sendEvent: () => {} }
});

export const ClickStreamProvider = ({
    clickstream,
    children
}: {
    clickstream: Clickstream;
    children: React.ReactNode;
}) => {
    return (
        <ClickStreamContext.Provider value={{ clickstream }}>
            {children}
        </ClickStreamContext.Provider>
    );
};

export const ClickStreamProviderWithEmitter = ({ children }: { children: React.ReactNode }) => {
    return (
        <ClickStreamContext.Provider value={{ clickstream: ClickstreamEmitter }}>
            {children}
        </ClickStreamContext.Provider>
    );
};

export function useClickstream<T>(fn: (sendEvent: SendEvent) => void): () => void;
export function useClickstream<T>(fn: (sendEvent: SendEvent, params: T) => void): (params: T) => void;

export function useClickstream<T>(fn: (sendEvent: SendEvent, params: T) => void) {
    const { clickstream } = useContext(ClickStreamContext);
    const sendEvent = useCallback<SendEvent>(
        (event: ClickstreamEvent) => {
            clickstream.sendEvent(event.getId(), event.getVersion(), event.getFields());
        },
        [clickstream]
    );

    return useCallback(
        (params: T) => {
            fn(sendEvent, params);
        },
        [sendEvent, fn]
    );
}
