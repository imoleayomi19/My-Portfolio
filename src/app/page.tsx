"use client";

import Navbar from "./components/navbar";
import "./navbar.css";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const portfolioProjects = [
    {
      id: "project-1",
      title: "My First WebPage",
      description:
        " 🏖 Ile-Ife Grand Resort – First Ever Webpage A single-page brochure for a Nigerian resort.",
      tech: "  Tech: HTML, CSS Flexbox, Netlify Forms",
      image: "/ife.jpg?height=300&width=300",
    },
    {
      id: "project-1",
      title: "Emmy-Quiz-App",
      description:
        " ❓ Emmy Quiz App A 50-question JavaScript quiz with instant feedback and a scoreboard.",
      tech: " Vanilla JS, CSS Grid, LocalStorage",
      image: "/quiz.jpg?height=200&width=300",
    },
    {
      id: "project-1",
      title: "Fitness-Tracker-Project",
      description:
        " 🏋 FitTrack Log workouts, see progress charts, and set weekly goals.",
      tech: "React, Chart.js, CSS Modules",
      image: "/workout.jpg?height=200&width=300",
    },
    {
      id: "project-1",
      title: "🌐 This Portfolio",
      description:
        "You’re looking at it! Built to practice TypeScript and dynamic routing.",
      tech: "Next.js, TypeScript, CSS",
      image: "/folio-2.jpg?height=200&width=300",
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const portfolioAnimations = [
    "fade-in-animation",
    "slide-in-right-animation",
    "zoom-in-animation",
  ];
  const [currentPortfolioAnimation, setCurrentPortfolioAnimation] = useState(
    portfolioAnimations[0]
  );

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % portfolioProjects.length;
      setCurrentPortfolioAnimation(
        portfolioAnimations[nextIndex % portfolioAnimations.length]
      );
      return nextIndex;
    });
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) => {
      const nextIndex =
        (prevIndex - 1 + portfolioProjects.length) % portfolioProjects.length;
      setCurrentPortfolioAnimation(
        portfolioAnimations[nextIndex % portfolioAnimations.length]
      );
      return nextIndex;
    });
  };

  const currentProject = portfolioProjects[currentProjectIndex];

  return (
    <>
      <Navbar />
      <main
        className="cont"
        style={{
          marginTop: "40px",
          padding: "2rem",
          position: "absolute",
          left: "0",
          right: "0",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <section style={{ marginTop: "3rem" }}>
            <div className="content">
              <div className="home-container">
                <div className="home-text">
                  <h2>
                    <span className="wave">👋</span> I&apos;m Emmanuel
                  </h2>
                  <p>Frontend Web Developer</p>
                  <i>
                    I&apos;m a front-end developer who builds websites that look
                    great on phones, tablets, and laptops. I use everyday web
                    tools—HTML, CSS, JavaScript—and modern helpers like React
                    and Next.js to make pages load fast, feel smooth, and stay
                    easy to use for everyone.
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
              <div className="image-container">
                <Image
                  src="/imole.png.jpeg"
                  alt="Emmanuel Imole"
                  className="home-image"
                  width={250}
                  height={300}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </section>

          {/* Navigation Content Blocks */}
          <div style={{
            marginTop: "5rem",

          }}>
            {/* About Section - Content Block 1 */}
        
            <div
              id="content-block-1"
              className="content-block about-section"
              style={{
                // background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                margin: "2rem 0",
                padding: "2rem",
                borderRadius: "15px",
                // border: "3px solid #007bff",
                scrollMarginTop: "200px",
                color: "white",
                alignItems: "center",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                gap: "20px",
              
              }}
            >
                  <h2
              style={{
                color: "white",
                fontSize: "2rem",
                fontFamily: "fantasy",
              }}
            >
              🙋‍♂️&nbsp;About<span style={{ color: "yellow" }}>&nbsp;Me</span>
            </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                  fontFamily: "sans-serif",
                }}
              >
                I&apos;m Emmanuel – a Lagos-based frontend developer who loves
                turning ideas into fast, beautiful websites. I started by
                Googling “How does a website work?” and never stopped learning.
                Today I build with React, Next.js, and TypeScript, but the
                mission is still the same: make the web easier and nicer for
                real people.
              </p>
            </div>

            {/* Skills Section - Content Block 2 */}
            <div
              id="content-block-2"
              className="content-block skill-section"
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                padding: "2rem",
                borderRadius: "15px",
                scrollMarginTop: "160px",
                color: "white",
              }}
            >
              <h2
                style={{
                  color: "white",
                  marginBottom: "2.5rem",
                  fontSize: "2rem",
                  fontFamily: "cursive",
                }}
              >
              👨‍💻 My <span style={{ color: "yellow" }}>Skills</span>
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div
                  className="skills"
                  style={{
                    padding: "2rem",
                    borderRadius: "10px",
                  }}
                >
                  <h2 style={{ marginBottom: "0.8rem" }}>
                    Frontend Development
                  </h2>
                  <p style={{ fontSize: "1rem", fontFamily: "cursive" }}>
                    Building responsive, interactive web applications using
                    React, Next.js, and modern CSS.
                  </p>
                </div>
                <div
                  className="skills"
                  style={{
                    padding: "2rem",
                    borderRadius: "10px",
                  }}
                >
                  <h2 style={{ marginBottom: "0.8rem" }}>Design</h2>
                  <p style={{ fontSize: "1rem", fontFamily: "cursive" }}>
                    Elevating brands through thoughtful, creative, and effective
                    graphic design.
                  </p>
                </div>
              </div>
            </div>

            {/* Portfolio Section - Content Block 3 */}
            <div
              id="content-block-3"
              className="content-block portfolio-section"
              style={{
                // background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                margin: "2rem auto",
                marginBottom: "100px",
                padding: "2rem",
                borderRadius: "15px",
                // border: "3px solid #00f2fe",
                scrollMarginTop: "120px",
                color: "white",
                // boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                maxWidth: "800px",
              }}
            >
              <h2
                style={{
                  color: "white",
                  marginBottom: "1.5rem",
                  fontSize: "2rem",
                  fontFamily: "monospace",
                }}
              >
                ✨ Featured <span  style={{ color: "yellow" }} >Projects</span>
              </h2>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  position: "relative",
                }}
              >
                <button
                  className="portfolio-nav-btn prev-btn"
                  onClick={handlePrevProject}
                  disabled={currentProjectIndex === 0}
                >
                  <Image
                    src="/back-svg.svg"
                    alt="Previous Project"
                    width={22}
                    height={22}
                  />
                </button>
                <div
                  key={currentProject.id} // Key ensures re-render for animation
                  className={`portfolio-item ${currentProject.id === portfolioProjects[0].id
                      ? "active-portfolio-item"
                      : ""
                    } ${currentPortfolioAnimation}`}
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "1.5rem",
                    borderRadius: "10px",
                    textAlign: "center",
                    width: "min(100%, 400px)", // Limit width of single project
                    flexShrink: 0, // Prevent shrinking
                  }}
                >
                  <h2
                    style={{ marginBottom: "1rem", fontFamily: "sans-serif" }}
                  >
                    {currentProject.title}
                  </h2>
                  {currentProject.image && (
                    <Image
                      src={currentProject.image || "/ife.png"}
                      alt={currentProject.title}
                      width={300}
                      height={300}
                      className="portfolio-project-image"
                    />
                  )}

                  <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
                    {currentProject.description}
                  </p>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    {currentProject.tech}
                  </div>
                </div>
                <button
                  className="portfolio-nav-btn next-btn"
                  onClick={handleNextProject}
                  disabled={
                    currentProjectIndex === portfolioProjects.length - 1
                  }
                >
                  <Image
                    src="/next-svg.svg"
                    alt="Previous Project"
                    width={22}
                    height={22}
                  />
                </button>
              </div>
              {/* <div
                style={{ marginTop: "1rem", fontSize: "1rem", color: "white" }}
              >
                {currentProjectIndex + 1} / {portfolioProjects.length}
              </div> */}
            </div>

            {/* Contact Section - Content Block 4 */}
            <div
              id="content-block-4"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                padding: "1rem",
                scrollMarginTop: "100px",
                color: "white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                borderRadius: "500px",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div>
                <div>
                  <h3 style={{ marginBottom: "1rem", color: "white" }}>
                    🤝 Let&apos;s Build Something
                  </h3>
                  <p
                    style={{
                      marginBottom: "1rem",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    Whether you need a landing page, a blog, or help fixing a
                    slow site, I&apos;m one email away.
                  </p>
                </div>
                <div>
                  <div style={{ marginBottom: "1rem", fontWeight: "600" }}>
                    <strong>📍</strong> Lagos, Nigeria.
                  </div>
                </div>
                <div>
                  <a
                    href="https://x.com/EmmanuelE81101"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons8-x (1).svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/emmanuel-imole-3b62b1367/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons8-linkedin.svg"
                      alt="LinkedIn"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="https://github.com/imoleayomi19"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons8-github.svg"
                      alt="GitHub"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="mailto:eakintunde51@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons8-gmail.svg"
                      alt="Email"
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}