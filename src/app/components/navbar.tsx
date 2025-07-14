"use client"

import { useState } from "react"
import {useNavigation } from "../hooks/useNavigation"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSocial, setShowSocial] = useState(false)
   const { handleHomeClick, handleAboutClick, handleSkillsClick, handlePortfolioClick } =
    useNavigation()
    
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSocial = () => {
    setShowSocial(!showSocial)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

 const handleNavigation = (clickHandler: () => void) => {
    clickHandler()
    closeMenu() // Close mobile menu after navigation
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
         <button className="nav-logo nav-button" onClick={() => handleNavigation(handleHomeClick)}>
          MYportfolio
        </button>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <button className="nav-link nav-button" onClick={() => handleNavigation(handleHomeClick)}>
              Home
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link nav-button" onClick={() => handleNavigation(handleAboutClick)}>
              About
            </button>
          </li>
          <li className="nav-item">
           <button className="nav-link nav-button" onClick={() => handleNavigation(handleSkillsClick)}>
              Skills
            </button>
          </li>
          <li className="nav-item">
             <button className="nav-link nav-button" onClick={() => handleNavigation(handlePortfolioClick)}>
              Portfolio
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className={`nav-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
         {/* Social Media Contact */}
        <div className="social-contact">
          <button className="contact-btn" onClick={toggleSocial}>
            Contact Me
          </button>

          {showSocial && (
            <div className="social-links">
              <a href="https://x.com/EmmanuelE81101" target="_blank" rel="noopener noreferrer" className="social-link">
                 <img
                   src="/icons8-x (1).svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                 />
                <span>Twitter</span>
              </a>
              <a href="https://www.linkedin.com/in/emmanuel-imole-3b62b1367/" target="_blank" rel="noopener noreferrer" className="social-link">
                 <img
                    src="/icons8-linkedin.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                  />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/imoleayomi19" target="_blank" rel="noopener noreferrer" className="social-link">
                <img
                    src="/icons8-github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                <span>Github</span>
              </a>
              <a href="mailto:eakintunde51@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
                 <img
                   src="/icons8-gmail.svg"
                   alt="Email"
                   width={24}
                   height={24}
                 />
                <span>Gmail</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
