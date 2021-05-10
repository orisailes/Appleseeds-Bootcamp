import React from 'react'
import '../../css/player.css'
import WalkSprites from '../../img/character/movement/maleSprites.png'
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
                backgroundPosition: `${SpriteSize.width*0}px ${50*0}px`, //  X Y
                height: `${SpriteSize.height}px`,
                width: `${SpriteSize.width}px`,

            }}
            ref={forwardedRef}
            className="player">

        </div>
    )
}

export default Player