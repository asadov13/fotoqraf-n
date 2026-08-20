import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Reveal as="div" className="footer-tagline">
          <h2>Gəlin sizin hekayənizi birlikdə kadrla danışaq.</h2>
        </Reveal>
        <div className="footer-grid">
          <div className="footer-col">
            <span>Əlaqə</span>
            <a href="mailto:info@fotoqraf.az" data-cursor="hover">info@fotoqraf.az</a>
            <a href="https://wa.me/994XXXXXXXXX" target="_blank" rel="noreferrer" data-cursor="hover">Çəkiliş Sifariş Et</a>
          </div>
          <div className="footer-col">
            <span>Menyu</span>
            <Link to="/projects" data-cursor="hover">Portfolio</Link>
            <Link to="/#services" data-cursor="hover">Xidmətlər</Link>
          </div>
          <div className="footer-col">
            <span>Sosial</span>
            <div className="social-icons">
              {["IG", "TT", "BE"].map((s) => (
                <motion.a
                  key={s}
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s}
                  data-cursor="hover"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {s}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 [Fotoqrafın Adı]</span>
          <span>Bakı, Azərbaycan</span>
        </div>
        <div className="brand-signature">[FOTOQRAFIN ADI]</div>
      </div>
    </footer>
  );
}
