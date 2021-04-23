import React,{useState} from 'react'
import axios from 'axios'
import Button from './utils/Button'
import Input from './utils/Input'
import './css/delete.css'
const Delete = () => {

const [showInput,setShowInput] = useState(false)
const [inputId, setInputId] = useState('')
const [message,setMessage] = useState('')

const deleteAll = async () => {
    await axios.delete('/api/clients')
    setMessage('All users Deleted.')
}
const deleteById = () => {
    setShowInput((prev)=>!prev)
}
const handleSubmit = async() => {
    if(inputId.length){
        await axios.delete(`/api/clients/${inputId}`)
        setMessage('User Has Deleted.')
    }
}

return(
<>
    <div className="buttons-container">
        <Button text="Delete All" onClick={deleteAll}/>
        <Button text="Delete By ID" onClick={deleteById}/>
        {showInput && 
        <>
        <Input value={inputId} onChange={(e)=>setInputId(e.target.value)} placeholder="Insert id here"/> 
        <Button text="Submit" onClick={handleSubmit}/>
        </>}
    </div>
    <div className="message-container">
    {message.length>0 && <h2>{message}</h2>}
    </div>
    <div className="bg">
        <div className="bg-img"></div>
    </div>
    </>
)
} 

export default Delete