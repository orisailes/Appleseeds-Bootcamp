import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../utils/context/userContext'
import Map from '../utils/Map'
import '../../css/world.css'
const World = () => {
    const { user, setUser } = useContext(userContext)

    useEffect(() => {
        console.log(user)
    }, [])

    // const [map, setMap] = useState([])
    return (
        <div
            className="world"
        >
            <Map />
        </div>
    )
}
export default World