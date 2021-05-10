import React, { useContext, useState } from 'react'
import { userContext } from '../../utils/context/userContext'
import Map from '../utils/Map'
import Chat from '../utils/Chat'
import Store from '../utils/Store'
import PreBuy from '../utils/PreBuy'
import tilesDefiner from './maps/index'
import axios from 'axios'
import pokemonsGenerator from '../../utils/classes/Pokemon/pokemonsGenerator'
import _ from 'lodash'
import '../../css/world.css'

const World = ({ sounds }) => {
    const { user, setUser } = useContext(userContext)

    const [isCharacterInHome, setIsCharacterInHome] = useState(false)
    const [store, setStore] = useState(false)
    const [pokemonUserWantToBuy, setPokemonUserWantToBuy] = useState(null)
    const [isChatting, setIsChatting] = useState('')
    const [preBuyText, setPreBuyText] = useState('')
    const [mapMusicOff, setMapMusicOff] = useState(false)
    let [chatFireLine, setChatFireLine] = useState(0)


    //TODO: sprites,generate enemy , positioning the character

    const chatInfo = {
        oak: ["Hey folk! Looking for new pokemon?", "There will no discounts for you!"],
        nurse: ["Hey There! Need to recover your pokemons?", "Oh My God! They almost die!", "Here, this will help"]
    }

    const wait = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const toggleMap = () => {
        console.log('map changed');
        console.log(tilesDefiner);
        let helper = isCharacterInHome
        helper = !helper
        if (helper) {
            sounds.forestSound.off()
            sounds.homeSound.on()
        } else {
            sounds.forestSound.on()
            sounds.homeSound.off()
        }
        setIsCharacterInHome(prev => !prev)
    }

    const toggleChat = (personName) => {
        if (isChatting.length === 0) setIsChatting(personName)
    }

    const handleChattingFlow = (e) => {
        if (isChatting.length) {
            let helper = chatFireLine
            e.keyCode === 32 && helper++
            if (chatInfo[isChatting][helper]) {
                setChatFireLine(helper)
            }
            else {
                if (isChatting === "oak") {
                    setStore(true) // handle store
                }
                if (isChatting === "nurse") {
                    healUserPokemons()
                }
                setChatFireLine(0)
                setIsChatting('')
            }
        }
    }

    const healUserPokemons = async () => {
        let helper = _.cloneDeep(user)
        if(!mapMusicOff){
            isCharacterInHome ? sounds.homeSound.pause() : sounds.forestSound.pause()
        }
        sounds.healSound.on()
        debugger
        for (let i = 0; i < helper.pokemons.length; i++) {
            helper.pokemons[i].hp = helper.pokemons[i].maxHp
        }
        await axios.put(`/api/users/${user.email}`, helper)
        await wait(4500)
        if(!mapMusicOff){
            isCharacterInHome ? sounds.homeSound.on() : sounds.forestSound.on()
        }
        setUser(helper)
        console.log(user)
    }

    const closeStore = () => {
        setStore(false)
    }

    const pokemonBuying = (pokemonToBuy) => {
        setPokemonUserWantToBuy(pokemonToBuy)
    }

    const clickToBuy = async (pokemon) => {
        debugger
        if (!user) {
            setPreBuyText('You have to login first.')
        } if (user) {
            if (user.money < pokemon.price) {
                setPreBuyText('Not enough funds')
            }
            if (user.money >= pokemon.price) {
                debugger
                let newPokemon = pokemonsGenerator.makePokemon(pokemon.pokemon, pokemon.level)
                let helper = _.cloneDeep(user)
                helper.money -= pokemon.price
                helper.pokemons.push(newPokemon)
                await axios.put(`/api/users/${user.email}`, helper)
                setUser(helper)
                setPreBuyText('Pokemon buy succesfully')
            }
        }
        console.log('user:', user)
        console.log('pokemon:', pokemon)
    }

    const cancelBuy = () => {
        setPreBuyText('')
        setPokemonUserWantToBuy(null)
    }

    const toggleMusic = () => {
        if(mapMusicOff){
            isCharacterInHome ? sounds.homeSound.on() : sounds.forestSound.on()
            
        }else{
            isCharacterInHome ? sounds.homeSound.pause() : sounds.forestSound.pause()
        }
        setMapMusicOff(prev => !prev)
    }

    return (
        <div
            className="world"
            onKeyDown={(e) => { handleChattingFlow(e) }}
        >
            <Map
                sounds={sounds}
                toggleChat={toggleChat}
                toggleMap={toggleMap}
                isCharacterInHome={isCharacterInHome}
                tiles={isCharacterInHome ? tilesDefiner.home : tilesDefiner.forest}
                mapMusicOff={mapMusicOff}
                toggleMusic={toggleMusic}
            />

            {isChatting && <Chat text={chatInfo[isChatting][chatFireLine]} />}

            {store &&
                <>
                    <Store pokemonBuying={pokemonBuying} closeStore={closeStore} />
                    { pokemonUserWantToBuy &&
                        <PreBuy
                            cancel={cancelBuy}
                            clickToBuy={clickToBuy}
                            pokemon={pokemonUserWantToBuy}
                            preBuyText={preBuyText}
                            user={user}
                        />
                    }
                </>
            }

        </div>
    )
}
export default World