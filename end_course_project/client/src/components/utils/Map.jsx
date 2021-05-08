import React, { useState, useEffect } from 'react'
import '../../css/map.css'
import Player from '../utils/Player'
import MapTile from './MapTile'
import { TileSize } from '../../utils/constants/constants'

const Map = ({ tiles }) => {

const [playerPosition, setPlayerPosition] = useState([0, 0])

    const handleKeyDown = (e) => {
        e.preventDefault()
        debugger
        console.log(e.currentTarget);
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
            const newPosition = [playerPosition[0] - TileSize.width, playerPosition[1]]
            newPosition[0] < -48 ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)
            console.log('window.innerWidth: ', window.innerWidth);
            console.log('newPosition:', newPosition)
            console.log('TileSize.width:', TileSize.width)

        }
        if (direction === "NORTH") {
            console.log('tiles:', tiles)
            const newPosition = [playerPosition[0], playerPosition[1] - TileSize.height]
            newPosition[1] < -40 ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)
            console.log('window.innerHeight: ', window.innerHeight);
            console.log('newPosition:', newPosition)
            console.log('TileSize.height:', TileSize.height)
        }
        if (direction === "EAST") {

            const newPosition = [playerPosition[0] + TileSize.width, playerPosition[1]]
            newPosition[0] >= 45 ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)
            console.log('window.innerWidth: ', window.innerWidth);
            console.log('newPosition:', newPosition)
            console.log('TileSize.width:', TileSize.width)
        }
        if (direction === "SOUTH") {
            const newPosition = [playerPosition[0], playerPosition[1] + TileSize.height]
            newPosition[1] >= 40 ?
                setPlayerPosition(playerPosition)
                :
                setPlayerPosition(newPosition)
            console.log('window.innerHeight: ', window.innerHeight);
            console.log('newPosition:', newPosition)
            console.log('TileSize.height:', TileSize.height)
        }
    }

    return (
        <div
            tabIndex="0"
            onKeyDown={(e) => handleKeyDown(e)}
            className="map"
            style={{
                height: "100vh",
                width: "100vw",
                top: -playerPosition[1],
                left: -playerPosition[0],
            }}

        >
            {tiles.map(row => row.map(tile => <MapTile tile={tile}/>))}
            <Player position={playerPosition} />
        </div>
    )
}

export default Map