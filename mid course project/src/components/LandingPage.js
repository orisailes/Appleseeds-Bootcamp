import React from 'react'
import { Link } from 'react-router-dom'
import './css/landing.css'
import MainImg from '../img/navImg.png'
function LandingPage() {
    return (
        <div className="landing">
            <div className="landing-content">
                <Link to="/"><img src={MainImg} alt="Sailes Compare"/></Link>
                <div className="text">
                <h2>Build your next finance thinking.</h2>
                <p>Welcome to Sailes compare!</p>
                <p>We offer a compare system that help you find what product fits you.</p>
                <p>You can chose which products to compare via our table page.</p>
                </div>
                <div className="landing-btn-wrapper">
                <Link to="/compare"><button className="btn">Compare</button></Link>
                <Link to="/table"><button className="btn">Table page</button></Link>
                <Link to="/favorite"><button className="btn">My favorites</button></Link>
                </div>
            </div>
        </div>)
}

export default LandingPage