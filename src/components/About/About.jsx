import SectionHeader from "../SectionHeader/SectionHeader";
import "./About.css";

export default function About({ data }) {
  return (
    <section className="section section-alt" id="about">
      <div className="section-inner">
        <SectionHeader num="01" title="About Me" />

        <div className="about-grid">
          <div className="about-text">
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="about-cards">
            {data.cards.map((c) => (
              <div className="about-card" key={c.label}>
                <div className="about-card-icon">{c.icon}</div>
                <div className="about-card-label">{c.label}</div>
                <div className="about-card-value">{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
