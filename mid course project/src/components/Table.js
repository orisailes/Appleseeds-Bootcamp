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

    const getCompanyByDropDown = (company) => {
        console.log(company)
    }

    return (
        <div className="table">
            <div className="table-content">
                <DropDown getCompanyByDropDown={getCompanyByDropDown} title="Choose a company to display" keys={Object.keys(myData)} />
            </div>
        </div>
    )
}

export default Table