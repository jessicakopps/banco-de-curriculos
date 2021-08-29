import React from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom'


function Navbar() {
    return (
      <div id='header'>
      <div>
        <h1><a href="#">JobsNET</a></h1>
      </div>
      <div id='menu'>
        <ul>
            <li><NavLink exact to = '/'>Home       
              </NavLink>
            </li>
            <li><NavLink to = '/sobre'>Sobre       
              </NavLink>
            </li>
            <li><NavLink to = '/curriculo'>Cadastre-se
            </NavLink>          
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;