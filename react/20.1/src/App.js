import React, { useState } from 'react'
import DataFetch from './components/DataFetch'
function App() {
    const [isFetching, setIsFetching] = useState(false);


   
    return (
        <div>
            <button onClick={() => setIsFetching(!isFetching)}>Fetch Data</button>
            {isFetching && <DataFetch/>}
        </div>
    )

}

export default App;