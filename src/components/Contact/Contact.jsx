import SectionHeader from "../SectionHeader/SectionHeader";
import "./Contact.css";

export default function Contact({ meta }) {
  return (
    <section className="section section-alt" id="contact">
      <div className="section-inner">
        <SectionHeader num="05" title="Get In Touch" />

        <div className="contact-intro">
          <p>{meta.contactBlurb}</p>
        </div>

        <div className="contact-cards">
          <a className="contact-card" href={`mailto:${meta.email}`}>
            <div className="contact-card-icon">📧</div>
            <div className="contact-card-label">Email</div>
            <div className="contact-card-value">{meta.email}</div>
          </a>

          <a className="contact-card" href={`tel:${meta.phone}`}>
            <div className="contact-card-icon">📞</div>
            <div className="contact-card-label">Phone</div>
            <div className="contact-card-value">{meta.phone}</div>
          </a>

          <a
            className="contact-card"
            href={meta.linkedin.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-card-icon">👥</div>
            <div className="contact-card-label">LinkedIn</div>
            <div className="contact-card-value">{meta.linkedin.label}</div>
          </a>
        </div>

        <div className="contact-cta">
          <a className="btn-primary" href={`mailto:${meta.email}`}>
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
