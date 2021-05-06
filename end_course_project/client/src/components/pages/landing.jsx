import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { userContext } from '../../utils/context/userContext'
import '../../css/landing.css'
import Login from '../utils/Login'
import OpeningSound from '../../sound/opening.mp3'
import Button from '../utils/Button'
import validator from 'validator'
import axios from 'axios'
import PokemonsDesplayer from '../utils/PokemonsDesplayer'
import pokemonsGenerator from '../../utils/classes/Pokemon/pokemonsGenerator'

const sound = new Audio(OpeningSound)

const Home = () => {

    //TODO: cant get two pokemons the same

    const { user, setUser } = useContext(userContext)
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)
    const [musicOff, setMusicOff] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [newUserCreated, setNewUserCreated] = useState(false)
    const location = useHistory()
    const onFormSubmit = async (e) => {
        e.preventDefault()
        const action = e.target[2].id // get action from e

        const isEmail = validator.isEmail(email)

        if (!isEmail) {
            setError('Invalid email')
        }

        if (action === "register" && isEmail) {
            setError('')
            try {
                const newUser = await axios.post('/api/users/register', {
                    email, password
                })
                newUser.status === 200 && setNewUserCreated(true)
                setUser(newUser.data)
            } catch (err) {
                console.log(err.message)
                setError("This email is in-use")
            }
        }

        if (action === "login") {
            // do something
        }

    }



    const playMusic = () => {
        if (!isMusicPlaying) {
            sound.play()
            setIsMusicPlaying(true)
        }
    }


    const initialPokemonChoose = (pokemon) => {
        console.log(pokemon)
        const newPokemon = pokemonsGenerator.makePokemon(pokemon,5)
        let helper = {...user}
        helper.pokemons.push(newPokemon)
        setUser(helper)
        console.log(helper.pokemons);
        location.push('/battle')
    }

    return (
        <>
            {sound?.HAVE_ENOUGH_DATA &&
                <div onClick={playMusic} className="landing-page">
                    <div className="login-popup-container" >
                        {newUserCreated ?
                            <div className="initial-pokemon-choose">
                                <PokemonsDesplayer initialPokemonChoose={initialPokemonChoose} />
                            </div>
                            :
                            <Login
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                onFormSubmit={onFormSubmit}
                                error={error}
                            />}
                        {isMusicPlaying &&
                            <Button
                                onClick={() => {
                                    musicOff ? sound.play() : sound.pause()
                                    setMusicOff(prev => !prev)
                                }}
                                text={`${musicOff ? "Music On" : "Stop audio"}`}
                            />
                        }

                    </div>
                </div>
            }
        </>
    )
}

export default Home