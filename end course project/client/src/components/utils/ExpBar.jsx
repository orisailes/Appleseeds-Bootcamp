import React from 'react';


function ExpBar({ pokemon }) {
    
    return (
        <>
        <small>EXP.</small>
        <div className="exp-bar" >
            <div className="exp-progress" style={{width:`${Math.floor(pokemon.exp)}%`}}/>
        </div>
    </>
    )
}

export default ExpBar