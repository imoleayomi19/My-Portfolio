// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function NavBar() {
//   const [navbar, setNavbar] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(0);
//   useEffect(() => {
//     setWindowWidth(window.innerWidth);
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div>
//       <nav
//         style={{
//           width: "100%",
//           backgroundColor: "#451777",
//           position: "fixed",
//           top: "0",
//           left: "0",
//           right: "0",
//           zIndex: "10",
//         }}
//       >
//         <div
//           className="nav-head"
//           style={{
//             justifyContent: "space-between",
//             padding: "10px",
//             margin: "auto",
//           }}
//         >
//           <div>
//             <div
//               className="unknown-logo"
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//               }}
//             >
//               <Link href={"/"}>
//                 <h2
//                   style={{
//                     fontFamily: "Waterfall",
//                     color: "#fff",
//                     fontSize: "bold",
//                   }}
//                   className="logo-text"
//                 >
//                   My<i>Portfolio</i>
//                 </h2>
//               </Link>
//               <div className="h-menu">
//                 <button
//                   className="hamburger-button"
//                   style={{
//                     padding: "8px",
//                     backgroundColor: "transparent",
//                     border: "none",
//                     color: "#fff",
//                     fontSize: "700",
//                     borderRadius: "6px",
//                     outline: "none",
//                     cursor: "pointer",
//                   }}
//                   onClick={() => setNavbar(!navbar)}
//                 >
//                   {navbar ? (
//                     <Image
//                       src={"/close.svg"}
//                       alt="logo"
//                       width={34}
//                       height={34}
//                     />
//                   ) : (
//                     <Image
//                       src={"/hamburger-menu.svg"}
//                       alt="logo"
//                       width={34}
//                       height={34}
//                       className="hamburger-icon"
//                     />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div
//               style={{
//                 flex: 1,
//                 justifySelf: "center",
//                 paddingBottom: windowWidth >= 768 ? "0" : navbar ? "3rem" : "0",
//                 marginTop: windowWidth >= 768 ? "0" : navbar ? "8rem" : "0",
//                 display: navbar ? "block" : "none",
//                 padding: windowWidth >= 768 ? "0" : navbar ? "3rem" : "0",
//               }}
//             >
//               <ul
//                 className="nav-list"
//                 style={{
//                   height: "100%",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <li className="nav-item">
//                   <Link
//                     style={{
//                       textDecoration: "none",
//                       color: "#faefef",
//                     }}
//                     href="/"
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     style={{
//                       textDecoration: "none",
//                       color: "#faefef",
//                     }}
//                     href="/about"
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     style={{
//                       textDecoration: "none",
//                       color: "#faefef",
//                     }}
//                     href="/skills"
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     Skills
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     style={{
//                       textDecoration: "none",
//                       color: "#faefef",
//                     }}
//                     href="/project"
//                     onClick={() => setNavbar(!navbar)}
//                   >
//                     Projects
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
