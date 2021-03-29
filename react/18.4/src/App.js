import React, { Fragment, useState } from 'react'

import './normalize.css'

function App() {
    const data = ["one", "two", "three", "four", "five"];
    let myData = [];

    for (let item of data) {
        myData.push({ text: item, isCheck: false })
    }

    let [myList, setList] = useState(myData);

    const handleCheck = (e) => {
        const newList = [...myList];
        const id = e.target.parentElement.id;
        newList[id].isCheck = !newList[id].isCheck;
        setList(newList);
    }

    const handleDelete = () => {
        const newData = [];
        for (let item of myList) {
            item.isCheck === false && newData.push(item)
        }
        setList(newData)
    }

    const handleReset = () => {
        const newData = [];
        for (let item of data) {
            newData.push({ text: item, isCheck: false })
        }
        setList(newData);
    }

    return (
        <div>
            <ul>
                <button onClick={handleDelete}>delete</button>
                <button onClick={handleReset}>reset</button>
                {myList.map((item, index) => {
                    return (
                        <li id={index} key={item.text}>
                            <input onChange={handleCheck} checked={myList[index].isCheck} type="checkbox" checked={item.isCheck} /> <span>{item.text}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default App;