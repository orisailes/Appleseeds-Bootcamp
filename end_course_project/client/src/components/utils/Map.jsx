import React, { useState } from 'react'
import '../../css/map.css'
import Player from '../utils/Player'
import { SpriteSize, MapSize } from '../../utils/constants/constants'

const Map = () => {

    const [playerPosition, setPlayerPosition] = useState([0, 0])

    const handleKeyDown = (e) => {
        e.preventDefault()
        let direction =
            (e.keyCode === 37 || e.keyCode === 65) ?
                'WEST' //left
                :
                (e.keyCode === 38 || e.keyCode === 87) ?
                    'NORTH'
                    :
                    (e.keyCode === 39 || e.keyCode === 68) ?
                        'EAST' //right
                        :
                        (e.keyCode === 40 || e.keyCode === 83) ?
                            'SOUTH'
                            :
                            null
        if (direction === "WEST") {
            const newPosition = [playerPosition[0] - SpriteSize.width, playerPosition[1]]
            newPosition[0] < 0 ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)

        }
        if (direction === "NORTH") {
            const newPosition = [playerPosition[0], playerPosition[1] - SpriteSize.height]
            newPosition[1] < 0 ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)
        }
        if (direction === "EAST") {

            const newPosition = [playerPosition[0] + SpriteSize.width, playerPosition[1]]
            newPosition[0] >= MapSize.width ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)
            console.log('Mapsize.width: ', MapSize.width);
            console.log('newPosition:', newPosition)
        }
        if (direction === "SOUTH") {
            const newPosition = [playerPosition[0], playerPosition[1] + SpriteSize.height]
            newPosition[1] >= MapSize.height ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)
            console.log('Mapsize.height: ', MapSize.height);
            console.log('newPosition:', newPosition)
        }
    }
    return (
        <div
            tabIndex="0"
            onKeyDown={(e) => handleKeyDown(e)}
            className="map"
            style={{
                width: `${Math.floor((MapSize.width / window.innerWidth)*100)}vw`,//1536 || 1229 /// mapsize.width 910
                height: `${Math.floor((MapSize.height / window.innerHeight)*100)}vh`, //775 || 603 /// mapsize.heigt 510
            }}
        >
            <Player position={playerPosition} />
        </div>
    )
}

export default Map