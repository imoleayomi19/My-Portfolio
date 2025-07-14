"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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
          {/* <li className="nav-item">
            <Link href="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </li> */}
        </ul>

        {/* Mobile Hamburger */}
        <div className={`nav-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}
