 import React from 'react'
 import './navbar.scss'
 import { useState } from 'react';
 import { Link } from 'react-router-dom';

 const Navbar = () => {
  const [open ,setOpen] = useState(false);
  const user = true;
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
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Aman Banti</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}

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
 