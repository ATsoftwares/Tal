import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import reduce from './reducers';

ReactDOM.render(
    <Provider store={createStore(reduce)}>
        <App />
    </Provider>
    , document.querySelector("#root"));