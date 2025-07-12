export default function Home() {
  return (
    <div>
      <section 
      className=" hero-section"
      style={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        color: "white",
        backgroundColor: "#000",
      }}
      >
        <h1 className="hero-title"
        style={{
          fontFamily: "Waterfall",
          color: "#fff",
          fontSize: "bold",
          margin: "auto",
        }}
        >Hero</h1>
      </section>
      <section 
      className=" about-section"
      style={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        color: "white",
        backgroundColor: "purple",
      }}
      >
        <h1 className="hero-title"
        style={{
          fontFamily: "Waterfall",
          color: "#fff",
          fontSize: "bold",
          margin: "auto",
        }}
        >About</h1>
      </section>
      <section 
      className=" skills-section"
      style={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        color: "white",
        backgroundColor: "red",
      }}
      >
        <h1 className="hero-title"
        style={{
          fontFamily: "Waterfall",
          color: "#fff",
          fontSize: "bold",
          margin: "auto",
        }}
        >Skill</h1>
      </section>
      <section 
      className=" projects-section"
      style={{
        display: "flex",
        height: "100vh",
        textAlign: "center",
        color: "white",
        backgroundColor: "green",
      }}
      >
        <h1 className="hero-title"
        style={{
          fontFamily: "Waterfall",
          color: "#fff",
          fontSize: "bold",
          margin: "auto",
        }}
        >Projects</h1>
      </section>
    </div>
  )
}