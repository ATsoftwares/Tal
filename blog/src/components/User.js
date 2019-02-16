import React from 'react';
// import {getUserById} from '../actions';
import {connect} from 'react-redux';
class User extends React.Component{
    
    componentDidMount(){
        // this.props.getUserById(this.props.userId);
    }

    render (){
        const user = this.props.users.find(user=>user.id===this.props.userId);

        if(user){
            return (
                <div>{user.name}</div>
            )
        }
        else return <div/>;
    }
}

const mapState = ({users}) =>{
        return {users}
}

export default connect(mapState)(User);