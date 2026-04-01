import { useState } from "react";
import "./Nav.css";

export default function Nav({ links, active }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="nav">
      <a
        href="#home"
        className="nav-logo"
        onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
      >
        JR.
      </a>

      <ul className={`nav-links${open ? " open" : ""}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={`#${l.href}`}
              className={active === l.href ? "active" : ""}
              onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hamburger" onClick={() => setOpen((o) => !o)}>
        <span /><span /><span />
      </div>
    </nav>
  );
}
