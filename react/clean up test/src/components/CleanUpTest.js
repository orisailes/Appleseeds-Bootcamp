import React, { useEffect,useState } from 'react'

export default function CleanUpTest() {

    const [count, setCount] = useState(0)

    useEffect(()=>{

        console.log(`first initialize`)

        return(()=>{
            alert(`i am clean up`)
        })

    },[])

    return (
        <div>
            <h1>i am child comp</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum et similique reiciendis quam cum vel necessitatibus rem, culpa iusto sunt fugiat quae. Necessitatibus, libero! Sit atque alias culpa ex? Voluptatum quibusdam accusamus voluptatem, nulla nisi maxime iure sed aperiam, animi officia quaerat cumque voluptate dolore tenetur, quas delectus vitae.</p>
            <h4>{count}</h4>
            <button onClick={()=>setCount(prev=>prev+1)}> Click to count </button>
        </div>
    )
}
