import { useState } from "react";
import Navbar from "./components/navbar";
import "./navbar.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" cont" style={{ marginTop: "50px", padding: "2rem", position: "absolute", left: "0", right: "0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <section style={{ marginTop: "3rem"}}>
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
              <div className=" -container">
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
          {/* Add some content to demonstrate scrolling */}
          <div style={{ height: "100vh", marginTop: "3rem" }}>
            <div
              style={{
                height: "200px",
                background: "#f0f0f0",
                margin: "1rem 0",
                padding: "1rem",
              }}
            >
              Content block 1
            </div>
            <div
              style={{
                height: "200px",
                background: "#e0e0e0",
                margin: "1rem 0",
                padding: "1rem",
              }}
            >
              Content block 2
            </div>
            <div
              style={{
                height: "200px",
                background: "#d0d0d0",
                margin: "1rem 0",
                padding: "1rem",
              }}
            >
              Content block 3
            </div>
          </div>
        </div>
      </main>
    </>
  );
}