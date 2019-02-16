import placeHolder from '../api/jsonplaceholder';
import _ from 'lodash';

export const getPostsAndUsers = () => async (dispatch,getState) =>{
    await dispatch(getPosts());
    const posts = getState().posts;
    // const usersId = _.uniq(_.map(posts,'userId'));
    // usersId.map(userId=>dispatch(getUserById(userId)));
    _.chain(posts).map('userId').uniq().forEach(userId=>dispatch(getUserById(userId))).value();
};

export const getPosts = () => async (dispatch) => {
    const respons = await placeHolder.get('/posts');
    dispatch( {
        type:"GET_POSTS",
        payload:respons.data
    });
} 

export const getUserById = (id) => async (dispatch) => {
        const respons = await placeHolder.get(`/users/${id}`);
        dispatch( {
            type:"GET_USER",
            payload:respons.data
        });   
    };



// const fetchUser =  _.memoize(async function(id,dispatch){
//     const respons = await placeHolder.get(`/users/${id}`);
//     dispatch( {
//         type:"GET_USER",
//         payload:respons.data
//     });   
// });