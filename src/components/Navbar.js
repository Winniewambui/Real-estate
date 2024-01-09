import React from 'react'
import { MenuData } from './MenuData'
import './NavbarStyle.css';

const Navbar = () => {
    return (
      <section className='Navbar'>
       <h1 className='logo'>HOMYZZ</h1>
        <ul className='NavbarItems'>
          {MenuData.map((item, index) => (
            <li key={index}> 
            <a href={item.url} className={item.cName}>{item.title}</a></li>
          ))}
          <button className='button'>
          <a href="/">Contact</a>
          </button>
        </ul>
      </section>
    ); 
  }
  
  export default Navbar;