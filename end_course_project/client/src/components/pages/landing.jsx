import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../utils/context/userContext'
import '../../css/landing.css'
import Login from '../utils/Login'
import OpeningSound from '../../sound/opening.mp3'
import validator from 'validator'
import axios from 'axios'

const sound = new Audio(OpeningSound)

const Home = () => {

    //TODO: cant get two pokemons the same

    const { user, setUser } = useContext(userContext)
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const onFormSubmit = (e) => {
        e.preventDefault()
        const action = e.target[2].id // get action from e

        const isEmail = validator.isEmail(email)
        console.log(action);
        if (action === "register") {
            if (isEmail && password.length > 6) {
                setError('')
               const newUser = axios.post('/api/users/register',{
                   email,password
               })
                // send axios
            } else {
                password.length < 6 && setError('Invalid password')
                password.length > 6 && setError('Invalid email or in use')
            }
        }
    }



    const playMusic = () => {
        if (!isMusicPlaying) {
            // sound.play()
            // setIsMusicPlaying(true)
        }
    }


    return (
        <>
            {sound?.HAVE_ENOUGH_DATA &&
                <div onClick={playMusic} className="landing-page">
                    <div className="login-popup-container" >
                        {/* <Link
                            onClick={() => {
                                // sound.pause()
                                // sound.currentTime = 0
                            }}
                            to="/battle">to battle
                            </Link> */}
                        <Login
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            onFormSubmit={onFormSubmit}
                            error={error}
                        />

                    </div>
                </div>
            }
        </>
    )
}

export default Home