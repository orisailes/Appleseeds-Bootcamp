import React, { useState } from 'react'
import Button from './utils/Button'
import Input from './utils/Input'
import './css/update.css'
import './css/display-area.css'

const Update = () => {
    const [idInput, setIdInput] = useState('');
    const [idToDeliverMoneyInput, setIdToDeliverMoney] = useState('');
    const [amount, setAmount] = useState('');
    const [userDidPress, setUserDidPress] = useState(false);
    const [isTransferMoney, setIsTransferMoney] = useState(false);
    const [clientsToDisplay,setClientToDisplay] = useState([])

    const handleTransfer = () => {
        (!userDidPress && setUserDidPress(true))
        setIsTransferMoney(true)
    }

    const handleWithdraw = () => {
        (!userDidPress && setUserDidPress(true))
        setIsTransferMoney(false)

    }

    const handleAddCash = () => {
        (!userDidPress && setUserDidPress(true))
        setIsTransferMoney(false)

    }

    const handleChangeCredit = () => {
        (!userDidPress && setUserDidPress(true))
        setIsTransferMoney(false)

    }
    return (
        <>
            <div className="update-wrapper">
                <div className="buttons-container">
                    <Button onClick={handleTransfer} text="Transfer Money" />
                    <Button onClick={handleWithdraw} text="Withdraw Money" />
                    <Button onClick={handleAddCash} text="Add Cash" />
                    <Button onClick={handleChangeCredit} text="Change Credit" />
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
                <div className="display-area">
                    
                </div>
                <div className="bg">
                    <div className="bg-img"></div>
                </div>
            </div>
        </>
    )
}

export default Update