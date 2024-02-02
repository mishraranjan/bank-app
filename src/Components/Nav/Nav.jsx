import React from "react";

// CSS file*************
import "./Nav.css";

// Router Link*******************
import { Link, NavLink } from "react-router-dom";

// Logo**********************
import Logo from "../../assets/logo.png";

// import usestate
import { useState } from "react";

// import NavData
import { navLinks, navRight } from "../../Data/Data.js";

// import hamburger  menu
import { VscMenu, VscChromeClose } from "react-icons/vsc";


export default function Nav() {
    const [isNavLinkshowing, setIsNavLinkShowing] = useState(false);

    if (innerWidth < 1024) {
        window.addEventListener('scroll', () => {
            document.querySelector('.nav-links').classList.add('navLinksHide');
            setIsNavLinkShowing(false);
        })
    };
    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('navShadow',
            window.scrollY > 0);
    })

    return (
        <nav>
            <div className="container nav-container">
                {/* *********Logo********* */}
                <Link to={"/"} className="logo">
                    <img src={Logo} alt="" />
                </Link>

                {/*  ********Nav-Links************* */}
                <ul className={`nav-links ${isNavLinkshowing ? 'navLinkShow' : 'navLinkinvisible'}
                `}>
                    {navLinks.map(({ name, path }, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({ isActive }) => isActive ? 'active' : ''}>{name}</NavLink>
                            </li>
                        );
                    })}
                </ul>

                {/* ****************Nav-Right****************** */}
                <div className="nav-right">
                    {
                        navRight.managements.map((item, index) => {
                            return (<Link key={index} className="managemnet-icons" to={item.link}>
                                <item.icon />
                            </Link>
                            )
                        })}

                    <button className="menu-button " onClick={() => setIsNavLinkShowing(!isNavLinkshowing)}>
                        {
                            !isNavLinkshowing ? <VscMenu /> :
                                <VscChromeClose />
                        }
                    </button>
                </div>
            </div>
        </nav>
    );
}
