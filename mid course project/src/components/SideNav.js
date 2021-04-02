import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import UseAnimations from "react-useanimations";
import menu from 'react-useanimations/lib/menu2'
import navImg from '../img/navImg.png'
import './css/sidenav.css'

function SideNav() {
    const [checked, setChecked] = useState(null);
    const navRef = useRef();



    return (
        <React.Fragment>
            <nav ref={navRef} className={`side-nav ${checked  ? "show-nav" : checked !==null ? "hide":""}`}>
               <Link to="/"><img className="nav-img" src={navImg} alt="navImg" /></Link> 
                    <div className="opt"><Link to="/"><i className="fas fa-home fa-lg"></i> Home</Link></div>
                    <div className="opt"><Link to="/table"><i className="fas fa-table fa-lg"></i> Table</Link></div>
                    <div className="opt"><Link to="/compare"><i className="fas fa-chart-bar fa-lg"></i> Compare</Link></div>
                    <div className="opt"><Link to="/favorite"><i className="fas fa-heart fa-lg"></i> Watch List</Link></div>
                <footer>
                    All right are save to Ori Sailes &#169;. Every usage have to be approved.
                </footer>
            </nav>
            <div className={`btn-wrapper ${checked ? "show-nav" : checked !==null ? "hide":""}`}>       
                    <UseAnimations
                        reverse={checked}
                        onClick={() => {
                            setChecked(!checked)
                        }}
                        size={46}
                        animation={menu}
                        speed={2}
                    />
            </div>
        </React.Fragment>

    )
}

export default SideNav;