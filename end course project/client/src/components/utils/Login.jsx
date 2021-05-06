import React, { useState } from 'react'
import Button from './Button'

const Login = () => {
    const [isLoginWanted, setIsLoginWanted] = useState(null)

    return (
        <div className="login-popup">
            <img src={require('../../img/home/pokeball.png').default} alt="pokeball" />
            { (isLoginWanted !== null && isLoginWanted) ?
                <>
                    <label htmlFor="username">Email:</label>
                    <input id="email" type="email" />
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" />
                    <input type="submit" value="Login" />
                </>
                :
                (isLoginWanted !== null && !isLoginWanted) &&
                <>
                    <label htmlFor="username">Email:</label>
                    <input id="email" type="text" />
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="text" />
                    <input type="submit" value="Register" />
                </>
            }
            <div className="opt-btn-container">
                <Button onClick={() => setIsLoginWanted(true)} text="Login" />
                <Button onClick={() => setIsLoginWanted(false)} text="Register" />
            </div>

        </div >
    )
}

export default Login
