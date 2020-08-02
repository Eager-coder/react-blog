import React from "react"
import { Link } from 'react-router-dom'
import '../css/Header.css'
const Header = () => {
  const toggleMenu = () => {
    const menu = document.querySelector('.nav-mobile')
    menu.classList.toggle('menu-active')
    console.log('hello')
  }
  return (
    <header>
      <div className="header-container">
        <h1><Link to="/">Edu</Link></h1>
        {/* <h1><Link to="/">
          <img alt="edupro.kz's profile picture" src="https://scontent-lga3-2.cdninstagram.com/v/t51.2885-19/s320x320/42317904_2071295679867780_4254213708537921536_n.jpg?_nc_ht=scontent-lga3-2.cdninstagram.com&amp;_nc_ohc=SByyUDswwmwAX8ix96a&amp;oh=56353af6e6ef9d5a4033ff03999f1f99&amp;oe=5F4CCAB6" />
        </Link></h1> */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-posts">Posts</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
        <div className="burger-btn" onClick={toggleMenu}>
          <img src="/assets/burger.svg" alt=""/>
        </div>
      </div>
      <nav className="nav-mobile">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-posts">Posts</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default Header