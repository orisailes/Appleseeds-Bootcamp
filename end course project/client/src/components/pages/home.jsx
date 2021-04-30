import React, { useContext } from 'react'
import { userContext } from '../../utils/context/userContext'

const Home = () => {
    const {user,setUser} = useContext(userContext)

    return (
        <div>
            Home page
            <br></br>
            {JSON.stringify(user)}
        </div>
    )
}

export default Home