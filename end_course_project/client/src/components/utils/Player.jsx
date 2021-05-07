import React,{useState} from 'react'
import '../../css/player.css'
import WalkSprites from '../../img/character/movement/maleBigger.png'
import { SpriteSize,MapSize } from '../../utils/constants/constants'

const Player = ({ position , initialSize}) => {

    const [y, setY] = useState(window.innerHeight/2-32)
    const [x, setX] = useState(window.innerWidth/2-32)

    

    return (
        <div
            style={{
                top: y+position[1],
                left: x+position[0],
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