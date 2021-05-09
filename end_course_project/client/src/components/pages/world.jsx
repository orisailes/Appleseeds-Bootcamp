import React, { useContext, useState } from 'react'
import { userContext } from '../../utils/context/userContext'
import Map from '../utils/Map'
import Chat from '../utils/Chat'
import tilesDefiner from './maps/index'
import '../../css/world.css'

const World = () => {
    const { user, setUser } = useContext(userContext)

    const [isCharacterInHome, setIsCharacterInHome] = useState(false)
    const [isChatting, setIsChatting] = useState('')
    let [chatFireLine, setChatFireLine] = useState(0)

    const toggleMap = () => {
        console.log('map changed');
        console.log(tilesDefiner);
        setIsCharacterInHome(prev => !prev)
    }

    const toggleChat = (personName) => {
        setIsChatting(personName)
    }

    return (
        <div
            className="world"
            onKeyDown={(e)=>{
                let helper = chatFireLine
                e.keyCode===32 && helper++
                setChatFireLine(helper)
                console.log(chatFireLine);
                console.log(e.keyCode);
            }}
        >
            <Map toggleChat={toggleChat} toggleMap={toggleMap} tiles={isCharacterInHome ? tilesDefiner.home : tilesDefiner.forest} />

          {isChatting && <Chat person="oak" chatFireLine={chatFireLine} />}


        </div>
    )
}
export default World