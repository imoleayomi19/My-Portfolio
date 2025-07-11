import Home from "./home/page"
import NavBar from "./navbar/page"

export default function Page() {
  return (
    <div>
      <NavBar />
      < Home/>
    </div>
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
