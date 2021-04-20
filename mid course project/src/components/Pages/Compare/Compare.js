import React, { useEffect,useState } from 'react'
import CompareCards from '../Compare/CompareCards'
import { Link } from 'react-router-dom'
import '../../css/compare.css'
import MainImg from '../../../img/navImg.png'
import Adv from './Adv'



function Compare(props) {

    const [showAd, setShowAd] = useState(false)
    let products = null;
    const dataGet = props.location.products; // get from table
    const dataFromLocalStorage = localStorage.getItem('products')
    if (dataGet) {
        products = dataGet;
        localStorage.removeItem('products')
        localStorage.setItem('products', JSON.stringify(dataGet));
    }
    if (dataGet && !localStorage.products) {
        // if there is new data from table
        localStorage.setItem('products', JSON.stringify(dataGet));
    }
    if (!dataGet && localStorage.products) {
        products = JSON.parse(dataFromLocalStorage);
    }

    useEffect(() => {
        setTimeout(() => {
            setShowAd(true);
            console.log(`adv poped`);
        }, 10000);
    }, [])

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
                    </div>
                }
                {showAd &&
                    <>
                       <Adv setShowAd={setShowAd}/>
                    </>
                }
            </div>
        </>
    )
}

export default Compare