import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import '../../css/map.css'
import Player from '../utils/Player'
import MapView from './MapView'
import { TileSize } from '../../utils/constants/constants'
import ForestSound from '../../sound/forest.mp3'
import BattleSound from '../../sound/battle.mp3'
const initialBattleSound = new Audio(BattleSound)
const forestSound = new Audio(ForestSound)

const Map = ({ tiles }) => {

    const [playerPosition, setPlayerPosition] = useState([0, 0]) // moving player in vh&vw
    const [playerArrayPosition, setPlayerArrayPosition] = useState([7, 19]) // moving player in matrix
    const [userMeetEnemy, setUserMeetEnemy] = useState(false)
    const [musicOff, setMusicOff] = useState(false)
    const soundRef = useRef(forestSound)
    const playerRef = useRef()
    const location = useHistory()

    useEffect(() => {

        forestSound.play()
        return () => {
            forestSound.pause()
            forestSound.currentTime = 0
        }
    }, [])
    //TODO: prevent trolling with arrow keys, handle enemy meeting!

    const wait = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const handleKeyDown = async (e) => {
        e.preventDefault()

        if (e.repeat) {
            await wait(75)
        }
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
        debugger
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

        switch (true) {
            case (tiles[helper[0]][helper[1]] < 0):
                return false
                case(!tiles[helper[0]][helper[1]]):
                return false
            case (tiles[helper[0]][helper[1]] === 1):
                //! handle enemy meeting
                if (Math.random() > 0.9) {
                    console.log("busted!!");
                    setUserMeetEnemy(true)
                    forestSound.pause()
                    forestSound.currentTime = 0
                    // initialBattleSound.play()
                    // // await wait(3000)
                    // initialBattleSound.pause()
                    // initialBattleSound.currentTime = 0
                    location.push('/battle')
                } else {
                    console.log("avoide from enemy");
                }
                setPlayerArrayPosition(helper) //  new position saved
                break;
            default:
                setPlayerArrayPosition(helper) // in case user make valid move, new position saved
                break;
        }
        return true
    }

    const toggleMusic = () => {
        musicOff ? forestSound.play() : forestSound.pause()
        setMusicOff(prev => !prev)
    }

    return (
        <>
            <div
                tabIndex="0"
                onKeyDown={
                    !userMeetEnemy ?
                        (e) => handleKeyDown(e)
                        :
                        null
                }
                className="map"
                style={{
                    height: "100vh",
                    width: "100vw",
                    top: -playerPosition[1]*3,
                    left: -playerPosition[0]*3,
                }}
            >
                {
                    userMeetEnemy && <div className="hider"></div>
                }
                <MapView tiles={tiles} />
                <Player forwardedRef={playerRef} position={playerPosition} />
            </div>
            <i
                className={`${musicOff ? "fas fa-volume-mute fa-lg" : "fas fa-volume-up fa-lg"}`}
                onClick={toggleMusic}
            >
            </i>
        </>
    )
}

export default Map