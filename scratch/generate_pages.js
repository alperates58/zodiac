const fs = require('fs');
const path = require('path');

// Klasörleri oluştur
const gezegenlerDir = path.join(__dirname, '..', 'gezegenler');
const evlerDir = path.join(__dirname, '..', 'evler');
if (!fs.existsSync(gezegenlerDir)) fs.mkdirSync(gezegenlerDir);
if (!fs.existsSync(evlerDir)) fs.mkdirSync(evlerDir);

// 1. Gezegen Sayfalarını Üret
const planetsPath = path.join(__dirname, '..', 'data', 'planets.json');
if (fs.existsSync(planetsPath)) {
  const planets = JSON.parse(fs.readFileSync(planetsPath, 'utf8'));
  planets.forEach(p => {
    const htmlContent = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Astrolojide ${p.name} anlamı, yönettikleri, haritadaki gücü, mitolojisi ve evlerdeki yorumları.">
  <title>${p.name}: ${p.descTitle} — Zodyak Atlası</title>
  <link rel="stylesheet" href="../style-detail.css">
  <style>
    :root {
      --accent-color: ${p.accentColor || '#d4af37'};
      --accent-glow: rgba(${p.accentColor === '#ef476f' ? '239,71,111' : p.accentColor === '#8296c9' ? '130,150,201' : '212,175,55'}, 0.35);
    }
  </style>
</head>
<body>
  <header class="detail-header">
    <a href="../index.html" class="back-link">← Atlasa Dön</a>
    <a href="../index.html" class="detail-logo">✦ Zodyak <span>Atlası</span></a>
  </header>

  <main>
    <section class="detail-hero">
      <div class="detail-starfield"></div>
      <div class="hero-glyph">${p.glyph}</div>
      <h1>${p.name}</h1>
      <p class="hero-motto">“${p.motto}”</p>
      <div class="badges">
        <span class="badge accent-badge">Yönettiği Burç: ${p.ruler}</span>
        <span class="badge">Zodyak Turu: ${p.cycle}</span>
        <span class="badge">Doğal Evi: ${p.house}</span>
        <span class="badge">Metal: ${p.metal}</span>
      </div>
    </section>

    <div class="detail-main">
      <section class="detail-section">
        <div class="section-sidebar">
          <h2>Kozmik Sembolizm</h2>
          <p>Her gezegen haritada bir psikolojik dürtüyü ve aktörü temsil eder.</p>
        </div>
        <div class="section-content">
          <h3>${p.descTitle}</h3>
          <p>${p.descText}</p>
          <p>${p.astroDetails}</p>
        </div>
      </section>

      <section class="detail-section">
        <div class="section-sidebar">
          <h2>${p.astroTitle2}</h2>
          <p>Gök cisminin fiziksel ve bilimsel yörünge özellikleri.</p>
        </div>
        <div class="section-content">
          <h3>${p.astroTitle}</h3>
          <p>${p.astroText}</p>
          <p>${p.astroText2}</p>
        </div>
      </section>

      <section class="detail-section">
        <div class="section-sidebar">
          <h2>Evlerdeki Anlamı</h2>
          <p>${p.name} gezegeninin bulunduğu ev, yaşam enerjinizin en aktif olduğu hayat sahnesini gösterir.</p>
        </div>
        <div class="section-content">
          <div class="trait-grid">
            ${p.housePositions.map(hp => `
            <div class="trait-card">
              <h4>${hp.num}</h4>
              <p>${hp.desc}</p>
            </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section class="detail-section">
        <div class="section-sidebar">
          <h2>Mitolojik Köken</h2>
          <p>Kadim kültürlerde gezegenin arkasındaki mitolojik öyküler.</p>
        </div>
        <div class="section-content">
          <h3>${p.mythTitle}</h3>
          <p>${p.mythText}</p>
        </div>
      </section>
    </div>
  </main>

  <footer class="detail-footer">
    <p>© 2026 Zodyak Atlası — Gökyüzünün Kadim Bilgeliği</p>
  </footer>
</body>
</html>`;

    fs.writeFileSync(path.join(gezegenlerDir, `${p.slug}.html`), htmlContent, 'utf8');
    console.log(`Generated planet page: ${p.slug}.html`);
  });
}

// 2. Ev Sayfalarını Üret
const housesPath = path.join(__dirname, '..', 'data', 'houses.json');
if (fs.existsSync(housesPath)) {
  const houses = JSON.parse(fs.readFileSync(housesPath, 'utf8'));
  houses.forEach(h => {
    const htmlContent = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Astrolojide ${h.name} anlamı, temsil ettiği yaşam alanları, gezegen konumları.">
  <title>${h.name}: ${h.topic} — Zodyak Atlası</title>
  <link rel="stylesheet" href="../style-detail.css">
</head>
<body>
  <header class="detail-header">
    <a href="../index.html" class="back-link">← Atlasa Dön</a>
    <a href="../index.html" class="detail-logo">✦ Zodyak <span>Atlası</span></a>
  </header>

  <main>
    <section class="detail-hero">
      <div class="detail-starfield"></div>
      <div class="hero-glyph">🏠</div>
      <h1>${h.name}</h1>
      <p class="hero-motto">“${h.topic}”</p>
      <div class="badges">
        <span class="badge accent-badge">Doğal Burcu: ${h.ruler}</span>
        <span class="badge">Deneyim Alanı: Somut Yaşam Sahneleri</span>
      </div>
    </section>

    <div class="detail-main">
      <section class="detail-section">
        <div class="section-sidebar">
          <h2>Ev Konusu</h2>
          <p>Gökyüzünün doğum anındaki 12 bölümünden biri.</p>
        </div>
        <div class="section-content">
          <h3>Temsil Ettiği Alanlar</h3>
          <p>${h.desc}</p>
          <p>${h.details}</p>
        </div>
      </section>

      <section class="detail-section">
        <div class="section-sidebar">
          <h2>Gezegen Vurguları</h2>
          <p>Bu eve düşen gezegenler buradaki hayat tecrübelerini nasıl şekillendirir?</p>
        </div>
        <div class="section-content">
          <h3>Gezegen Konumları</h3>
          <p>${h.planets}</p>
        </div>
      </section>
    </div>
  </main>

  <footer class="detail-footer">
    <p>© 2026 Zodyak Atlası — Gökyüzünün Kadim Bilgeliği</p>
  </footer>
</body>
</html>`;

    fs.writeFileSync(path.join(evlerDir, `${h.slug}.html`), htmlContent, 'utf8');
    console.log(`Generated house page: ${h.slug}.html`);
  });
}

console.log("Page generation complete!");
