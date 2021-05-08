import React, { useContext } from 'react'
import { userContext } from '../../utils/context/userContext'
import Map from '../utils/Map'
import tilesDefiner from './maps/index'
import '../../css/world.css'

const World = () => {
    // const { user, setUser } = useContext(userContext)



    return (
        <div
            className="world"
        >
            <Map tiles={tilesDefiner.one} />
        </div>
    )
}
export default World