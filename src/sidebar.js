import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import {NavLink} from 'react-router-dom';
import './sidebar.css';
export default props => {
    return (
        <Menu>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>Medical School Information</NavLink></li>
            <li><NavLink to='/contact'>Ask a Professional</NavLink></li>
        </Menu>
    );
};