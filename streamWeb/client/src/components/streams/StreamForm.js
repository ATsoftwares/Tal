import React from 'react';
import {Field,reduxForm } from 'redux-form';

class StreamForm extends React.Component{
    renderError = ({error, touched}) =>{
        if(error,touched){
            return(
                <div>{error}</div>
            )
        }
    }

     renderField  =({input,label,meta})=>{
        //  console.log(input);
        return (
            // <input value={propsField.input.value} onChange= {propsField.input.onChange} />
            <div>
                <label>{label}</label>
                <input {...input}  />
                <label>{this.renderError(meta)}</label>
            </div>
        )
    }
    render(){
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderField} label="enter title"/>
                <button>submit</button>
            </form>
        );
    }
     onSubmit = (values) =>{
         //console.log(this.props);
        this.props.onSub(values, this.props.userId);
    } 
}


const validate = (values) =>{
    const errors ={};
    if (!values.title){
        errors.title = "enter title";
    
    }

    return errors;
}



const formWarrped = reduxForm({form:'streamForm',validate})(StreamForm);
export default formWarrped;