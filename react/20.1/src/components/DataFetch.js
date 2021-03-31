import React, { useState, useEffect } from 'react'
import axios from 'axios'

function FetchData() {
    const [data, setData] = useState([]);
    useEffect(() => {
        let CancelToken = axios.CancelToken;
        const source = CancelToken.source();
            const fetchData = async () => {
                    const response = await axios.get('https://randomuser.me/api/',{
                        cancelToken:source.token
                    });
                    setData(response.data.results);
            }
            fetchData();
            return()=>{
                source.cancel();
            }
        }, [])
    return (
        <div>
            { data.map((item) => { return (<div key={item.gender}>{JSON.stringify(item)}</div>) })}
        </div>
    )
}

export default FetchData