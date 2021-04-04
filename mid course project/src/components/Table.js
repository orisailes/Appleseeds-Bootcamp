import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'
import ProductCard from './ProductCard'
import axios from 'axios'
import './css/table.css'
import UseAnimations from "react-useanimations";
import heart from 'react-useanimations/lib/heart'
import searchToX from 'react-useanimations/lib/searchToX'
import loading from 'react-useanimations/lib/loading'
import הראל from '../img/הראל.png'
import אנליסט from '../img/אנליסט.png'
import מגדל from '../img/מגדל.png'
import אלטשולר from '../img/אלטשולר.png'
import מיטב from '../img/מיטב.png'


function Table() {

    //TODO: cancel duplicate selection, make sort functions, handle options clicks
    const [myData, setData] = useState({
        הראל: [],
        מגדל: [],
        מיטב: [],
        אנליסט: [],
        אלטשולר: [],
    })
    const [chosenCompanies, setCompanies] = useState([]);
    const [isAll, setIsAll] = useState(false);
    const [isUserSelect, setisUserSelect] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [productsToCompare, setProductsToCompare] = useState([])

    let thisMonth = new Date();
    thisMonth = thisMonth.getMonth() - 1;

    const getCompanyByDropDown = (company) => {

        if (isAll && company !== 'הכל') {
            // if user dont want 'all'
            setIsAll(false)
            const helper = [...company]
            setCompanies(helper)
        }
        if (!isAll) {
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
        // make the fetch function not to run at first time
        if (chosenCompanies.length) {
            makeTableData(chosenCompanies);
        } else {
            console.log(`first initialize`)
        }
    }, [chosenCompanies])


    const makeTableData = async (companies) => {
        setShowSpinner(true);
        let dataToSearch;
        // massage the state data
        if (!isAll) {
            dataToSearch = chosenCompanies.join('').split(/\s*,\s*/);
            dataToSearch[0] === '' && dataToSearch.splice(0, 1);
        } else if (isAll) {
            dataToSearch = Object.keys(myData);
        }
        for (let company of dataToSearch) {
            let rawData = [];
            let page = 0;
            let isNextPage = true;

            while (isNextPage) {
                let data = await axios.get(
                    //! data of 2021 
                    `https://data.gov.il/api/3/action/datastore_search?q=${company}&resource_id=a30dcbea-a1d2-482c-ae29-8f781f5025fb&offset=${page}00`
                )
                data = data.data.result.records;
                rawData.push(...data);
                if (data.length < 100) {
                    isNextPage = false;
                }
                page++;
            }
            const relevantData = [];
            debugger;
            //* change the raw data and map it to only neww data
            rawData.forEach((item) => {
                let itemReportMonth = item.REPORT_PERIOD.split('').slice(4);
                if (itemReportMonth.join('') < 10) {
                    itemReportMonth = Number(itemReportMonth[1])
                }
                if (itemReportMonth === thisMonth && item.TOTAL_ASSETS>0) {
                    relevantData.push(
                        {
                            name: item.FUND_NAME,
                            avgAnnnualManagmentFee: item.AVG_ANNUAL_MANAGEMENT_FEE,
                            avgAnnualYield3Years: item.AVG_ANNUAL_YIELD_TRAILING_3YRS,
                            avgAnnualYield5Years: item.AVG_ANNUAL_YIELD_TRAILING_5YRS,
                            controlledBy: item.CONTROLLING_CORPORATION,
                            forgeinCurrencyExposure: item.FOREIGN_CURRENCY_EXPOSURE,
                            forgeinExposure: item.FOREIGN_EXPOSURE,
                            id: item.FUND_ID,
                            inceptionAt: item.INCEPTION_DATE,
                            manageBy: item.MANAGING_CORPORATION,
                            thisMonthYield: item.MONTHLY_YIELD,
                            stockExposure: item.STOCK_MARKET_EXPOSURE,
                            target: item.TARGET_POPULATION,
                            totalAssets: item.TOTAL_ASSETS,
                            yearToDateYield: item.YEAR_TO_DATE_YIELD,
                            past3YearsYield: item.YIELD_TRAILING_3_YRS,
                            past5YearsYield: item.YIELD_TRAILING_5_YRS,
                            desposits: item.DEPOSITS,
                            withdrawls: item.WITHDRAWLS,
                            thisMonthDesposits:item.NET_MONTHLY_DEPOSITS,
                            standardDeviation:item.STANDARD_DEVIATION,
                            alpha:item.ALPHA,
                            sharpeRatio:item.SHARPE_RATIO,

                        }

                    )
                }
            })
            let temp = myData;
            if (!isAll) {
                temp = { ...myData };
            }
            temp[company] = relevantData;
            setData(temp);
        }
        setisUserSelect(true);
        setShowSpinner(false);
    }

    const handleOptionClick = (id, company, action) => {
        const found = myData[company].filter(item => item.id === id);
        if (action === 'compare') {
            let temp;
            //* validation and delete if double click.
            switch (productsToCompare.length) {
                case 0:
                    found.push(company)
                    temp = [...productsToCompare, found];
                    temp.length < 3 && setProductsToCompare(temp);
                    break;
                case 1:
                    if (productsToCompare[0][0].id !== id) {
                        found.push(company)
                        temp = [...productsToCompare, found];
                        temp.length < 3 && setProductsToCompare(temp);
                    } else if (productsToCompare[0][0].id === id) {
                        setProductsToCompare([]);
                    }
                    break;
                case 2:
                    temp = productsToCompare;
                    if (temp[1][0].id === id) {
                        temp = [...temp[0]];
                        setProductsToCompare([temp]);
                        break;
                    }
                    if (temp[0][0].id === id) {
                        temp = [...temp[1]];

                        setProductsToCompare([temp]);
                        break;
                    }
                    break;
                default:
                    break;
            }
        } else if (action === 'save') {
            console.log(`handle save pleaseeeeeee (last day)`)
        }
    }


    const makeTable = () => {
        let tableBody = [];

        for (let company in myData) {
            myData[company].forEach((item) => {
                tableBody.push(
                    <tbody key={item.id} >
                        <tr id={item.id}>
                            <td>{item.id || 'N/A'}</td>
                            <td>{item.name || 'N/A'}</td>
                            <td>{item.manageBy || 'N/A'}</td>
                            <td className={(item.avgAnnnualManagmentFee > 0.01 && item.avgAnnnualManagmentFee < 0.3) && "green"}>{item.avgAnnnualManagmentFee || 'N/A'}</td>
                            <td className={(item.thisMonthYield > 2) ? "green" : item.thisMonthYield < -0.7 && "red"}>{item.thisMonthYield || 'N/A'}</td>
                            <td>{item.yearToDateYield || 'N/A'}</td>
                            <td className={(item.avgAnnualYield3Years > 7 && item.avgAnnualYield3Years > 0.01) ? "green" : (item.avgAnnualYield3Years < 1 && item.avgAnnualYield3Years > 0.01) && "red"}>{item.avgAnnualYield3Years || 'N/A'}</td>
                            <td className={(item.avgAnnualYield5Years > 9 && item.avgAnnualYield5Years > 0.01) ? "green" : (item.avgAnnualYield5Years < 1.5 && item.avgAnnualYield5Years > 0.01) && "red"}>{item.avgAnnualYield5Years || 'N/A'}</td>
                            <td className={(item.past3YearsYield > 30 && item.past3YearsYield > 0.01) ? "green" : (item.past3YearsYield < 4.5 && item.past3YearsYield > 0.01) && "red"}>{item.past3YearsYield || 'N/A'}</td>
                            <td className={(item.past5YearsYield > 50 && item.past5YearsYield > 0.01) ? "green" : (item.past5YearsYield < 10 && item.past5YearsYield > 0.01) && "red"}>{item.past5YearsYield || 'N/A'}</td>
                            <td>
                                <UseAnimations
                                    animation={heart}
                                    size={16}
                                    onClick={() => {
                                        // eslint-disable-next-line
                                        handleOptionClick(item.id, company, 'save')
                                    }}
                                    render={(eventProps, animationProps) =>
                                    (<button className="add-to-compare" {...eventProps}>
                                        <div {...animationProps} /> <small>Save</small>
                                    </button>)} />
                            </td>                         
                            <td>
                                <UseAnimations
                                    animation={searchToX}
                                    size={16}
                                    onClick={() => {
                                        // eslint-disable-next-line
                                        handleOptionClick(item.id, company, 'compare')
                                    }}
                                    render={(eventProps, animationProps) => (
                                        <button className="add-to-favorite" {...eventProps}> 
                                        <div {...animationProps} /><small>Compare</small>
                                        </button>)}/>
                            </td>
                        </tr>
                    </tbody>
                )
            })
        }
        return tableBody;
    }

    return (
        <div className="table-page">
            <div className="table-content">
                <div className="inner-table-content">
                    <DropDown getCompanyByDropDown={getCompanyByDropDown} title="Choose a company to display" keys={Object.keys(myData)} />
                    <div className="chosen-companies">
                        <p className="company-display-p">Company display :</p>
                        <p>{chosenCompanies}</p>
                    </div>
                    {productsToCompare.length > 0 &&
                        <div className="compare-products-cards">
                            <ProductCard images={{
                                הראל: הראל,
                                מגדל: מגדל,
                                אנליסט: אנליסט,
                                אלטשולר: אלטשולר,
                                מיטב: מיטב
                            }} products={productsToCompare} />
                            {productsToCompare.length === 2 &&
                                <Link
                                    to={{
                                        pathname: '/compare',
                                        products: productsToCompare
                                    }}
                                >
                                    <button className="to-compare">
                                        <i className="fas fa-chart-bar fa-4x"> </i>
                                        <br></br> Compare!</button>
                                </Link>}
                        </div>
                    }
                    {showSpinner && <UseAnimations size={64} speed={0.5} animation={loading} />}
                    {isUserSelect &&
                        <table className="table">
                            <thead className="table-heading">
                                <tr key={"table-header"}>
                                    <th>ID</th>
                                    <th>Fund Name</th>
                                    <th>Manged By</th>
                                    <th>Annual Fee</th>
                                    <th>Last Month Yield</th>
                                    <th>Current Year Yield</th>
                                    <th>Annual Yield (3 Years)</th>
                                    <th>Annual Yield (5 Years)</th>
                                    <th>Total 3 Years Yield </th>
                                    <th>Total 5 Years Yield </th>
                                    <th colSpan="2">Options</th>
                                </tr>
                            </thead>
                            {makeTable()}
                        </table>
                    }
                </div>
            </div>
        </div>
    )
}

export default Table