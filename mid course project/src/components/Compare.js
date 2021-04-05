import React from 'react'
import CompareCards from './CompareCards'
import { Link } from 'react-router-dom'
import './css/compare.css'
import MainImg from '../img/navImg.png'


// get the term and company name from table component!!

function Compare(props) {
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
    if (!dataGet && localStorage.products) {
        products = JSON.parse(dataFromLocalStorage);
    }
 
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
                        <Link to="/compare"><button className="compare-clear-btn" onClick={() => { localStorage.clear() }}>Clear products</button></Link>
                    </div>
                }
            </div>
        </>
    )
}

export default Compare