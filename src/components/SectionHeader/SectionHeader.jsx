// Reusable "01. Section Title ────────" header used by every section.
export default function SectionHeader({ num, title }) {
  return (
    <div className="section-label">
      <span className="section-num">{num}.</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </div>
  );
}
