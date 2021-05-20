import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import {Redirect} from 'react-router-dom';
import UserContext from '../utils/UserContext';
import "./login.css";

function Login(props){
    const {loggedIn} = useContext(UserContext);
    return (
        <div className="container h-100 login-bg my-5">
            {loggedIn && <Redirect to="/" />}
            
            <LoginForm className="full-page-login" />
        </div>
    )
}
export default Login;