import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CompareCards from './CompareCards'
import { Link } from 'react-router-dom'
import './css/compare.css'
import MainImg from '../img/navImg.png'


// get the term and company name from table component!!

function Compare(props) {
    debugger
    let products = null;
    const dataGet = props.location.products; // get from table
    const dataFromLocalStorage = localStorage.getItem('products')
    if (dataGet) {
        products = dataGet;
        localStorage.clear();
        localStorage.setItem('products', JSON.stringify(dataGet));
    }
    if (dataGet && !localStorage.products) {
        // if there is new data from table
        localStorage.setItem('products', JSON.stringify(dataGet));
    }
    if(!dataGet && localStorage.products){
        products = dataFromLocalStorage;
    }
    useEffect(() => {
        // debugger;
        // try {
        //     let data = window.localStorage.getItem('products');
        //     data = JSON.parse(data);
        //     products = data;
        // } catch (error) {
        //     console.log(error)
        // }
        const dataFetch = async (term) => {
            // geting data from last year.
            let rawData = [];

        }
    }, [])

    // const whatMonth = (num) => {
    //     if(num<10){
    //         num=num.slice(1)
    //     }
    //     const months =  ["January", "February", "March",  "April", "May", "June",  "July", "August", "September", "October", "November", "December"];
    //     return months[num-1];
    // }

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
    // }, [])

    console.log(products)
    console.log(dataGet)
    console.log(localStorage)
    return (
        <>
            <div className="compare-page">
                {products == null ?
                    <div className="oops-div">
                        <Link to="/"><img src={MainImg} alt="Sailes Compare" /></Link>
                        <div className="text">
                            <h2 className="landing-header">Looks like you need to choose products to compare!</h2>
                            <h3 className="landing-header">Go back to Table and pick two products.</h3>
                            <div className="compare-btn-wrapper">
                                <Link to="/table"><button className="btn">Table page</button></Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="product-cards">
                        <CompareCards />
                        <CompareCards />
                    </div>
                }
            </div>
        </>
    )
}

export default Compare