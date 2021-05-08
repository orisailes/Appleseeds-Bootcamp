import React, { useState, useRef } from 'react'
import '../../css/map.css'
import Player from '../utils/Player'
import MapView from './MapView'
import { TileSize } from '../../utils/constants/constants'

const Map = ({ tiles }) => {

    const [playerPosition, setPlayerPosition] = useState([0, 0]) // moving player in vh&vw
    const [playerArrayPosition, setPlayerArrayPosition] = useState([7, 19]) // moving player in matrix
    const playerRef = useRef()


    //TODO: prevent trolling with arrow keys, handle enemy meeting!


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
            const isValid = changePlayerArrayPositionifValid(direction)
            if (isValid) {
                const newPosition = [playerPosition[0] - TileSize.width, playerPosition[1]]
                newPosition[0] < -48 ?
                    setPlayerPosition(playerPosition)
                    :
                    setPlayerPosition(newPosition)
            }
        }

        if (direction === "NORTH") {
            const isValid = changePlayerArrayPositionifValid(direction)
            if (isValid) {
                const newPosition = [playerPosition[0], playerPosition[1] - TileSize.height]
                newPosition[1] < -40 ?
                    setPlayerPosition(playerPosition)
                    :
                    setPlayerPosition(newPosition)
            }
        }

        if (direction === "EAST") {
            const isValid = changePlayerArrayPositionifValid(direction)
            if (isValid) {
                const newPosition = [playerPosition[0] + TileSize.width, playerPosition[1]]
                newPosition[0] >= 45 ?
                    setPlayerPosition(playerPosition)
                    :
                    setPlayerPosition(newPosition)
            }
        }

        if (direction === "SOUTH") {
            const isValid = changePlayerArrayPositionifValid(direction)
            if (isValid) {
                const newPosition = [playerPosition[0], playerPosition[1] + TileSize.height]
                newPosition[1] >= 40 ?
                    setPlayerPosition(playerPosition)
                    :
                    setPlayerPosition(newPosition)
            }
        }

    }

    const changePlayerArrayPositionifValid = (direction) => {
        let helper = [...playerArrayPosition]
        direction === "SOUTH" ? helper[0]++ :
            direction === "NORTH" ? helper[0]-- :
                direction === "WEST" ? helper[1]-- :
                    direction === "EAST" && helper[1]++
        switch (tiles[helper[0]][helper[1]]) {
            case 4:
                return false
            case 7:
                return false
            case 1:
                return false
            case (-1):
                return false
            case 2:
                return false
            case (-2):
                return false
            case 6:
                //! handle enemy meeting
                break;
            default:
                setPlayerArrayPosition(helper) // in case user make valid move, new position saved
                break;
        }
        return true
    }



    console.log(playerPosition);
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
            <MapView tiles={tiles} />
            <Player forwardedRef={playerRef} position={playerPosition} />
        </div>
    )
}

export default Map