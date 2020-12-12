import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import App from './components/App';
// import reducers from './reducers';

// above were commented because Root.js replaced them in order for test to work
import Root from './Root';

ReactDOM.render(
    // <Provider store={createStore(reducers, {})}>
    <Root>
        <App />
    </Root>,
    // </Provider>,
    document.querySelector('#root')
);
