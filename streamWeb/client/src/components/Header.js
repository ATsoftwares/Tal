import React from 'react';
import Link from 'react-router-dom/Link';
import GoogleAuth from './GoogleAuth';

class Header extends React.Component{
    render(){
        return(
            <div>Header
            <Link to="/streams/new"> create </Link>
            <GoogleAuth/>
            </div>
        );
    }
}

export default Header;