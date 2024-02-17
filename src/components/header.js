import "../css/header.css"
import React from 'react';
import { NavLink } from 'react-router-dom';
import {  useSelector } from "react-redux";



function Header(){
  const state = useSelector((state)=>state.addItem)

    return<>
        <div className='nav'>
            <div className='logo'>BlogX.</div>
            <div className='menu'>
            <NavLink to="/" exact activeclassname="active">
                  Home
                </NavLink>
                <NavLink to="/about" activeclassname="active">
                  About
                </NavLink>
                <NavLink to="/category" activeclassname="active">
                  Category
                </NavLink>
                <NavLink to="/contact" activeclassname="active">
                  Contact Us
                </NavLink>
            </div>
            <div className='library'>
            <NavLink to='/cart'> <strong>Library({state.length})</strong></NavLink>

            </div>
        </div>
    </>
}
export default Header;