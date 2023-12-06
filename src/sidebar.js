import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import {NavLink} from 'react-router-dom';
import './sidebar.css';
export default props => {
    return (
        <Menu height={'100%'}>
            <div className='sidebar-title'> Menu </div>
            <div><NavLink to='/T3AM/' className='bm-link'>Home</NavLink></div>
            {/*<div><NavLink to='/T3AM/timeline' className='bm-link'>Edit Timeline</NavLink></div>*/}
            <div><NavLink to='/T3AM/about' className='bm-link'>Medical School Information</NavLink></div>
            <div><NavLink to='/T3AM/contact' className='bm-link'>Ask a Professional</NavLink></div>
        </Menu>
    );
};