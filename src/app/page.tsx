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
                    I&apos;m a front-end web developer skilled in bringing
                    responsive web designs to life, ensuring they shine across
                    devices. I specialize in HTML, CSS, JavaScript, React,
                    Next.js and TypeScript, crafting websites that are not only
                    visually appealing but also functional and user-friendly.
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
                About Me
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                  fontFamily: "sans-serif",
                }}
              >
                I&apos;m a passionate frontend developer with expertise in
                modern web technologies. My journey in web development started
                with a curiosity about how websites work, and it has evolved
                into a career focused on creating exceptional user experiences.
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
            <div
              id="content-block-2"
              className="content-block skill-section"
              style={{
                // height: "350px",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                margin: "2rem 0",
                padding: "2rem",
                borderRadius: "15px",
                border: "3px solid #f5576c",
                scrollMarginTop: "160px",
                color: "white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
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
                    background: "rgba(255, 255, 255, 0.1)",
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
                    background: "rgba(255, 255, 255, 0.1)",
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
            </div>

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
                My Portfolio
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
                    I created my first webpage showcasing the Ile-Ife Grand
                    Resort, highlighting its attractions and experiences for
                    visitors in Ile-Ife, Nigeria.
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
                    • HTML • CSS
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "1.5rem",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{ marginBottom: "1rem" }}>Emmy-Quiz-App</h3>
                  <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                    A quiz app featuring questions on JavaScript, targeting
                    developers and tech learners.
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
                    • CSS • JavaScript
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "0.7rem",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{ marginBottom: "1rem" }}>
                    Fitness-Tracker-Project
                  </h3>
                  <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                    FitTrack is a simple, intuitive fitness tracking application
                    that helps users log and visualize their workout progress.
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
                    • React • CSS
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    padding: "1.5rem",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{ marginBottom: "1rem" }}>My-Portfolio</h3>
                  <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                    This project highlights my skills in using TypeScript for
                    building scalable and maintainable code.
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
                    • TypeScript • CSS
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
                    Let&apos;s Work Together
                  </h3>
                  <p
                    style={{
                      //  lineHeight: "1.6",
                      marginBottom: "1rem",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    I&apos;m always interested in new opportunities and exciting
                    projects. Whether you need a landing page or complete website, want to
                    improve an existing web app, or just have questions about
                    web development, I&apos;d love to hear from you.
                  </p>
                </div>
                <div>
                  <h3 style={{ marginBottom: "1rem", color: "#555" }}>
                    Contact Information
                  </h3>
                  <div style={{ marginBottom: "1rem",}}>
                    <strong>Location:</strong> Lagos, NG.
                  </div>
                </div>
                <div>
                  <a
                    href="https://x.com/EmmanuelE81101"
                    target="_blank"
                    rel="noopener noreferrer"
                    // className="social-link"
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
                    // className="social-link"
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
                    // className="social-link"
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
                    // className="social-link"
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
