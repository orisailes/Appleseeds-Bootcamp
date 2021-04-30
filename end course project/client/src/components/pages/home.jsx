import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { userContext } from '../../utils/context/userContext'
import {motion} from 'framer-motion'

const Home = () => {
    const {user,setUser} = useContext(userContext)

    return (
        <motion.div
        exit={{opacity:0}}
        animate={{opacity:1}}
        initial={{opacity:0}}
        transition={{duration:1}}
        >
            <Link to="/battle">to battle</Link>
            Home page
            <br></br>
            {JSON.stringify(user)}
        </motion.div>
    )
}

export default Home