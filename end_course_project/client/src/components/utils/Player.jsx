import React from 'react'
import '../../css/player.css'
import WalkSprites from '../../img/character/movement/maleBigger.png'
import { SpriteSize } from '../../utils/constants/constants'

const Player = ({ position }) => {

    return (
        <div
            style={{
                top: position[1],
                left: position[0],
                backgroundImage: `url(${WalkSprites})`,
                backgroundPosition: '0 0', //27px 50px for step ??
                height: `${SpriteSize.height}px`,
                width: `${SpriteSize.width}px`,
              
            }}
            className="player">

        </div>
    )
}

export default Player