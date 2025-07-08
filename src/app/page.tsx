"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [showSocials, setShowSocials] = useState(false);
  return (
    <div>
      <header className="header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "25px",
            marginLeft: "40px",
          }}
          className="header-logo"
        >
          <h1>
            <i>My</i>
          </h1>
          <Image
            src="/portfolio-logo-com.svg"
            alt="Portfolio Icon"
            className="portfolio-icon"
            width={100}
            height={100}
          />
        </div>
        <nav>
          <Link className="nav-link" href={""}>
            Home
          </Link>
          <Link className="nav-link" href={""}>
            About
          </Link>
          <Link className="nav-link" href={""}>
            Skills
          </Link>
          <Link className="nav-link" href={""}>
            Project
          </Link>
        </nav>
      </header>
      <section className="home">
        <div className="home-container">
          <div className="content">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="home-text">
                <h2>Hi, I&apos;m Emmanuel Imole</h2>
                <p>Frontend Web Developer</p>
                <i>
                  I&apos;m a front-end web developer skilled in bringing
                  responsive web designs to life, ensuring they shine across devices. I specialize
                  in HTML, CSS, JavaScript, React, Next.js and TypeScript,
                  crafting websites that are not only visually appealing but
                  also functional and user-friendly.
                </i>
              </div>
              <div className="home-list-container">
                <ul className="home-list">
                  <li>
                    Front-end development: building functional, user-friendly
                    websites.
                  </li>
                  <li>
                    Graphics design: creating stunning visuals that elevate
                    digital experiences.
                  </li>
                </ul>
              </div>
            </div>
            <div className="home-image">
              <Image
                src="/imole.png.jpeg"
                alt="Emmanuel Imole"
                width={0}
                height={50}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div>
            <button
              className="home-btn"
              onClick={() => setShowSocials((prev) => !prev)}
            >
              Reach Out
            </button>
            {showSocials && (
              <div className="social-links">
                <a
                  href="https://x.com/EmmanuelE81101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Twitter"
                >
                  <img
                    src="/icons8-x (1).svg"
                    alt="Twitter"
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/emmanuel-imole-3b62b1367/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  <img
                    src="/icons8-linkedin.svg"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href="https://github.com/imoleayomi19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="GitHub"
                >
                  <img
                    src="/icons8-github.svg"
                    alt="GitHub"
                    width={28}
                    height={28}
                  />
                </a>
                <a
                  href="mailto:eakintunde51@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Email"
                >
                  <img
                    src="/icons8-gmail.svg"
                    alt="Email"
                    width={28}
                    height={28}
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}