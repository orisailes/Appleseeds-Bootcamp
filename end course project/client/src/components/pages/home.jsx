import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { userContext } from '../../utils/context/userContext'

const Home = () => {
    const {user,setUser} = useContext(userContext)

    return (
        <div>
            <Link to="/battle">to battle</Link>
            Home page
            <br></br>
            {JSON.stringify(user)}
        </div>
    )
}

export default Home