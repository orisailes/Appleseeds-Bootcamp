import React from 'react';


function HPBar({ hp, maxHp }) {
    return (
        <>
            <progress value={hp} max={maxHp} className="hp-bar">
            </progress>
            <p>{hp}/{maxHp}</p>
        </>
    )
}

export default HPBar