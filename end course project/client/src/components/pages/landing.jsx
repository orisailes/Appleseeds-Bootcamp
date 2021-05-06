import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../utils/context/userContext'
import '../../css/landing.css'
import Login from '../utils/Login'
import OpeningSound from '../../sound/opening.mp3'
const sound = new Audio(OpeningSound)

const Home = () => {

    //TODO: cant get two pokemons the same

    const { user, setUser } = useContext(userContext)
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)

    console.log(user);



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
                            <Login/>

                    </div>
                </div>
            }
        </>
    )
}

export default Home