import { useActiveSection } from "./hooks";
import {
  META,
  HERO_TITLES,
  HERO_BADGES,
  ABOUT,
  SKILLS,
  EXPERIENCE,
  CERTIFICATIONS,
  NAV_LINKS,
} from "./data/portfolioData.jsx";

import "./styles/globals.css";

import Nav            from "./components/Nav/Nav";
import Hero           from "./components/Hero/Hero";
import About          from "./components/About/About";
import Skills         from "./components/Skills/Skills";
import Experience     from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import Contact        from "./components/Contact/Contact";
import Footer         from "./components/Footer/Footer";

export default function App() {
  const sectionIds = NAV_LINKS.map((l) => l.href);
  const active = useActiveSection(sectionIds);

  return (
    <>
      <Nav links={NAV_LINKS} active={active} />
      <Hero
        meta={META}
        titles={HERO_TITLES}
        badges={HERO_BADGES}
      />
      <About data={ABOUT} />
      <Skills data={SKILLS} />
      <Experience data={EXPERIENCE} />
      <Contact meta={META} />
      <Footer name={META.footerCredit} />
    </>
  );
}
