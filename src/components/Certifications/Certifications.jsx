import SectionHeader from "../SectionHeader/SectionHeader";
import "./Certifications.css";

export default function Certifications({ data }) {
  return (
    <section className="section" id="certifications">
      <div className="section-inner">
        <SectionHeader num="04" title="Certifications" />

        <div className="cert-header">
          <div className="cert-count">{data.count}</div>
          <div className="cert-subtitle">{data.subtitle}</div>
        </div>

        <div className="cert-grid">
          {data.items.map((cert) => (
            <div className="cert-card" key={cert.title}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-title">{cert.title}</div>
              <div className="cert-issuer">{cert.issuer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
