"use client"

import { useState } from "react"
import Link from "next/link"


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSocial, setShowSocial] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSocial = () => {
    setShowSocial(!showSocial)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="nav-logo" onClick={closeMenu}>
        MYportfolio
        </Link>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link href="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services" className="nav-link" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/portfolio" className="nav-link" onClick={closeMenu}>
              Portfolio
            </Link>
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
