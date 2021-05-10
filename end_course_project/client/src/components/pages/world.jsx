import React, { useContext, useState } from 'react'
import { userContext } from '../../utils/context/userContext'
import Map from '../utils/Map'
import Chat from '../utils/Chat'
import Store from '../utils/Store'
import tilesDefiner from './maps/index'
import '../../css/world.css'

const World = ({sounds}) => {
    const { user, setUser } = useContext(userContext)

    const [isCharacterInHome, setIsCharacterInHome] = useState(false)
    const [store, setStore] = useState(false)
    const [isChatting, setIsChatting] = useState('')
    let [chatFireLine, setChatFireLine] = useState(0)


    //TODO: store,heal,sprites,positioning the character,generate enemy

    const chatInfo = {
        oak: ["Hey folk! Looking for new pokemon?", "There will no discounts for you!"],
        nurse: ["Hey There! Need to recover your pokemons?", "Oh My God! They almost die!", "Here, this will help"]
    }


    const toggleMap = () => {
        debugger
        console.log('map changed');
        console.log(tilesDefiner);
        let helper = isCharacterInHome
        helper = !helper
        if(helper){
            sounds.forestSound.off()
            sounds.homeSound.on()
        }else{
            sounds.forestSound.on()
            sounds.homeSound.off()
        }
        setIsCharacterInHome(prev => !prev)
    }

    const toggleChat = (personName) => {
        if(isChatting.length===0)setIsChatting(personName)
    }

    const handleChattingFlow = (e) => {
        if (isChatting.length) {
            let helper = chatFireLine
            e.keyCode === 32 && helper++
            if (chatInfo[isChatting][helper]) {
                setChatFireLine(helper)
            }
            else {
                if(isChatting === "oak"){
                    setStore(true) // handle store
                }
                if(isChatting==="nurse"){
                    healUserPokemons()
                }
                setChatFireLine(0)
                setIsChatting('')
            }
        }
    }

    const healUserPokemons = () => {
        console.log('heal pokemons.........'); // handle sound
    }

    const closeStore = () => {
        setStore(false)
    }

    
    return (
        <div
            className="world"
            onKeyDown={(e) => { handleChattingFlow(e) }}
        >
            <Map sounds={sounds} toggleChat={toggleChat} toggleMap={toggleMap} isCharacterInHome={isCharacterInHome} 
            tiles={isCharacterInHome ? tilesDefiner.home : tilesDefiner.forest} />

            {isChatting && <Chat text={chatInfo[isChatting][chatFireLine]} />}

            {store && 
            <>
            <Store closeStore={closeStore}/>
            </>
            }

        </div>
    )
}
export default World