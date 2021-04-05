import React from 'react'
import {Link} from 'react-router-dom'
import SideNav from './SideNav'
import Img from '../img/logo4.png'
import Cart from '../img/cart.png'
import './css/header.css'

function Header() {
    return (
        <>
            <SideNav />
            <div className="header-bg"></div>
            <div className="header">
                <div className="fixer"></div>
                <Link to="/"><img className="sailes-compare-logo" src={Img} alt="logo" /></Link>
                <Link to="/favorite"><img className="cart" src={Cart} alt="logo" /></Link>
                {/* <Link to="/favorite"><i class="fas fa-eye fa-x"></i></Link> */}
            </div>
        </>
    )
}

export default Header