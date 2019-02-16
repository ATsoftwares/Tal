import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer} from 'redux-form';
import streamReducer from './streamReducer';
export default combineReducers({
    authReducer:authReducer,
    form : reducer,
    stream:streamReducer
})