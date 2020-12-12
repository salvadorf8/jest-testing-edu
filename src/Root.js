import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

// reason for destructuring is so that initialState is converted to be optional.
export default ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, applyMiddleware(thunk));

    //props.initialState is for test to work
    return <Provider store={store}>{children}</Provider>;
};
