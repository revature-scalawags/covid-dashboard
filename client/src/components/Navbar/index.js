import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Collapse, Button } from '../Grid'
import logo from '../../assets/img/logo.png'

export default function NavBar() {

    const [ navLinks, showNavLinks ] = useState(false),
     { pathname } = useLocation(),

     toggleNav = () => showNavLinks(!navLinks);

    return (
        <nav className={'navbar navbar-expand-lg navbar-light bg-light'}
        style={{backgroundImage: 'linear-gradient(to left, white , #484c55)'}}
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
const navText = {
    fontWeight: "bold", 
    fontStyle: "italic",
    color: "white"
}