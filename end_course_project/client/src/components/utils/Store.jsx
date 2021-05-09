import React from 'react'
import '../../css/store.css'
const Store = ({closeStore}) => {
    console.log(closeStore);
    return (
        <div className="store-wrapper">
            <button className="exit-store-btn" onClick={()=>closeStore()}>X</button>
        </div>
    )
}

export default Store