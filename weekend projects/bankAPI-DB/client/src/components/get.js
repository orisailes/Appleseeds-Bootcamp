import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from './utils/Button'
import './css/display-area.css'
import './css/bg.css'
import './css/get.css'
import './css/client-card.css'

const Get = () => {
    const [clients, setClients] = useState([])

    const fetchUsers = async () => {
        const data = await axios.get('/api/clients')
        console.log(data);
        let clientAndAccounts = data.data
        for (let client of clientAndAccounts) {
            const account = await axios.get(`/api/accounts/${client._id}`)
            client.cash = account.data.cash;
            client.credit = account.data.credit;
            console.log(account.data);
        }
        console.log(data.data);
        setClients(data.data);
    }
    return (
        <>
            <div className="read-wrapper">
                <div className="buttons-container">
                    <Button text={"Display Users"} onClick={fetchUsers} />
                    <Link to="/"><Button text="Home" /></Link>
                </div>
                <div className="display-area">
                    {clients && clients.map((cli) => {
                        return (
                            <div key={cli.email} className="client-card">
                                <h4>Name: {cli.name}</h4>
                                <p>Email: {cli.email}</p>
                                <p>Passport: {cli.passport}</p>
                                <p>ID: {cli.passport}</p>
                                <p>Cash: {cli.cash}</p>
                                <p>Credit: {cli.credit}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="bg">
                    <div className="bg-img"></div>
                </div>
            </div>
        </>
    )
}

export default Get