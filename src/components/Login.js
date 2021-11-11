import React, {useState} from 'react';
import PropTypes from 'prop-types';


// async function loginUser(credentials) {
//     return fetch('http://localhost:5001/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(credentials)
//         })
//           .then(data => data.json())
// }

export default function Login({setToken, setUserId}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = async e => {
        e.preventDefault();
        // const data = await loginUser({
        //     username,
        //     password
        // });
        var data = {
            "token": 'test123',
            "userId": 'User 1'
        };  //hard code at first for testing
        setToken(data.token);
        setUserId(data.userId);
    }

    return(
        <div className="login-menu">
            <h2>Please log in!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type='text' onChange={e => setUserName(e.target.value)}></input>
                </label>
                <label>
                    <p>Password</p>
                    <input type='text' onChange={e => setPassword(e.target.value)}></input>
                </label>
                <div class="login-button">
                    <button type='submit'>Log in</button>
                </div>
            </form>
        </div>
    )
}