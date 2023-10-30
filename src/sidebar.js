import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './sidebar.css';
export default props => {
    return (
        <Menu>
            <a className="menu-item" href="/">
                Home
            </a>
            <a className="menu-item" href="/Edit Timeline">
                Edit Timeline
            </a>
            <a className="menu-item" href="/More Info">
                Medical School Information
            </a>
            <a className="menu-item" href="/More Info">
                Ask a Professional
            </a>
        </Menu>
    );
};