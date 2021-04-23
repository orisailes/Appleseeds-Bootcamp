import React, { useState, useEffect } from 'react'
import Button from './utils/Button'
import Input from './utils/Input'
import { Link } from 'react-router-dom'
import './css/bg.css'
import './css/post.css'
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
    return (
        <>
            <div className="post-wrapper">
                <form>
                    <div className="form-field">
                        <label>Name:</label>
                        <Input onChange={(e) => setNameInput(e.target.value)} placeholder={"Insert Name Here"} value={nameInput} />
                    </div>
                    <div className="form-field">
                        <label>Email:</label>
                        <Input onChange={(e) => setEmailInput(e.target.value)} placeholder={"Insert Email Here"} value={emailInput} />
                    </div>
                    <div className="form-field">
                        <label>Passport:</label>
                        <Input onChange={(e) => setPassportInput(e.target.value)} placeholder={"Insert Passport Here"} value={passportInput} />
                    </div>
                </form>
                <div className={Object.keys(newClient).length > 0 ? "new-client-card" : ""}>
                    {Object.keys(newClient).length > 0 &&
                        <>
                            <h4>Name: {newClient.name}</h4>
                            <p>Email: {newClient.email}</p>
                            <p>Passport: {newClient.passport}</p>
                            <p>ID: {newClient.passport}</p>
                            <p>Cash: 0</p>
                            <p>Credit: 0</p>
                        </>
                    }
                </div>
                <div className="buttons-container">
                    <Link to="/"><Button text={"Home"} /></Link>
                    <Button text={"Create User"} onClick={createUser} />
                </div>
            </div>
            <div className="bg">
                <div className="bg-img"></div>
            </div>
        </>
    )
}

export default Post