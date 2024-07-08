import { Component } from 'react';
import { useState } from 'react';
import { Form } from 'react';
import { Button } from 'react'
import { Counter } from './Counter';
//import AppRoutes from './AppRoutes';
import AppRoutes from  'node_modules/src/AppRoutes'
import './Style.css'
import { Router, useHistory } from 'react-router-dom';
//import { useNavigate } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import { FetchData } from './FetchData';
import { Navigate } from "react-router-dom";
import { Home } from './Home';
import { NavMenu } from './NavMenu';

export default function LOGIN() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    let navigate = useNavigate();
   /* const history = useHistory();*/
    //Route
    //{
    //    AppRoutes.map((route, index) => {
    //        const { element, ...rest } = route;

    //      })}


    // User Login info
    const database = [
        {
            username: "Firezer",
            password: "pass1"
        },
        {
            username: "Test",
            password: "pass2"
        }
    ];

    const errors = {
        uname: "wrong username",
        pass: "wrong password"
    };
    function routeChange() {
        return (
             <div>
              <h1>Welcome</h1>  
                   <NavMenu />
                </div>

         )  
            
    }
    

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>User Name </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Pass word </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit"  />
                    {/*<button */}
                    {/*    onClick={routeChange}*/}
                    {/*>*/}
                    {/*    Login*/}
                    {/*</button>*/}
                </div>

            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">NMS</div>
                {isSubmitted ? <h1>Welcome</h1>: renderForm}
               
            </div>
            
                
        </div>
    );
}
