import React from 'react';
import ReactDOM from 'react-dom';
import { ClickStreamProviderWithEmitter, useClickstream } from './clickstream/clickstream';
import { trackEvent } from './clickstream/track';

const Main = () => {
    const sendEvent = useClickstream(trackEvent);

    React.useEffect(() => {
        console.log('sendEvent');
        sendEvent();
    }, [sendEvent]);

    return (
        <div>11111</div>
    );
};

const App = () => {
    return (
        <ClickStreamProviderWithEmitter>
            <Main />
        </ClickStreamProviderWithEmitter>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);
