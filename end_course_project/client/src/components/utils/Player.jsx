import React from 'react'
import '../../css/player.css'
import WalkSprites from '../../img/character/movement/maleBigger.png'
import { SpriteSize } from '../../utils/constants/constants'

const Player = ({ position,forwardedRef }) => {


    const y = 50
    const x = 50


    return (
        <div
            style={{
                top: `calc(${x}vh + ${position[1]}vh)`,
                left: `calc(${y}vw + ${position[0]}vw)`,
                backgroundImage: `url(${WalkSprites})`,
                backgroundPosition: '0 0', //27px 50px for step ??
                height: `${SpriteSize.height}px`,
                width: `${SpriteSize.width}px`,

            }}
            ref={forwardedRef}
            className="player">

        </div>
    )
}

export default Player