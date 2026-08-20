# Lorem Ipsum Designs — Motion Edition

Portfolio saytının **Framer Motion + React** ilə tam yenidən qurulmuş versiyası. Əvvəlki statik HTML versiyasından fərqli olaraq bu, real bir React tətbiqidir və peşəkar dərəcədə animasiya/keçidlərlə işləyir:

## Nə əlavə olundu

- **Preloader** — səhifə ilk açılanda clip-path ilə "pərdə açılması" effekti
- **Scroll progress bar** — yuxarıda nazik xətt, oxuma faizini göstərir
- **Custom cursor** — siçana bağlı spring-fizika ilə hərəkət edən dairə, layihə kartları üzərində "View" mətni ilə genişlənir
- **Səhifələr arası keçid ("curtain" wipe)** — hər naviqasiyada tünd panel yuxarıdan aşağı sürüşərək yeni səhifəni açır (Awwwards saytlarında geniş yayılmış effekt)
- **Kinetik hero başlıq** — hər söz aşağıdan spring ilə görünür, sətirlər fərqli gecikmə/şəffaflıqla
- **Magnetik düymələr** — CTA düymələri siçana doğru yüngül "cəlb olunur"
- **Scroll-reveal + stagger** — bütün bölmələr ekrana girəndə ardıcıl animasiya olunur (Framer Motion `whileInView`)
- **Layihə kartları** — hover-də şəkil böyüyür, "View Project" mətni sürüşərək görünür
- **Sürüklənə bilən testimonial karuseli** — siçanla/barmaqla sürüşdürülür (Motion `drag`)
- **Animasiyalı FAQ accordion** — hündürlük animasiyası + ikon fırlanması
- **Hər layihə üçün fərqli mövzu rəngi** — HOODVERSE (bənövşəyi), Tea Sense (çay-qəhvəyi), Fruit Blends (canlı), Ruthless (neon-qara, tam tünd tema)
- **Mobil menyu** — dairəvi clip-path açılışı ilə tam-ekran overlay

Bütün mətnlər hələ də **lorem ipsum**, bütün şəkil yerləri **boş** (dashed border-lu placeholder) saxlanılıb — sən öz mətn və şəkillərinizlə əvəz etməlisiniz (`src/data/projects.js` faylında mətnlər, `.ph` class-lı elementlər şəkil yerləridir).

## Necə işə salmaq olar

Bu, indi bir **React/Vite layihəsidir** — əvvəlki kimi sadəcə `index.html`-i açmaq kifayət etmir. İki yol var:

### 1) Development rejimi (kod dəyişikliklərini canlı görmək üçün)

```bash
npm install
npm run dev
```

Terminalda görünən linki (adətən `http://localhost:5173`) brauzerdə aç.

### 2) Hazır build-i baxmaq (`dist/` qovluğu artıq daxildir)

```bash
npx serve dist
```

və ya Python varsa:

```bash
cd dist && python3 -m http.server 8080
```

sonra `http://localhost:8080` aç. (Qeyd: `dist/index.html`-i birbaşa cüt-klikləməklə açmaq brauzerin təhlükəsizlik qaydaları ucbatından işləməyəcək — yuxarıdakı kimi kiçik bir server lazımdır.)

## Struktur

```
src/
  data/projects.js       ← bütün mətnlər və layihə məlumatları (lorem ipsum)
  components/            ← Header, Cursor, PageTransition, Marquee, FAQAccordion, Testimonials, ProjectCard, və s.
  pages/                 ← Home, Projects, CaseStudy
  index.css              ← dizayn sistemi (rənglər, tipoqrafiya, komponentlər)
```

## Öz məzmununu əlavə etmək

1. `src/data/projects.js` — bütün başlıq/paraqraf mətnlərini öz mətninizlə əvəz edin.
2. Şəkillər üçün: `<div className="ph ph-16x9" />` kimi elementləri `<img src="..." />` ilə əvəz edin (və ya CSS `background-image` əlavə edin).
3. `npm run build` işə salıb yeni `dist/` yaradın.
