import SectionHeader from "../SectionHeader/SectionHeader";
import "./Experience.css";

function ExperienceItem({ item }) {
  return (
    <div className="exp-item">
      <div className="exp-left">
        <div className="exp-dot" />
        <div className="exp-period">{item.period}</div>
        <div className="exp-company">{item.company}</div>
        {item.location && <div className="exp-location">{item.location}</div>}
      </div>

      <div className="exp-right">
        <div className="exp-title">{item.title}</div>
        <div className="exp-desc">{item.desc}</div>

        <ul className="exp-bullets">
          {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>

        <div className="exp-tags">
          {item.tags.map((t) => (
            <span className="exp-tag" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience({ data }) {
  return (
    <section className="section section-alt" id="experience">
      <div className="section-inner">
        <SectionHeader num="03" title="Experience" />
        <div className="exp-list">
          {data.map((item, i) => (
            <ExperienceItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
