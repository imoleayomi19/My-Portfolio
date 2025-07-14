import Navbar from "./components/navbar"
import "./navbar.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: "80px", padding: "2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h1>Welcome to Your Website</h1>
          <p>This is a demo page showing the responsive navbar in action.</p>

          <section style={{ marginTop: "3rem" }}>
            <h2>Features of this Navbar:</h2>
            <ul>
              <li>Fully responsive design</li>
              <li>Mobile hamburger menu</li>
              <li>Smooth animations and transitions</li>
              <li>Hover effects on desktop</li>
              <li>Fixed positioning</li>
              <li>Dark mode support</li>
              <li>No external dependencies</li>
            </ul>
          </section>

          <section style={{ marginTop: "3rem" }}>
            <h2>Test the Responsiveness</h2>
            <p>Try resizing your browser window or viewing on different devices to see how the navbar adapts:</p>
            <ul>
              <li>
                <strong>Desktop:</strong> Full horizontal menu with hover effects
              </li>
              <li>
                <strong>Tablet:</strong> Adjusted spacing and sizing
              </li>
              <li>
                <strong>Mobile:</strong> Collapsible hamburger menu
              </li>
            </ul>
          </section>

          {/* Add some content to demonstrate scrolling */}
          <div style={{ height: "100vh", marginTop: "3rem" }}>
            <h2>Scroll Test</h2>
            <p>The navbar remains fixed at the top while you scroll through the content.</p>
            <div style={{ height: "200px", background: "#f0f0f0", margin: "1rem 0", padding: "1rem" }}>
              Content block 1
            </div>
            <div style={{ height: "200px", background: "#e0e0e0", margin: "1rem 0", padding: "1rem" }}>
              Content block 2
            </div>
            <div style={{ height: "200px", background: "#d0d0d0", margin: "1rem 0", padding: "1rem" }}>
              Content block 3
            </div>
          </div>
        </div>
      </main>
    </>
  )
}






//               <div className="home-text">
//                 <h2>Hi, I&apos;m Emmanuel Imole</h2>
//                 <p>Frontend Web Developer</p>
//                 <i>
//                   I&apos;m a front-end web developer skilled in bringing
//                   responsive web designs to life, ensuring they shine across
//                   devices. I specialize in HTML, CSS, JavaScript, React, Next.js
//                   and TypeScript, crafting websites that are not only visually
//                   appealing but also functional and user-friendly.
//                 </i>
//               </div>
//               <div className="home-list-container">
//                 <ul className="home-list">
//                   <li>
//                     Front-end development: building functional, user-friendly
//                     websites.
//                   </li>
//                   <li>
//                     Graphics design: creating stunning visuals that elevate
//                     digital experiences.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className=" container">
//               <Image
//                 src="/imole.png.jpeg"
//                 alt="Emmanuel Imole"
//                 className="home-image"
//                 width={250}
//                 height={325}
//                 style={{
//                   objectFit: "cover",
//                   borderStartEndRadius: "50px",
//                   borderEndStartRadius: "50px",
//                 }}
//               />
//             </div>
//           </div>
//           <div className="homeBtn">
//             <button
//               className="home-btn"
//               onClick={() => setShowSocials((prev) => !prev)}
//             >
//               Reach Out
//             </button>
//             {showSocials && (
//               <div className="social-links">
//                 <a
//                   href="https://x.com/EmmanuelE81101"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-btn"
//                   aria-label="Twitter"
//                 >
//                   <img
//                     src="/icons8-x (1).svg"
//                     alt="Twitter"
//                     width={28}
//                     height={28}
//                   />
//                 </a>
//                 <a
//                   href="https://www.linkedin.com/in/emmanuel-imole-3b62b1367/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-btn"
//                   aria-label="LinkedIn"
//                 >
//                   <img
//                     src="/icons8-linkedin.svg"
//                     alt="LinkedIn"
//                     width={28}
//                     height={28}
//                   />
//                 </a>
//                 <a
//                   href="https://github.com/imoleayomi19"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-btn"
//                   aria-label="GitHub"
//                 >
//                   <img
//                     src="/icons8-github.svg"
//                     alt="GitHub"
//                     width={28}
//                     height={28}
//                   />
//                 </a>
//                 <a
//                   href="mailto:eakintunde51@gmail.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-btn"
//                   aria-label="Email"
//                 >
//                   <img
//                     src="/icons8-gmail.svg"
//                     alt="Email"
//                     width={28}
//                     height={28}
//                   />
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
