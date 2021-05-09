import React from 'react'
import '../../css/chat.css'
const Chat = ({ person, chatFireLine }) => {


    const chatInfo = {
        oak: ["Hey folk! Looking for new pokemon?", "There will no discounts for you!"],
        nurse: ["Hey There! Need to recover your pokemons?", "Oh My God! They almost die!", "Here, this will help"]
    }
console.log('here!!@!@!');
debugger
    return (
        <>
            {
                chatInfo[person].length >= chatFireLine
                &&

                <div
                    className="chat-box">
                    <p>
                        {
                            chatInfo[person][chatFireLine]
                        }
                    </p>
                </div>
            }
        </>
    )

}

export default Chat