// Dönemsel Burç Yorumları Yükleyici ve Sekme Yöneticisi

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("horoscopeSection");
  if (!section) return;

  // Hangi burçta olduğumuzu H1'den veya URL'den çıkar
  const h1Text = document.querySelector("h1") ? document.querySelector("h1").textContent : "";
  const signName = h1Text.replace("Burcu", "").trim(); // Örn: "Koç Burcu" -> "Koç"

  if (!signName) return;

  // Bölümün iskeletini oluştur
  section.innerHTML = `
    <div class="section-sidebar">
      <h2>Dönemsel Yorumlar</h2>
      <p id="horoscopeUpdateDate">Güncelleniyor...</p>
    </div>
    <div class="section-content">
      <div class="horo-tabs" style="display: flex; gap: 0.6rem; margin-bottom: 2rem; flex-wrap: wrap;">
        <button class="horo-tab-btn active" data-period="daily" style="padding: 0.6rem 1.2rem; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; color: var(--ink); cursor: pointer; font-family: 'Cinzel', serif; font-size: 0.85rem; transition: all 0.25s ease;">Günlük</button>
        <button class="horo-tab-btn" data-period="weekly" style="padding: 0.6rem 1.2rem; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; color: var(--ink); cursor: pointer; font-family: 'Cinzel', serif; font-size: 0.85rem; transition: all 0.25s ease;">Haftalık</button>
        <button class="horo-tab-btn" data-period="monthly" style="padding: 0.6rem 1.2rem; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; color: var(--ink); cursor: pointer; font-family: 'Cinzel', serif; font-size: 0.85rem; transition: all 0.25s ease;">Aylık</button>
        <button class="horo-tab-btn" data-period="yearly" style="padding: 0.6rem 1.2rem; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 20px; color: var(--ink); cursor: pointer; font-family: 'Cinzel', serif; font-size: 0.85rem; transition: all 0.25s ease;">Yıllık</button>
      </div>

      <div id="horoTabContent" style="animation: fadeIn 0.4s ease;">
        <!-- Yorumlar dinamik yerleştirilecek -->
      </div>
    </div>
  `;

  let signComments = null;

  // dailyHoroscopes nesnesi (daily-horoscopes.js'den yüklenir)
  if (typeof dailyHoroscopes !== 'undefined') {
    document.getElementById("horoscopeUpdateDate").textContent = `Son Güncelleme: ${dailyHoroscopes.lastUpdated}`;
    signComments = dailyHoroscopes.comments[signName];
    if (signComments) {
      renderPeriod("daily");
    } else {
      document.getElementById("horoTabContent").innerHTML = "<p>Yorumlar bulunamadı.</p>";
    }
  } else {
    document.getElementById("horoscopeUpdateDate").textContent = "Veri Yüklenemedi";
    document.getElementById("horoTabContent").innerHTML = "<p>Yorum verileri yüklenemedi. Lütfen daily-horoscopes.js dosyasının doğru yüklendiğinden emin olun.</p>";
  }

  // Sekme Tıklama Dinleyicisi
  section.addEventListener("click", (e) => {
    const btn = e.target.closest(".horo-tab-btn");
    if (!btn) return;

    section.querySelectorAll(".horo-tab-btn").forEach(b => {
      b.classList.remove("active");
      b.style.background = "var(--glass-bg)";
      b.style.color = "var(--ink)";
      b.style.borderColor = "var(--glass-border)";
    });

    btn.classList.add("active");
    btn.style.background = "var(--gold)";
    btn.style.color = "var(--night-deep)";
    btn.style.borderColor = "var(--gold)";

    const period = btn.dataset.period;
    renderPeriod(period);
  });

  function renderPeriod(period) {
    if (!signComments || !signComments[period]) return;
    const c = signComments[period];

    const contentBox = document.getElementById("horoTabContent");
    contentBox.innerHTML = `
      <h3 style="font-size: 1.6rem; color: var(--gold); margin-bottom: 1rem; text-transform: uppercase;">
        ${signName} Burcu ${period === 'daily' ? 'Günlük' : period === 'weekly' ? 'Haftalık' : period === 'monthly' ? 'Aylık' : 'Yıllık'} Yorumu
      </h3>
      <p style="font-size: 1.05rem; line-height: 1.8; color: #cbd5e1; margin-bottom: 2rem;">${c.general}</p>

      <div class="trait-grid">
        <div class="trait-card">
          <h4 style="color: var(--gold-bright);">💖 Aşk & İlişkiler</h4>
          <p>${c.love}</p>
        </div>
        <div class="trait-card">
          <h4 style="color: var(--gold-bright);">💼 Kariyer & İş</h4>
          <p>${c.career}</p>
        </div>
        <div class="trait-card">
          <h4 style="color: var(--gold-bright);">💰 Para & Bütçe</h4>
          <p>${c.money}</p>
        </div>
        <div class="trait-card">
          <h4 style="color: var(--gold-bright);">🎭 Sosyal Yaşam</h4>
          <p>${c.social}</p>
        </div>
      </div>

      <div style="margin-top: 2rem; padding: 1.8rem; background: rgba(0,0,0,0.2); border: 1px solid var(--glass-border); border-radius: 6px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;">
        <div>
          <h5 style="font-family: 'Cinzel', serif; font-size: 0.9rem; color: var(--gold); margin-bottom: 0.5rem; text-transform: uppercase;">💡 Dönemin Tavsiyesi</h5>
          <p style="font-size: 0.9rem; color: #cbd5e1; margin: 0;">${c.advice}</p>
        </div>
        <div>
          <h5 style="font-family: 'Cinzel', serif; font-size: 0.9rem; color: var(--coral); margin-bottom: 0.5rem; text-transform: uppercase;">⚠️ Dikkat Edilmesi Gereken</h5>
          <p style="font-size: 0.9rem; color: #cbd5e1; margin: 0;">${c.caution}</p>
        </div>
        <div style="border-top: 1px solid var(--glass-border); padding-top: 1rem; margin-top: 0.5rem;">
          <span style="font-size: 0.85rem; color: var(--muted);">🌈 Şanslı Renk: <strong style="color: #fff;">${c.color}</strong></span>
        </div>
        <div style="border-top: 1px solid var(--glass-border); padding-top: 1rem; margin-top: 0.5rem;">
          <span style="font-size: 0.85rem; color: var(--muted);">🔢 Şanslı Sayı: <strong style="color: var(--gold-bright);">${c.number}</strong></span>
        </div>
      </div>
    `;

    // Mobil uyumluluk için grid sütununu dikey modda tek sütuna düşür
    if (window.innerWidth <= 768) {
      const grids = contentBox.querySelectorAll(".trait-grid, div[style*='grid-template-columns']");
      grids.forEach(g => {
        g.style.gridTemplateColumns = "1fr";
      });
    }
  }
});
