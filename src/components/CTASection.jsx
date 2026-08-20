import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function CTASection() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="cta-band">
          <span className="eyebrow" style={{ color: "inherit", opacity: 0.6 }}>Əlaqə</span>
          <h2>Çəkilişinizi planlaşdıraq?</h2>
          <p>Moda, reklam və kommersiya çəkilişləri üçün mənimlə əlaqə saxlayın — ideyanızı birlikdə vizual hekayəyə çevirək.</p>
          <Magnetic>
            <a href="https://wa.me/994XXXXXXXXX" target="_blank" rel="noreferrer" className="btn btn-primary" data-cursor="hover">
              Çəkiliş Sifariş Et
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
