import React , {useState}from 'react'
import { Link } from 'react-router-dom'
import BarChart from './BarChart'
import PieChart from './PieChart'
import LineChart from './LineChart'
import InfoCards from './InfoCards'
import '../../css/compare-cards.css'
import UseAnimations from "react-useanimations"
import loading from 'react-useanimations/lib/loading2'

function CompareCard() {

    const [isAllLoaded,setIsAllLoaded] = useState(false)
    const lineDidLoaded = () => {
        setIsAllLoaded(true)
    }
    
    let data = localStorage.getItem('products')
    data = JSON.parse(data);
    return (
        <>
        <div key={data} className={`compare-cards ${isAllLoaded?"":"hide"}`}>
            <div className="flex columns side-info-compare">
                <InfoCards company={data[1][1]} product={data[1][0]} />
                <div className="bars-graph">
                    <BarChart color={[`#1e212d7b`, `#1e212d`]} product={data[1]} />
                </div>
            </div>
            <div className="line-graph-wrapper">
                <div className="line-graph">
                    <LineChart lineDidLoaded={lineDidLoaded} products={data} />
                </div>
                <div className="flex pies-graph">
                    <PieChart color={[`#77ab598b`, `#c3bfb48b`]} product={data[1]} />
                    <PieChart color={[`#77ab598b`, `#c3bfb48b`]} product={data[0]} /> 
                </div>
                <div className="compare-clear-btn-wrapper">
                    <Link to="/compare"><button className="compare-clear-btn" onClick={() => { localStorage.removeItem("products") }}>Clear products</button></Link>
                    </div>
            </div>
            <div className="flex columns side-info-compare">
                <InfoCards company={data[0][1]} product={data[0][0]} />
                <div className="bars-graph">
                    <BarChart color={[`#1687a77b`, `#1687a7`]} product={data[0]} />
                </div>
            </div>
            
        </div>
        
        <div className={`compareLoader ${isAllLoaded?"hide":""}`}>
        <UseAnimations size={150} speed={0.5} animation={loading} />
         </div>
    
    </>
    )


}

export default CompareCard