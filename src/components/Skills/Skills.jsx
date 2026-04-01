import SectionHeader from "../SectionHeader/SectionHeader";
import "./Skills.css";

export default function Skills({ data }) {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <SectionHeader num="02" title="Skills & Expertise" />

        <div className="skills-grid">
          {data.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <div className="skill-card-icon">{skill.icon}</div>
              <div className="skill-card-title">{skill.title}</div>
              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
