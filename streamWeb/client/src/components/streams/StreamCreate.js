import React from 'react';
import {Field,reduxForm } from 'redux-form';
import {createStream} from '../../actions';
import {connect} from 'react-redux';
import StreamForm from './StreamForm';
class StreamCreate extends React.Component{
   
    render(){
        return(
            <StreamForm onSub={this.onSubmit }/>
        );
    }
     onSubmit = (values) =>{
        this.props.createStream(values, this.props.userId);
        //console.log(values);
    } 
}


const mapState = (state) =>{
    return {userId:state.authReducer.userId}
}

//const formWarrped =reduxForm({form:'streamCreate',validate})(StreamCreate);
export default connect(mapState,{createStream})(StreamCreate);