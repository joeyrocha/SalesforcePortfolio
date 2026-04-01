import { useTypewriter } from "../../hooks";
import "./Hero.css";

export default function Hero({ meta, titles }) {
  const typed = useTypewriter(titles);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-greeting">{meta.greeting}</p>

          <h1 className="hero-name">
            {meta.name.split(" ")[0]} <span>{meta.name.split(" ")[1]}</span>
          </h1>

          <div className="hero-typewriter">
            Salesforce | {typed}
            <span className="cursor" />
          </div>

          <p className="hero-location">{meta.location}</p>

          <div className="hero-btns">
            <a
              className="btn-primary"
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            >
              Get In Touch
            </a>
            <a
              className="btn-secondary"
              href="#experience"
              onClick={(e) => { e.preventDefault(); scrollTo("experience"); }}
            >
              View Experience
            </a>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="hero-avatar">{meta.initials}</div>
          <img src="/joey_profile.png" alt="Profile" className="hero-badge-image" />
        </aside>
      </div>

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
