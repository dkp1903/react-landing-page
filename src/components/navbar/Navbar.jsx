import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.svg'

// CSS naming convention -> BEM

const Navbar = () => {
    return (
        <div className='gpt3__navbar'>
            <div className="gpt__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt='logo'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar