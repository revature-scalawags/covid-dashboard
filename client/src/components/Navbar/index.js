import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Collapse, Button } from '../Grid'
import logo from '../../assets/img/logo.png'

export default function NavBar() {

    const [ navLinks, showNavLinks ] = useState(false),
    //variable is used to change styling for the about page link when it is being viewed.
     { pathname } = useLocation(),

     //toggles on/off any navbar links when the screen width is small enough to cause them to disappear.
     toggleNav = () => showNavLinks(!navLinks);

    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-light mb-4'}
        style={navBox}
        >
            <Link to='/' className={'navbar-brand'}><span style={navText}>Revature Data</span><br></br> <span style={{color: '#f26925'}}>Covid-19 Dashboard </span> </Link>
            <Button onClick={toggleNav} className={'navbar-toggler'} type="button" data-toggle="collapse" data-target="#target-collapse" >
                <span className="navbar-toggler-icon"></span>
            </Button>
                
            <Collapse navState={navLinks} id={'target-collapse'}>
              <ul className="navbar-nav mr-auto">
                <li className={pathname === "/about" ? "nav-item active" : "nav-item"}>
                    <Link to="/about" className={'nav-link'}>
                        About This
                    </Link>    
                </li>
              </ul>
                    <img alt='logo' src={logo} style={{float: 'right'}} />
            </Collapse>
        </nav>
    )
}
//inline css.
const navBox = {
    boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',
    backgroundImage: 'linear-gradient(to left, white , #484c55)'
},

navText = {
    fontWeight: "bold", 
    fontStyle: "italic",
    color: "white"
}
