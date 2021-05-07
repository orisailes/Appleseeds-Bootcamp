import React, { useState, useEffect } from 'react'
import '../../css/map.css'
import Player from '../utils/Player'
import { SpriteSize, MapSize } from '../../utils/constants/constants'

const Map = () => {

    const [playerPosition, setPlayerPosition] = useState([0, 0])
    const [initialSize, setInitialSize] = useState({})
    useEffect(() => {
        // debugger
        const width =
            MapSize.width < window.innerWidth ?
                MapSize.width / window.innerWidth
                :
                window.innerWidth / MapSize.width


        const height =
            MapSize.height < window.innerHeight ?
                MapSize.height / window.innerHeight
                :
                window.innerHeight / MapSize.height

        const helper = { width: width * 100, height: height * 100 }
        console.log(helper);
        setInitialSize(helper)
    }, [])

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
            newPosition[0] < -window.innerWidth/2+32 ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)

        }
        if (direction === "NORTH") {
            const newPosition = [playerPosition[0], playerPosition[1] - SpriteSize.height]
            newPosition[1] < -window.innerHeight/2+32 ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)
        }
        if (direction === "EAST") {

            const newPosition = [playerPosition[0] + SpriteSize.width, playerPosition[1]]
            newPosition[0] >= window.innerWidth/2 ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)
            console.log('window.innerWidth: ', window.innerWidth);
            console.log('newPosition:', newPosition)
        }
        if (direction === "SOUTH") {
            const newPosition = [playerPosition[0], playerPosition[1] + SpriteSize.height]
            newPosition[1] >= window.innerHeight/2 ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)
            console.log('window.innerHeight: ', window.innerHeight);
            console.log('newPosition:', newPosition)
        }
    }
    return (
        <div
            tabIndex="0"
            onKeyDown={(e) => handleKeyDown(e)}
            className="map"
            style={{
                // width: `${initialSize.width}vw`,
                // height: `${initialSize.height}vh`,
                height:"100vh",
                width:"100vw",
                top: -playerPosition[1],
                left: -playerPosition[0],
            }}

        >
            <Player initialSize={initialSize} position={playerPosition} />
        </div>
    )
}

export default Map