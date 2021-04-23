import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './utils/Button'
import Input from './utils/Input'
import './css/update.css'
import './css/display-area.css'
import axios from 'axios'

const Update = () => {
    const [idInput, setIdInput] = useState('')
    const [idToDeliverMoneyInput, setIdToDeliverMoney] = useState('')
    const [amount, setAmount] = useState('')
    const [buildSubmit, setBuildSubmit] = useState('')
    const [currentPath, setCurrentPath] = useState('')
    const [userDidPress, setUserDidPress] = useState(false)
    const [isTransferMoney, setIsTransferMoney] = useState(false)
    const [clientToDisplay, setClientToDisplay] = useState({})

    const paths = {
        transfer: '/api/accounts/transfer',
        withdraw: '/api/accounts/withdraw',
        despositCash: '/api/accounts/desposit/cash',
        changeCredit: '/api/accounts/desposit/credit'
    }

    //6082c28756e6f93560ed1d1b
    //6082ce03eddd0a2afc96f278

    const handleTransfer = async (e) => {
        (!userDidPress && setUserDidPress(true))
        setIsTransferMoney(true)
        buildSubmitBtn(e.target.innerText, e.target.id)
    }

    const handleWithdraw = async (e) => {
        (!userDidPress && setUserDidPress(true))
        setIsTransferMoney(false)
        buildSubmitBtn(e.target.innerText, e.target.id)
    }

    const handleAddCash = async (e) => {
        (!userDidPress && setUserDidPress(true))
        setIsTransferMoney(false)
        buildSubmitBtn(e.target.innerText, e.target.id)
    }

    const handleChangeCredit = async (e) => {
        (!userDidPress && setUserDidPress(true))
        setIsTransferMoney(false)
        buildSubmitBtn(e.target.innerText, e.target.id)
    }

    const buildSubmitBtn = (action, id) => {
        setBuildSubmit(action)
        setCurrentPath(id) // save path in state
    }

    const handleSubmit = async () => {
        let url;
        //! validation needed
        switch (currentPath) {
            case 'transfer':
                url = `${paths[currentPath]}/?from=${idInput}&to=${idToDeliverMoneyInput}&amount=${amount}`
                console.log(url);
                break;
            case 'withdraw':
                url = `${paths[currentPath]}/${idInput}?amount=${amount}`
                await axios.put(url)
                fetchUser(idInput)
                break;
            case 'despositCash':
                url = `${paths[currentPath]}/${idInput}?amount=${amount}`
                await axios.put(url)
                fetchUser(idInput)
                break;
            case 'changeCredit':
                url = `${paths[currentPath]}/${idInput}?amount=${amount}`
                await axios.put(url)
                fetchUser(idInput)
                break;

            default:
                break;
        }
    }

    const fetchUser = async (id) => {
        const user = await axios.get(`api/clients/${id}`)
        const account = await axios.get(`/api/accounts/${user.data._id}`)
        console.log(account);
        setClientToDisplay({ ...user.data, credit: account.data.credit, cash: account.data.cash })
    }

    return (
        <>
            <div className="update-wrapper">
                <div className="buttons-container">
                    <Button id="transfer" onClick={(e) => handleTransfer(e)} text="Transfer Money" />
                    <Button id="withdraw" onClick={(e) => handleWithdraw(e)} text="Withdraw Money" />
                    <Button id="despositCash" onClick={(e) => handleAddCash(e)} text="Add Cash" />
                    <Button id="changeCredit" onClick={(e) => handleChangeCredit(e)} text="Change Credit" />
                </div>
                <div className="inputs-container">
                    {userDidPress ?
                        isTransferMoney ?
                            <>
                                <label>From: </label>
                                <Input value={idInput} placeholder="Insert from id here" onChange={(e) => setIdInput(e.target.value)} />
                                <label>To: </label>
                                <Input value={idToDeliverMoneyInput} placeholder="Insert to id id here" onChange={(e) => setIdToDeliverMoney(e.target.value)} />
                                <label>Amount: </label>
                                <Input value={amount} placeholder="Insert amount" onChange={(e) => setAmount(e.target.value)} />
                            </>
                            :
                            <>
                                <label>ID: </label>
                                <Input value={idInput} placeholder="Insert id here" onChange={(e) => setIdInput(e.target.value)} />
                                <label>Amount: </label>
                                <Input value={amount} placeholder="Insert amount" onChange={(e) => setAmount(e.target.value)} />
                            </>
                        : null
                    }
                </div>
                {buildSubmit.length > 0 ? <Button onClick={handleSubmit} text={buildSubmit} /> : null}
                <Link to="/"><Button text="Home" /></Link>
                <div className="display-area">
                    {Object.keys(clientToDisplay).length > 0 ?
                        <>
                            <div key={clientToDisplay.email} className="client-card">
                                <h4>Name: {clientToDisplay.name}</h4>
                                <p>Email: {clientToDisplay.email}</p>
                                <p>Passport: {clientToDisplay.passport}</p>
                                <p>ID: {clientToDisplay.passport}</p>
                                <p>Cash: {clientToDisplay.cash}</p>
                                <p>Credit: {clientToDisplay.credit}</p>
                            </div>
                        </>
                        : null
                    }
                </div>
                <div className="bg">
                    <div className="bg-img"></div>
                </div>
            </div>
        </>
    )
}

export default Update