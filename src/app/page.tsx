import Link from "next/link";

export default function Page() {
  return (
    <div>
      <header className="header">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "50px",
            marginLeft: "40px",
          }}
        >
          <h1>
            <i>My</i>
          </h1>
          <img
            src="/portfolio-logo-com.svg"
            alt="Portfolio Icon"
            className="portfolio-icon"
            style={{
              width: "80px",
              height: "100px",
              marginRight: "12px",
              verticalAlign: "middle",
              cursor: "pointer",
            }}
          />
        </div>
        <nav>
          <Link className="nav" href={""}>
            Home
          </Link>
          <Link className="nav" href={""}>
            About
          </Link>
          <Link className="nav" href={""}>
            Skills
          </Link>
          <Link className="nav" href={""}>
            Project
          </Link>
        </nav>
      </header>
      <section className="home">
        <div className="home-row">
          <div className="content">
            <div className="home-text">
              <h2>Hi, I'm Emmanuel Imole</h2>
              <p>Frontend Web Developer</p>
              <i>
                I'm a front-end web developer skilled in bringing to life
                responsive web designs that shine across devices. I specialize
                in HTML, CSS, JavaScript, React Next.js and TypeScript crafting
                websites that are not only visually appealing but also
                functional and user-friendly.
              </i>
            </div>
            <div className="home-image">
              <img src="/imole.jpeg" alt="Emmanuel Imole" />
            </div>
          </div>
          <div>
            <button className="home-btn">Reach Out</button>
          </div>
        </div>
      </section>
    </div>
  );
}
