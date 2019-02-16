import React from 'react';
import {signIn,signOut} from '../actions';
import {connect} from 'react-redux';
class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: '1070074074652-rps696s5h6o5q2j7a9kmgjck9dv7tnng.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
               this.updateSignIn( this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.updateSignIn);
            })
        })
    }

    updateSignIn = (isSignIn) => {
        // this.setState({ isSignIn: isSignIn });
        if (isSignIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }

    onSignIn = () =>{
        this.auth.signIn();
    }

    onSignOut = () =>{
        this.auth.signOut();
    }

    isSign = () => {
        if (this.props.isSignIn) {
            return (<button onClick={this.onSignOut}>
                <i className="google icon"></i>
                Sign out with google
            </button>);
        }
        else {
            return (<button onClick={this.onSignIn}>
                <i className="google icon"></i>
                Sign In with google
            </button>);


        }
    }

    render() {
        return (
            <div>{this.isSign()}</div>
        );
    }
}

const mapState = (store) =>{
    return {isSignIn: store.authReducer.isSignIn}
}

export default connect(mapState,{signIn,signOut})(GoogleAuth);