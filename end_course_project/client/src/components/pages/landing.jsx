import React, { useContext, useEffect, useRef, useState } from 'react'
import { useHistory,Link } from 'react-router-dom'
import { userContext } from '../../utils/context/userContext'
import '../../css/landing.css'
import Login from '../utils/Login'
import OpeningSound from '../../sound/opening.mp3'
import Button from '../utils/Button'
import Pokemon from '../../utils/classes/Pokemon/Pokemon'
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
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [newUserCreated, setNewUserCreated] = useState(false)
    const location = useHistory()


    useEffect(() => {

        setUser(null) // bug protector(??)

    }, [])


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
            setError('')
            try {
                const newUser = await axios.post('/api/users/login', {
                    email, password
                })
                debugger
                let helper = new Pokemon('helper')
                for(let i=0;i<newUser.data.pokemons.length;i++){
                    // helper = {...newUser.data.pokemons[i]}
                    Object.setPrototypeOf(newUser.data.pokemons[i],helper)
                    console.log(newUser.data.pokemons[i].calculateDamage);
                }
                // newUser.data.pokemons.forEach((poke) => {
                //    poke.__proto__ = helper.__proto__ // object hell
                // })
                setUser(newUser.data)
                setIsUserLoggedIn(true)
                console.log(newUser);
            } catch (err) {
                console.log(err.message)
                setError("Invalid email or password")
            }
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
        const newPokemon = pokemonsGenerator.makePokemon(pokemon, 5)
        let helper = { ...user }
        helper.pokemons.push(newPokemon)
        setUser(helper)
        console.log(helper.pokemons);
        location.push('/battle')
    }

    const startGame = () => {
        sound.pause()
        location.push('/battle')
    }

    return (
        <>
            {(sound?.HAVE_ENOUGH_DATA) &&
                <div onClick={playMusic} className="landing-page">
                    <div className="login-popup-container" >

                        {
                            (newUserCreated && user === null) ?
                                <div className="initial-pokemon-choose">
                                    <PokemonsDesplayer initialPokemonChoose={initialPokemonChoose} />
                                </div>
                                : !isUserLoggedIn &&
                                <>
                                    <Login
                                        email={email}
                                        setEmail={setEmail}
                                        password={password}
                                        setPassword={setPassword}
                                        onFormSubmit={onFormSubmit}
                                        error={error}
                                    />
                                    <Link to="/battle">battle</Link>
                                    {isMusicPlaying &&
                                        <i
                                            className={`${musicOff ? "fas fa-volume-mute fa-lg" : "fas fa-volume-up fa-lg"}`}
                                            onClick={() => {
                                                musicOff ? sound.play() : sound.pause()
                                                setMusicOff(prev => !prev)
                                            }}
                                        >
                                        </i>}
                                </>

                        }

                        {
                            (isUserLoggedIn && user.pokemons.length > 0) &&
                            startGame()
                        }





                    </div>
                </div>
            }
        </>
    )
}

export default Home