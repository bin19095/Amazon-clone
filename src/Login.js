import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './login.css';
import { auth } from './firebase';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
        const history = useHistory();
      
            const signIn = e =>{
                e.preventDefault();
                //do to login logic
                auth.signInWithEmailAndPassword(email,password)
                .then((auth) =>{
                    //created a user and logged in, redirect to home page
                    history.push("/");
                })
                .catch((e) => alert(e.message));
            };

            const register = (event) =>{
                event.preventDefault();
                //to do register logic...
                auth.createUserWithEmailAndPassword(email, password)
                .then(auth =>{
                    if(auth){
                        console.log(auth);
                    //history.push('/')
                    };
                    //created a user and logged in...
                })
                .catch((e) => alert(e.message));
                //firebase register
            }
        
    
    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="/ref=ap_frn_logo"
                alt=""
                />

            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                <h5>E-mail</h5>
                <input value={email} type="text" onChange={event =>setEmail( event.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                <button className="login__signInButton" type="submit" onClick={signIn}
                >Sign In</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.  
                </p>
                <button onClick={register}>Create your Amazon Account</button>
            </div> 
        </div>
    )
}

export default Login
