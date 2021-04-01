import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './css/compare.css'


// get the term and company name from table component!!

function Compare() {

    const whatMonth = (num) => {
        if(num<10){
            num=num.slice(1)
        }
        const months =  ["January", "February", "March",  "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
        return months[num-1];
    }

    // useEffect(() => {
    //     let rawData = [];
    //     const dataFetch = async (term) => {

    //         //! TODO : search the wanted product using filter, then push it to rawData

    //         let isNextPage = true;
    //         let page = 0;
    //         while (isNextPage) {
    //             let data = await axios.get(
    //                 //2019 !!
    //                 `https://data.gov.il/api/3/action/datastore_search?q=${term}&resource_id=469633a2-5538-4f2c-a0ed-6ed5bc2f74c6&offset=${page}00`
    //             );
    //             data = data.data.result.records;
    //             rawData.push(data)
    //             if (data.length < 100) {
    //                 isNextPage = false;
    //             }
    //             page++;
    //         }

    //         //* flatting all the data into one massive array
    //         rawData = rawData.flat();
    //         console.log(rawData) 

    //         //* shrink the array to the relevant info
    //         const lastYearData = rawData.map( item => {return (
    //             {
    //                 id: item.FUND_ID,
    //                 manageBy: item.MANAGING_CORPORATION,
    //                 month: whatMonth(REPORT_PERIOD.slice(4)),
    //                 monthoriginal: REPORT_PERIOD.slice(4),
    //                 profit: item.MONTHLY_YIELD,
    //                 name: item.FUND_NAME
    //             }
    //         )})
            
        
    //     }
    //     //!only for my tests
    //     dataFetch("מגדל");
    //     // dataFetch("הראל");
    //     // dataFetch("אלטשולר");
    //     // dataFetch("מיטב");
    //     // dataFetch("אנליסט");
    // }, [])


    return (<div className="compare"><h1>compare</h1></div>)
}

export default Compare