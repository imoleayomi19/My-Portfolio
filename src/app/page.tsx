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
                height: "300px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                margin: "2rem 0",
                padding: "2rem",
                borderRadius: "15px",
                border: "3px solid #007bff",
                scrollMarginTop: "100px",
                color: "white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                style={{
                  color: "white",
                  marginBottom: "1rem",
                  fontSize: "2rem",
                }}
              >
                About Me
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                }}
              >
                I&apos;m a passionate frontend developer with expertise in
                modern web technologies. My journey in web development started
                with a curiosity about how websites work, and it has evolved
                into a career focused on creating exceptional user experiences.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                I believe in writing clean, maintainable code and staying
                up-to-date with the latest industry trends and best practices.
                My goal is to bridge the gap between design and functionality.
              </p>
            </div>

            {/* Services Section - Content Block 2 */}
            <div
              id="content-block-2"
              className="content-block services-section"
              style={{
                height: "350px",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                margin: "2rem 0",
                padding: "2rem",
                borderRadius: "15px",
                border: "3px solid #f5576c",
                scrollMarginTop: "100px",
                color: "white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                style={{
                  color: "white",
                  marginBottom: "1.5rem",
                  fontSize: "2rem",
                }}
              >
                My Services
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
                  <h3 style={{ marginBottom: "0.5rem" }}>
                    Frontend Development
                  </h3>
                  <p style={{ fontSize: "0.9rem" }}>
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
                  <h3 style={{ marginBottom: "0.5rem" }}>UI/UX Design</h3>
                  <p style={{ fontSize: "0.9rem" }}>
                    Creating intuitive user interfaces and engaging user
                    experiences.
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    padding: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  <h3 style={{ marginBottom: "0.5rem" }}>Web Optimization</h3>
                  <p style={{ fontSize: "0.9rem" }}>
                    Improving website performance, SEO, and accessibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Portfolio Section - Content Block 3 */}
            <div
              id="content-block-3"
              className="content-block portfolio-section"
              style={{
                height: "400px",
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                margin: "2rem 0",
                padding: "2rem",
                borderRadius: "15px",
                border: "3px solid #00f2fe",
                scrollMarginTop: "100px",
                color: "white",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                style={{
                  color: "white",
                  marginBottom: "1.5rem",
                  fontSize: "2rem",
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
                    padding: "1.5rem",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{ marginBottom: "1rem" }}>E-commerce Platform</h3>
                  <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                    A full-featured online store built with Next.js and Stripe
                    integration.
                  </p>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      fontSize: "0.8rem",
                    }}
                  >
                    React • Next.js • TypeScript
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
                  <h3 style={{ marginBottom: "1rem" }}>Task Management App</h3>
                  <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                    A collaborative project management tool with real-time
                    updates.
                  </p>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      fontSize: "0.8rem",
                    }}
                  >
                    React • Firebase • CSS
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
                  <h3 style={{ marginBottom: "1rem" }}>Weather Dashboard</h3>
                  <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                    A responsive weather app with location-based forecasts.
                  </p>
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.2)",
                      padding: "0.5rem",
                      borderRadius: "5px",
                      fontSize: "0.8rem",
                    }}
                  >
                    JavaScript • API • CSS
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section - Content Block 4 */}
            <div
              id="content-block-4"
              className="content-block contact-section"
              style={{
                height: "350px",
                background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                margin: "2rem 0",
                padding: "2rem",
                borderRadius: "15px",
                border: "3px solid #fed6e3",
                scrollMarginTop: "100px",
                color: "#333",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <h2
                style={{
                  color: "#333",
                  marginBottom: "1.5rem",
                  fontSize: "2rem",
                }}
              >
                Get In Touch
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "2rem",
                }}
              >
                <div>
                  <h3 style={{ marginBottom: "1rem", color: "#555" }}>
                    Contact Information
                  </h3>
                  <div style={{ marginBottom: "0.8rem" }}>
                    <strong>Email:</strong> emmanuel.imole@example.com
                  </div>
                  <div style={{ marginBottom: "0.8rem" }}>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </div>
                  <div style={{ marginBottom: "0.8rem" }}>
                    <strong>Location:</strong> New York, NY
                  </div>
                  <div>
                    <strong>Available:</strong> Monday - Friday, 9AM - 6PM EST
                  </div>
                </div>
                <div>
                  <h3 style={{ marginBottom: "1rem", color: "#555" }}>
                    Let&apos;s Work Together
                  </h3>
                  <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
                    I&apos;m always interested in new opportunities and exciting
                    projects. Whether you need a complete website, want to
                    improve an existing application, or just have questions
                    about web development, I&apos;d love to hear from you.
                  </p>
                  <div
                    style={{
                      background: "rgba(0, 123, 255, 0.1)",
                      padding: "1rem",
                      borderRadius: "8px",
                      border: "1px solid rgba(0, 123, 255, 0.3)",
                    }}
                  >
                    <strong>Response Time:</strong> Usually within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
