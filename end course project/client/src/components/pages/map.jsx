import React, { useContext } from 'react'
import { userContext } from '../../utils/context/userContext'

function Map() {
    const { user, setUser } = useContext(userContext)
    return (
        <div>{JSON.stringify(user)}</div>
    )
}
export default Map