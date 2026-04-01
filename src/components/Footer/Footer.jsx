import "./Footer.css";

export default function Footer({ name }) {
  return (
    <footer className="footer">
      by <strong>{name}</strong> &nbsp;·&nbsp;{new Date().getFullYear()}
    </footer>
  );
}
