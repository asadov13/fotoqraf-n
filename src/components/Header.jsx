import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import Magnetic from "./Magnetic";

const links = [
  { to: "/projects", label: "Portfolio" },
  { to: "/#services", label: "Xidmətlər" },
  { to: "/#contact", label: "Əlaqə" },
];

// Bura öz WhatsApp/Instagram/telefon əlaqə linkinizi yazın.
const CONTACT_LINK = "https://wa.me/994XXXXXXXXX";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 20));
  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      <header className="site-header">
        <motion.div
          className="nav-inner-bg"
          initial={false}
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        />
        <div className="container nav-inner">
          <Link to="/" className="brand">
            <span className="brand-avatar ph ph-1x1" />
            [Fotoqrafın Adı]
          </Link>
          <nav className="nav-links">
            {links.map((l) => (
              <Link key={l.to} to={l.to} data-cursor="hover">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="nav-cta">
            <Magnetic>
              <a href={CONTACT_LINK} target="_blank" rel="noreferrer" className="btn btn-primary" data-cursor="hover">
                Çəkiliş Sifariş Et
              </a>
            </Magnetic>
          </div>
          <button className="hamburger" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)} data-cursor="hover">
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }} />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {[...links, { to: CONTACT_LINK, label: "Çəkiliş Sifariş Et", external: true }].map((l, i) =>
              l.external ? (
                <motion.a
                  key={l.to}
                  href={l.to}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.06 } }}
                >
                  {l.label}
                </motion.a>
              ) : (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.06 } }}
                >
                  <Link to={l.to}>{l.label}</Link>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
