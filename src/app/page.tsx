import Navbar from "./components/navbar";
import "./navbar.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="cont"
        style={{
          marginTop: "60px",
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
                  <h2>Hi, I&apos;m Emmanuel Imole</h2>
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
          <div style={{ marginTop: "3rem" }}>
            {/* About Section - Content Block 1 */}
            <div
              id="content-block-1"
              className="content-block about-section"
              style={{
                // height: "300px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                margin: "2rem 0",
                padding: "2rem",
                borderRadius: "15px",
                border: "3px solid #007bff",
                scrollMarginTop: "200px",
                color: "white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                style={{
                  color: "white",
                  marginBottom: "1rem",
                  fontSize: "2rem",
                  fontFamily: "fantasy",
                }}
              >
                👋 About Me
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
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  fontFamily: "sans-serif",
                }}
              >
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest industry trends and best practices.
                My goal is to bridge the gap between design and functionality.
              </p>
            </div>

            {/* Skills Section - Content Block 2 */}
            {/* <div
              id="content-block-2"
              className="content-block skill-section"
              style={{
                // height: "350px",
               
                margin: "2rem 0",
                padding: "2rem",
                borderRadius: "15px",
                scrollMarginTop: "160px",
                color: "white",
              }}
            >
              <h2
                style={{
                  color: "white",
                  marginBottom: "1.5rem",
                  fontSize: "2rem",
                  fontFamily: "cursive",
                }}
              >
                Skills
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  <h2 style={{ marginBottom: "0.5rem" }}>
                    Frontend Development
                  </h2>
                  <p style={{ fontSize: "1rem", fontFamily: "cursive" }}>
                    Building responsive, interactive web applications using
                    React, Next.js, and modern CSS.
                  </p>
                </div>
                <div
                  style={{
                    padding: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  <h2 style={{ marginBottom: "0.5rem" }}>Design</h2>
                  <p style={{ fontSize: "1rem", fontFamily: "cursive" }}>
                    Elevating brands through thoughtful, creative, and effective
                    graphic design.
                  </p>
                </div>
              </div>
            </div> */}

            {/* Portfolio Section - Content Block 3 */}
            <div
              id="content-block-3"
              className="content-block portfolio-section"
              style={{
                // height: "400px",
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                margin: "2rem 0",
                padding: "2rem",
                borderRadius: "15px",
                border: "3px solid #00f2fe",
                scrollMarginTop: "120px",
                color: "white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
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
                ✨ Featured Projects 
                
                {/* Click any card to open the live demo and
                repo. */}
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "10px",
                    borderRadius: "10px",

                    textAlign: "center",
                  }}
                >
                  <h3 style={{ marginBottom: "1rem" }}>My First WebPage</h3>
                  <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                    🏖 Ile-Ife Grand Resort – First Ever Webpage A single-page
                    brochure for a Nigerian resort. 
                  </p>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      fontWeight: "900",
                      fontSize: "0.9rem",
                    }}
                  >
                    Tech: HTML, CSS Flexbox,
                    Netlify Forms
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "0.5rem",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{ marginBottom: "1rem" }}>Emmy-Quiz-App</h3>
                  <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                    ❓ Emmy Quiz App A 50-question JavaScript quiz with instant
                    feedback and a scoreboard.
                  </p>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      fontWeight: "900",
                      fontSize: "0.9rem",
                    }}
                  >
                     Tech: Vanilla JS, CSS Grid,
                    LocalStorage
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "1rem",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{ marginBottom: "1rem" }}>
                    Fitness-Tracker-Project
                  </h3>
                  <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                    🏋 FitTrack Log workouts, see progress charts, and set
                    weekly goals.
                  </p>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      padding: "0.5rem  ",
                      borderRadius: "5px",
                      fontWeight: "900",
                      fontSize: "0.9rem",
                    }}
                  >
                    Tech: React, Chart.js, CSS Modules
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "1.3rem",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{ marginBottom: "1rem" }}>🌐 This Portfolio</h3>
                  <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                    You’re looking at it! Built to practice TypeScript and
                    dynamic routing.
                  </p>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      fontWeight: "900",
                      fontSize: "0.9rem",
                    }}
                  >
                    Tech: Next.js, TypeScript, CSS
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section - Content Block 4 */}
            <div
              id="content-block-4"
              // className="content-block contact-section"
              style={{
                // height: "350px",
                background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                // margin: "2rem 0",
                padding: "1rem",
                // borderRadius: "15px",
                // border: "3px solid #fed6e3",
                scrollMarginTop: "100px",
                color: "#333",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div>
                <div>
                  <h3 style={{ marginBottom: "1rem", color: "#555" }}>
                    🤝 Let&apos;s Build Something
                  </h3>
                  <p
                    style={{
                      //  lineHeight: "1.6",
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
                  <div style={{ marginBottom: "1rem" }}>
                    <strong>📍</strong>Lagos, Nigeria
                  </div>
                </div>
                <div>
                  {/* 📬 hello@emmanuelimole.me https://x.com/yourhandle
                  https://linkedin.com/in/yourhandle
                  https://github.com/yourhandle */}
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
