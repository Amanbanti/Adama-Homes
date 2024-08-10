 import React from 'react'
 import './navbar.scss'
 import { useState } from 'react';

 const Navbar = () => {
  const [open ,setOpen] = useState(false);
   return (  
    <nav>
        <div className='left'>
          <a href='/' className='logo'>
             <img src="/BihouseDoor5_x2.svg" alt='Adama-Homes-logo'/>
             <span>Adama Homes</span>
          </a>

          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>


        </div>

        <div className='right'>

            <a href='/'>Sign in</a>
            <a href='/' className='register'>Sing up</a>
              <div className="menuIcon">
                <img src='/menu.png' alt='menu' onClick={()=>
                      setOpen((prev) => !prev)
                }/>
              </div>

              <div className={open ? "menu active":"menu"}>
                  <a href='/'>Home</a>
                  <a href='/'>About</a>
                  <a href='/'>Contact</a>
                  <a href='/'>Agents</a>
                  <a href='/'>Sign in </a>
                  <a href='/'>Sign up</a>

              </div>

        </div>


    </nav>
    
   )
 }
 
 export default Navbar
 