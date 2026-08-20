import { useEffect, useLayoutEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Reveal, { RevealGroup, fadeUp } from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import KineticHeading from "../components/KineticHeading";
import { getProject, getNextProject } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    setShowIntro(true);
    const t = setTimeout(() => setShowIntro(false), 1250);
    return () => clearTimeout(t);
  }, [slug]);

  useLayoutEffect(() => {
    if (!project) return;
    const cls = `theme-${project.theme}`;
    document.body.classList.add(cls);
    return () => document.body.classList.remove(cls);
  }, [project]);

  if (!project) return <Navigate to="/projects" replace />;
  const next = getNextProject(slug);
  const media = project.media || {};

  return (
    <div>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="project-intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="project-intro-mask">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-110%" }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
                {project.title}
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <section className="project-hero">
        <div className="container">
          <Reveal as="span" className="eyebrow" style={{ display: "block" }}>
            {project.category}
          </Reveal>
          <KineticHeading lines={[project.headline]} className="kinetic-md" />
          <Reveal className="meta" i={2}>
            <div><span>Müştəri</span>{project.client}</div>
            <div><span>İl</span>{project.year}</div>
            <div><span>Xidmətlər</span>{project.servicesShort}</div>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal
            className={
              media.heroVideo
                ? "ph ph-9x16 hero-video hero-portrait"
                : media.heroRatio
                ? `ph ph-${media.heroRatio} hero-portrait`
                : "ph ph-21x9"
            }
          >
            {media.heroVideo ? (
              <video src={media.heroVideo} poster={media.card || undefined} autoPlay muted loop playsInline controls />
            ) : media.hero ? (
              <img src={media.hero} alt={project.headline} />
            ) : null}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container two-col">
          <Reveal>
            <span className="eyebrow">Ümumi Baxış</span>
            <h2>Konsepsiyadan reallığa</h2>
          </Reveal>
          <Reveal i={1}>
            <p>{project.overview}</p>
            <p className="mt-16">"{project.overviewQuote}"</p>
            <div className="scope-tags">
              {project.scopeTags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container two-col">
          <Reveal>
            <span className="eyebrow">Məqsəd</span>
            <h3 style={{ fontSize: 26 }}>{project.objectiveTitle}</h3>
            <p className="mt-16">{project.objectiveText}</p>
          </Reveal>
          <Reveal i={1}>
            <span className="eyebrow">Hədəf</span>
            <h3 style={{ fontSize: 26 }}>{project.goalTitle}</h3>
            <p className="mt-16">{project.goalText}</p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Hədəf Auditoriya</span>
            <p style={{ maxWidth: 640, fontSize: 18, color: "var(--text)" }}>{project.audience}</p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="ph ph-16x9">
            {media.overview && <img src={media.overview} alt={`${project.title} — ümumi görünüş`} />}
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Proses</span>
            <h2>Çəkiliş prosesi</h2>
            <p>{project.processText}</p>
          </Reveal>
          <RevealGroup className="grid-2">
            <motion.div className="ph ph-3x4" variants={fadeUp}>
              {media.process?.[0] && <img src={media.process[0]} alt={`${project.title} — proses 1`} />}
            </motion.div>
            <motion.div className="ph ph-3x4" variants={fadeUp}>
              {media.process?.[1] && <img src={media.process[1]} alt={`${project.title} — proses 2`} />}
            </motion.div>
          </RevealGroup>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Vizual İstiqamət</span>
            <h2>{project.directionTitle}</h2>
            <p>{project.directionText}</p>
          </Reveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal as="span" className="eyebrow" style={{ display: "block" }}>Seçilmiş Kadrlar</Reveal>
          <RevealGroup className="gallery-grid-3 mt-24">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div className="ph ph-3x4" key={i} variants={fadeUp}>
                {media.gallery?.[i] && <img src={media.gallery[i]} alt={`${project.title} — kadr ${i + 1}`} />}
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="testimonial-solo">
        <div className="container">
          <Reveal>
            <p className="quote">"{project.testimonialQuote}"</p>
            <strong>{project.testimonialName}</strong>
            <div className="muted">{project.testimonialRole}</div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">Digər Layihələr</span>
            <h2>Növbəti işə baxın</h2>
          </Reveal>
          <ProjectCard project={next} />
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
