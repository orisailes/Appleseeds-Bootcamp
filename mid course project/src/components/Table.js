import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'
import axios from 'axios'
import './css/table.css'

function Table() {

    const [myData, setData] = useState({
        הראל: [],
        מגדל: [],
        מיטב: [],
        אנליסט: [],
        אלטשולר: [],
    })

    //TODO: cancel duplicate selection, positon absolute to the drop down, double check the chosen companies, handle all selection.

    const [chosenCompanies, setCompanies] = useState([]);
    const [isAll, setIsAll] = useState(false)

    const getCompanyByDropDown = (company) => {

        if (isAll && company !== 'הכל') {
            // if user dont want 'all'
            setIsAll(false)
            const helper = [...company]
            setCompanies(helper)
        }
        if (!isAll) {
            console.log(company);
            const userChose = [...chosenCompanies];
            userChose.push(' ,' + company);
            setCompanies(userChose);
        }
        if (company === 'הכל') {
            setIsAll(true);
            setCompanies(company);
        }
    }

    useEffect(() => {
        if (chosenCompanies.length && chosenCompanies !== 'הכל') {
            makeTable(chosenCompanies);
        }
        else if (chosenCompanies === 'הכל') {
            makeTable(chosenCompanies);
        } else {
            console.log(`first initialize`)
        }
    }, [chosenCompanies])
    
    
    const makeTable = async (companies) => {
        console.log(myData)
        if (!isAll) {
            // massage the state data
            const dataToSearch = chosenCompanies.join('').split(/\s*,\s*/);
            dataToSearch[0] === '' && dataToSearch.splice(0,1);
            let isNextPaage = true;
            let page = 0;
            console.log(dataToSearch)
            for (let company of dataToSearch) {
                let rawData = [];
                while (isNextPaage) {
                    console.log(company)
                    let data = await axios.get(
                        //! data of 2021 
                        `https://data.gov.il/api/3/action/datastore_search?q=${company}&resource_id=a30dcbea-a1d2-482c-ae29-8f781f5025fb&offset=${page}00`
                        )
                    data = data.data.result.records;
                    console.log(data)
                    // rawData.push(data);
                    if(data.length<100){
                    }
                    isNextPaage=false;
                    page++;
                }
                rawData.flat();
                const temp = {...myData};
                temp[company]=rawData;
                console.log(company)
                console.log(temp)
                // temp[company]=rawData;
                // setData(temp);
                console.log(myData)
            }
        }
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
    //         // const lastYearData = rawData.map( item => {return (
    //         //     {
    //         //         id: item.FUND_ID,
    //         //         manageBy: item.MANAGING_CORPORATION,
    //         //         month: whatMonth(REPORT_PERIOD.slice(4)),
    //         //         monthoriginal: REPORT_PERIOD.slice(4),
    //         //         profit: item.MONTHLY_YIELD,
    //         //         name: item.FUND_NAME
    //         //     }
    //         // )})

    //     }
    //     //!only for my tests
    //     dataFetch("מגדל");
    //     // dataFetch("הראל");
    //     // dataFetch("אלטשולר");
    //     // dataFetch("מיטב");
    //     // dataFetch("אנליסט");
    // }, [])

    return (
        <div className="table">
            <div className="table-content">
                <div className="inner-table-content">
                    <DropDown getCompanyByDropDown={getCompanyByDropDown} title="Choose a company to display" keys={Object.keys(myData)} />
                    <div className="chosen-companies">
                        <p className="company-display-p">Company display :</p>
                        <p>{chosenCompanies}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table