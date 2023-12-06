import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const Sidebar = (props) => {
  return (
    <Menu height={'100%'}>
      <div className='sidebar-title'> Menu </div>
      <NavLink to='/T3AM/' className='bm-link'>
        <div>Home</div>
      </NavLink>
      {/*<NavLink to='/T3AM/timeline' className='bm-link'>
        <div>Edit Timeline</div>
  </NavLink>*/}
      <NavLink to='/T3AM/about' className='bm-link'>
        <div>Medical School Information</div>
      </NavLink>
      <NavLink to='/T3AM/contact' className='bm-link'>
        <div>Ask a Professional</div>
      </NavLink>
    </Menu>
  );
};

export default Sidebar;
