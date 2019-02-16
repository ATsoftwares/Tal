import {combineReducers} from 'redux';
import PostsReducer from './PostsReducer';
import Users from './Users';
export default  combineReducers({
    posts :PostsReducer,
    users: Users
});
