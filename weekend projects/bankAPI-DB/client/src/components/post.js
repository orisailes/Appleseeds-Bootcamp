import React, { useState,useEffect } from 'react'
import Button from './utils/Button'
import { Link } from 'react-router-dom'
import './css/bg.css'
import axios from 'axios'

const Post = () => {

    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [passportInput, setPassportInput] = useState('')
    const [newClient, setNewClient] = useState([])

    const createUser = async () => {
        let result;
        if (nameInput && emailInput && passportInput) {
            const newUser = {
                "name": nameInput,
                "email": emailInput,
                "passport": passportInput
            }
            const newClient = await axios.post('/api/clients', newUser)
            setNewClient(newClient.data)
        }
    }

    useEffect(()=>{console.log(newClient);})

    return (
        <div className="bg">

            <div className="cards-container">
                <Link to="/"><Button text={"Home"} /></Link>
                <Button text={"Create User"} onClick={createUser} />
            </div>

            <form>
                <label>Name:</label>
                <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} type="text" placeholder="Insert name"></input>
                <label>Email:</label>
                <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} type="text" placeholder="Insert email"></input>
                <label>passport:</label>
                <input value={passportInput} onChange={(e) => setPassportInput(e.target.value)} type="text" placeholder="Insert passport"></input>
            </form>

            {Object.keys(newClient).length > 0 &&
                <div className="client-card">
                    <h4>Name: {newClient.name}</h4>
                    <p>Email: {newClient.email}</p>
                    <p>Passport: {newClient.passport}</p>
                    <p>ID: {newClient.passport}</p>
                    <p>Cash: 0</p>
                    <p>Credit: 0</p>
                </div>
            }

            <div className="bg-img"></div>
        </div>
    )
}

export default Post