import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    return(
        <div class="login-menu">
            <h2>Please log in!</h2>
            <form>
                <label>
                    <p>Username</p>
                    <input type='text'></input>
                </label>
                <label>
                    <p>Password</p>
                    <input type='text'></input>
                </label>
                <div class="login-button">
                    <button type='submit'>Log in</button>
                </div>
            </form>
        </div>
    )
}