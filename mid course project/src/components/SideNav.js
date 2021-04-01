import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import UseAnimations from "react-useanimations";
import menu from 'react-useanimations/lib/menu2'
import navImg from '../img/navImg.png'
import './css/sidenav.css'

function SideNav() {
    const [checked, setChecked] = useState(false);
    const btnWrapper = useRef();

    return (
        <React.Fragment>
            <nav className={`side-nav ${checked ? "show-nav" : "hidden"}`}>
                <img className="nav-img" src={navImg} alt="navImg" />
                <ul>
                    <h1><Link to="/">Logo</Link></h1>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/table">Table</Link></li>
                    <li><Link to="/compare">Compare</Link></li>
                    <li><Link to="/favorite">Watch List</Link></li>
                </ul>
            </nav>
            <div ref={btnWrapper} className={`btn-wrapper ${checked ? "show-nav" : "hidden"}`}>       
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