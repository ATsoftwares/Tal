import reactDom from 'react-dom';
import React from 'react';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware, compose } from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk';
const cop = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
reactDom.render(<Provider store={createStore(reducers,cop(applyMiddleware(thunk)))}>
     <App/>
</Provider>, document.querySelector("#root"));
