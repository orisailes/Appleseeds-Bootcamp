import React from 'react'
import BarChart from './BarChart'
import PieChart from './PieChart'
import LineChart from './LineChart'
import './css/compare-cards.css'
import { Link } from 'react-router-dom'

function CompareCard() {
    debugger;
    let data = localStorage.getItem('products')
    data = JSON.parse(data);
    console.log(data)
    return (
        <div className="compare-cards">
            <div className="flex columns">
                
                <BarChart color={['orange']} product={data[0]} />
            </div>
            <div className="line-graph">
                <LineChart color={['black']} product={[data[0], data[1]]} />
                <div className="flex">
                    <PieChart color={['red', 'blue']} product={data[0]} />
                    <PieChart color={['red', 'blue']} product={data[1]} />
                </div>
            </div>
            <div className="flex columns">
                
                <BarChart color={['blue']} product={data[1]} />
            </div>
            <div>
            </div>
        </div>

    )

}

export default CompareCard