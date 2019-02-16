export default (Users=[],action) =>{
    if(action.type === "GET_USER"){
        return [...Users,action.payload];
    }

    return Users;
}
