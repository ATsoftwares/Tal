export default (state=[],action) =>{
    if (action.type === "GET_POSTS"){
        return action.payload;
    }

    return state;
}