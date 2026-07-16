const signs = [
  {name:'Koç',glyph:'♈',dates:'21 Mart — 19 Nisan',start:[3,21],end:[4,19],element:'Ateş',mode:'Öncü',ruler:'Mars',motto:'Başlatırım',gifts:'cesaret · dürüstlük · inisiyatif',shadow:'Sabırsızlık',color:'#ef476f',slug:'koc'},
  {name:'Boğa',glyph:'♉',dates:'20 Nisan — 20 Mayıs',start:[4,20],end:[5,20],element:'Toprak',mode:'Sabit',ruler:'Venüs',motto:'Köklenirim',gifts:'sabır · sadakat · duyusallık',shadow:'İnatçılık',color:'#06d6a0',slug:'boga'},
  {name:'İkizler',glyph:'♊',dates:'21 Mayıs — 20 Haziran',start:[5,21],end:[6,20],element:'Hava',mode:'Değişken',ruler:'Merkür',motto:'Merak ederim',gifts:'zeka · esneklik · iletişim',shadow:'Dağınıklık',color:'#e5c968',slug:'ikizler'},
  {name:'Yengeç',glyph:'♋',dates:'21 Haziran — 22 Temmuz',start:[6,21],end:[7,22],element:'Su',mode:'Öncü',ruler:'Ay',motto:'Korurum',gifts:'sezgi · şefkat · hafıza',shadow:'İçe kapanma',color:'#86b7ca',slug:'yengec'},
  {name:'Aslan',glyph:'♌',dates:'23 Temmuz — 22 Ağustos',start:[7,23],end:[8,22],element:'Ateş',mode:'Sabit',ruler:'Güneş',motto:'Parlarım',gifts:'yaratıcılık · cömertlik · özgüven',shadow:'Gurur',color:'#e6a657',slug:'aslan'},
  {name:'Başak',glyph:'♍',dates:'23 Ağustos — 22 Eylül',start:[8,23],end:[9,22],element:'Toprak',mode:'Değişken',ruler:'Merkür',motto:'İyileştiririm',gifts:'özen · analiz · hizmet',shadow:'Aşırı eleştiri',color:'#b6a77a',slug:'basak'},
  {name:'Terazi',glyph:'♎',dates:'23 Eylül — 22 Ekim',start:[9,23],end:[10,22],element:'Hava',mode:'Öncü',ruler:'Venüs',motto:'Dengelerim',gifts:'zarafet · adalet · uyum',shadow:'Kararsızlık',color:'#d89db1',slug:'terazi'},
  {name:'Akrep',glyph:'♏',dates:'23 Ekim — 21 Kasım',start:[10,23],end:[11,21],element:'Su',mode:'Sabit',ruler:'Plüton · Mars',motto:'Dönüşürüm',gifts:'derinlik · sadakat · direnç',shadow:'Kontrol',color:'#a76b79',slug:'akrep'},
  {name:'Yay',glyph:'♐',dates:'22 Kasım — 21 Aralık',start:[11,22],end:[12,21],element:'Ateş',mode:'Değişken',ruler:'Jüpiter',motto:'Keşfederim',gifts:'iyimserlik · vizyon · macera',shadow:'Ölçüsüzlük',color:'#c88dcc',slug:'yay'},
  {name:'Oğlak',glyph:'♑',dates:'22 Aralık — 19 Ocak',start:[12,22],end:[1,19],element:'Toprak',mode:'Öncü',ruler:'Satürn',motto:'İnşa ederim',gifts:'disiplin · sabır · sorumluluk',shadow:'Katılık',color:'#8fa28f',slug:'oglak'},
  {name:'Kova',glyph:'♒',dates:'20 Ocak — 18 Şubat',start:[1,20],end:[2,18],element:'Hava',mode:'Sabit',ruler:'Uranüs · Satürn',motto:'Yenilerim',gifts:'özgünlük · idealler · bağımsızlık',shadow:'Mesafe',color:'#72b3c4',slug:'kova'},
  {name:'Balık',glyph:'♓',dates:'19 Şubat — 20 Mart',start:[2,19],end:[3,20],element:'Su',mode:'Değişken',ruler:'Neptün · Jüpiter',motto:'Hissederim',gifts:'empati · hayal · teslimiyet',shadow:'Kaçış',color:'#8296c9',slug:'balik'}
];

const planets = [['☉','Güneş','Benlik · canlılık','Nasıl parladığını anlatır.'],['☽','Ay','Duygu · ihtiyaç','Güvende hissetme biçimin.'],['☿','Merkür','Zihin · iletişim','Nasıl düşündüğün ve anlattığın.'],['♀','Venüs','Değer · ilişki','Sevgi dilin ve estetik zevkin.'],['♂','Mars','Arzu · eylem','Mücadele ve harekete geçme biçimin.'],['♃','Jüpiter','İnanç · genişleme','Büyüdüğün ve anlam bulduğun alan.'],['♄','Satürn','Sınır · ustalık','Sabırla yapı kurduğun yer.'],['♅','Uranüs','Özgürlük · uyanış','Kalıpları kıran yenilik dürtüsü.'],['♆','Neptün','İmge · çözülme','Hayal, sezgi ve idealler.'],['♇','Plüton','Güç · dönüşüm','Derin değişim ve yeniden doğuş.']];
const houses = ['Benlik & görünüş','Para & değerler','Zihin & yakın çevre','Yuva & kökler','Yaratıcılık & aşk','Rutin & sağlık','İlişkiler & ortaklık','Paylaşım & dönüşüm','İnanç & uzaklar','Kariyer & itibar','Topluluk & gelecek','Bilinçdışı & kapanış'];
const aspects = [['☌','Kavuşum','0°','Enerjiler birleşir'],['⚹','Sekstil','60°','Fırsat ve akış'],['□','Kare','90°','Gerilim ve hareket'],['△','Üçgen','120°','Doğal yetenek'],['☍','Karşıt','180°','Denge ve farkındalık']];

let activeElement = 'Tümü';
const signGrid = document.querySelector('#signGrid');

function renderFilters(){
  document.querySelector('#filters').innerHTML = ['Tümü','Ateş','Toprak','Hava','Su'].map(x => `<button type="button" class="${x===activeElement?'active':''}" data-element="${x}">${x}</button>`).join('');
}
function renderSigns(){
  const visible = activeElement === 'Tümü' ? signs : signs.filter(s => s.element === activeElement);
  signGrid.innerHTML = visible.map((s,i) => `<a href="burclar/${s.slug}.html" class="sign-card" style="--accent:${s.color}"><span class="card-no">${String(i+1).padStart(2,'0')}</span><span class="glyph">${s.glyph}</span><h3>${s.name}</h3><p>${s.dates}</p><div class="tags"><span>${s.element}</span><span>${s.mode}</span></div><span class="card-arrow">↗</span></a>`).join('');
}
function findSign(value){
  if(!value) return null;
  const parts=value.split('-').map(Number), m=parts[1], d=parts[2];
  return signs.find(s => s.start[0] <= s.end[0] ? (m>s.start[0]||m===s.start[0]&&d>=s.start[1])&&(m<s.end[0]||m===s.end[0]&&d<=s.end[1]) : (m>s.start[0]||m===s.start[0]&&d>=s.start[1])||(m<s.end[0]||m===s.end[0]&&d<=s.end[1]));
}

const elFilters = document.querySelector('#filters');
if (elFilters) {
  elFilters.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (!b) return;
    activeElement = b.dataset.element;
    renderFilters();
    renderSigns();
  });
}

const elBirthdate = document.querySelector('#birthdate');
if (elBirthdate) {
  elBirthdate.addEventListener('change', e => {
    const s = findSign(e.target.value);
    document.querySelector('#foundSign').innerHTML = s ? `<div class="found"><span>${s.glyph}</span><div><small>GÜNEŞ BURCUN</small><strong>${s.name}</strong><p>${s.motto} · ${s.element} · ${s.ruler}</p><a href="burclar/${s.slug}.html" class="text-link" style="color: var(--gold-bright); margin-top: 10px; display: inline-block;">Detaylı Analizi Oku →</a></div></div>` : '<p class="date-hint">Takvimden bir tarih seç.</p>';
  });
}

const elMenuButton = document.querySelector('#menuButton');
if (elMenuButton) {
  elMenuButton.addEventListener('click',()=>{const nav=document.querySelector('#mainNav'),open=nav.classList.toggle('open');elMenuButton.setAttribute('aria-expanded',String(open));elMenuButton.textContent=open?'Kapat':'Menü';});
  document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#mainNav').classList.remove('open');elMenuButton.setAttribute('aria-expanded','false');elMenuButton.textContent='Menü';}));
}

const elPlanetList = document.querySelector('#planetList');
if (elPlanetList) {
  elPlanetList.innerHTML=planets.map(p=>`<article><span>${p[0]}</span><div><h3>${p[1]}</h3><small>${p[2]}</small></div><p>${p[3]}</p></article>`).join('');
}

const elHousesGrid = document.querySelector('#housesGrid');
if (elHousesGrid) {
  elHousesGrid.innerHTML=houses.map((h,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><h3>${h}</h3></article>`).join('');
}

const elAspectRow = document.querySelector('#aspectRow');
if (elAspectRow) {
  elAspectRow.innerHTML=aspects.map(a=>`<article><span>${a[0]}</span><h3>${a[1]}</h3><b>${a[2]}</b><p>${a[3]}</p></article>`).join('');
}

const elYear = document.querySelector('#year');
if (elYear) {
  elYear.textContent=new Date().getFullYear();
}

if (document.querySelector('#filters') && document.querySelector('#signGrid')) {
  renderFilters();
  renderSigns();
}

// Canlı Gökyüzü Transit Hesaplamaları
if (document.getElementById("liveMoonPhaseName")) {
  const now = new Date();
  let calculated = false;
  let jdNew = null;
  let sunLong = 0, moonLong = 0;
  let moonSign = null;

  // 1. AstroAdapter (Yeni Motor) ile hesaplamayı dene
  if (typeof AstroAdapter !== 'undefined') {
    try {
      jdNew = AstroAdapter.getJulianDate(now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), 3.0);
      sunLong = AstroAdapter.getSunLongitude(jdNew);
      moonLong = AstroAdapter.getMoonLongitude(jdNew);
      moonSign = AstroAdapter.getZodiacSign(moonLong);
      calculated = true;
    } catch (e) {
      console.warn("AstroAdapter live transit calculation failed, falling back to AstroCalc:", e);
    }
  }

  // 2. Fallback: AstroCalc
  if (!calculated) {
    const jdOld = AstroCalc.getJulianDate(now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), 3.0);
    sunLong = AstroCalc.getSunLongitude(jdOld);
    moonLong = AstroCalc.getMoonLongitude(jdOld);
    moonSign = AstroCalc.getZodiacSign(moonLong);
  }

  // Derece ve Aydınlık Oranı Hesapla
  let angle = AstroCalc.norm360(moonLong - sunLong);
  let radAngle = angle * Math.PI / 180;
  let illum = Math.round(50 * (1 - Math.cos(radAngle)));
  
  let phaseName = "";
  let icon = "☽";
  
  if (angle >= 355 || angle < 5) { phaseName = "Yeniay (Yaklaşık)"; icon = "🌑"; }
  else if (angle >= 5 && angle < 85) { phaseName = "Hilal (Büyüyen - Yaklaşık)"; icon = "🌒"; }
  else if (angle >= 85 && angle < 95) { phaseName = "İlk Dördün (Yaklaşık)"; icon = "🌓"; }
  else if (angle >= 95 && angle < 175) { phaseName = "Şişkin Ay (Yaklaşık)"; icon = "🌔"; }
  else if (angle >= 175 && angle < 185) { phaseName = "Dolunay (Yaklaşık)"; icon = "🌕"; }
  else if (angle >= 185 && angle < 265) { phaseName = "Küçülen Ay (Yaklaşık)"; icon = "🌖"; }
  else if (angle >= 265 && angle < 275) { phaseName = "Son Dördün (Yaklaşık)"; icon = "🌗"; }
  else { phaseName = "Hilal (Küçülen - Yaklaşık)"; icon = "🌘"; }
  
  document.getElementById("liveMoonPhaseName").textContent = phaseName;
  document.getElementById("liveMoonIcon").textContent = icon;
  document.getElementById("liveMoonIllum").textContent = `%${illum} Aydınlık`;
  
  document.getElementById("liveMoonSignName").textContent = moonSign.name;
  document.getElementById("liveMoonSignGlyph").textContent = moonSign.glyph;
  
  const signMeanings = {
    'Koç': 'Heyecanlı, cesur ve atılgan ruh hali.',
    'Boğa': 'Sakin, huzurlu ve konfor arayışı.',
    'İkizler': 'Meraklı, konuşkan ve aktif zihin.',
    'Yengeç': 'Hassas, korumacı ve yuvaya yönelim.',
    'Aslan': 'Gururlu, yaratıcı ve dikkat çekme isteği.',
    'Başak': 'Düzenleyici, titiz ve detaylara odaklı.',
    'Terazi': 'Zarif, uyumlu ve dengeli ilişkiler.',
    'Akrep': 'Derin, ketum ve sezgisel atmosfer.',
    'Yay': 'İyimser, özgür ve keşfetme arzusu.',
    'Oğlak': 'Disiplinli, ciddi ve iş odaklı yaklaşım.',
    'Kova': 'Özgün, arkadaş canlısı ve vizyoner.',
    'Balık': 'Hassas, hayalperest ve sezgisel hisler.'
  };
  document.getElementById("liveMoonSignMeaning").textContent = signMeanings[moonSign.name];

  // Gezegen Retrolarını Güncelle
  if (document.getElementById("liveRetroList")) {
    if (calculated && jdNew !== null) {
      try {
        let mercRetro = AstroAdapter.isPlanetRetrograde("mercury", jdNew);
        let marsRetro = AstroAdapter.isPlanetRetrograde("mars", jdNew);
        
        document.getElementById("retroMercury").innerHTML = `🔄 <strong>Merkür:</strong> ${mercRetro ? '<span style="color:var(--coral);">Retrograd (Geri Hareket)</span>' : 'Direkt Harekette'}`;
        document.getElementById("retroMars").innerHTML = `🔥 <strong>Mars:</strong> ${marsRetro ? '<span style="color:var(--coral);">Retrograd (Geri Hareket)</span>' : 'Direkt Harekette'}`;
        
        let outerRetros = [];
        const outers = { jupiter: "Jüpiter", saturn: "Satürn", uranus: "Uranüs", neptune: "Neptün", pluto: "Plüton" };
        for (let key in outers) {
          if (AstroAdapter.isPlanetRetrograde(key, jdNew)) {
            outerRetros.push(outers[key]);
          }
        }
        document.getElementById("retroOuter").innerHTML = `🌌 <strong>Geri Gidenler:</strong> ${outerRetros.length > 0 ? outerRetros.join(", ") : 'Tümü Direkt Harekette'}`;
      } catch (retroErr) {
        console.warn("Retro calculation failed:", retroErr);
        document.getElementById("retroMercury").innerHTML = `🔄 <strong>Merkür:</strong> Direkt Harekette (Yaklaşık)`;
        document.getElementById("retroMars").innerHTML = `🔥 <strong>Mars:</strong> Direkt Harekette (Yaklaşık)`;
        document.getElementById("retroOuter").innerHTML = `🌌 <strong>Dış Gezegenler:</strong> Satürn R (Yaklaşık)`;
      }
    } else {
      document.getElementById("retroMercury").innerHTML = `🔄 <strong>Merkür:</strong> Direkt Harekette (Yaklaşık)`;
      document.getElementById("retroMars").innerHTML = `🔥 <strong>Mars:</strong> Direkt Harekette (Yaklaşık)`;
      document.getElementById("retroOuter").innerHTML = `🌌 <strong>Dış Gezegenler:</strong> Satürn R (Yaklaşık)`;
    }
  }
}


// PWA Service Worker Kaydı (Development ve file:// protokolünde engellenir)
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);
const isFileProtocol = window.location.protocol === 'file:';

if ('serviceWorker' in navigator && !isLocalhost && !isFileProtocol) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => {
        console.log('Service Worker registered.');

        // Yeni güncelleme kontrolü
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              showUpdateToast(reg);
            }
          });
        });

        if (reg.waiting) {
          showUpdateToast(reg);
        }
      })
      .catch(err => console.log('Service Worker registration failed:', err));
  });

  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      window.location.reload();
      refreshing = true;
    }
  });
}

function showUpdateToast(registration) {
  if (document.getElementById('pwa-update-toast')) return;

  const toast = document.createElement('div');
  toast.id = 'pwa-update-toast';
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.background = 'rgba(11, 15, 25, 0.95)';
  toast.style.border = '1px solid #d4af37';
  toast.style.color = '#fff';
  toast.style.padding = '15px 20px';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
  toast.style.zIndex = '10000';
  toast.style.fontFamily = "'Outfit', sans-serif";
  toast.style.display = 'flex';
  toast.style.alignItems = 'center';
  toast.style.gap = '15px';
  toast.style.backdropFilter = 'blur(10px)';
  toast.style.transition = 'all 0.3s ease';

  toast.innerHTML = `
    <span style="font-size: 0.95rem; font-weight: 500;">Yeni bir sürüm mevcut!</span>
    <button id="pwa-update-btn" style="background: #d4af37; border: none; color: #030610; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-family: 'Cinzel', serif; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.05em; transition: all 0.2s;">GÜNCELLE</button>
  `;
  document.body.appendChild(toast);

  document.getElementById('pwa-update-btn').addEventListener('click', () => {
    if (registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  });
}

function toggleStep(index) {
  const stepItems = document.querySelectorAll('.steps li');
  stepItems.forEach((item, idx) => {
    const body = item.querySelector('.step-body');
    if (idx === index) {
      const isActive = item.classList.toggle('active');
      body.style.display = isActive ? 'block' : 'none';
    } else {
      item.classList.remove('active');
      body.style.display = 'none';
    }
  });
}

// --- Calendar Widgets Entegrasyonu ---
window.addEventListener('DOMContentLoaded', () => {
  const hasWidgets = document.getElementById('widgetGunes') || document.getElementById('widgetMoonPhase') || document.getElementById('widgetRetroList');
  if (hasWidgets) {
    const fallbackTimer = setTimeout(() => {
      showWidgetFallback();
    }, 2000);

    try {
      initCalendarWidgets();
      clearTimeout(fallbackTimer);
    } catch (err) {
      console.warn("Widget initialization error:", err);
      clearTimeout(fallbackTimer);
      showWidgetFallback();
    }
  }
});

function showWidgetFallback() {
  const fallbackHTML = '<div style="grid-column: 1 / -1; padding: 2rem; text-align: center; color: var(--muted); background: rgba(255,255,255,0.05); border-radius: 8px;">Canlı gökyüzü bilgisi şu anda hesaplanamadı. Aşağıdaki rehberlerden Ay fazları, retrolar ve transitleri okuyabilirsiniz.</div>';
  
  if (document.getElementById('widgetGunes')) {
    const grid1 = document.getElementById('widgetGunes').closest('.widget-grid');
    if (grid1) grid1.innerHTML = fallbackHTML;
  }
  if (document.getElementById('widgetMoonPhase')) {
    const grid2 = document.getElementById('widgetMoonPhase').closest('.widget-grid');
    if (grid2) grid2.innerHTML = fallbackHTML;
  }
  if (document.getElementById('widgetRetroList')) {
    const grid3 = document.getElementById('widgetRetroList').closest('.widget-grid');
    if (grid3) grid3.innerHTML = fallbackHTML;
  }
}

function initCalendarWidgets() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();

  let jd = null;
  let calculated = false;
  let sunLong = 0, moonLong = 0;
  let sunSign = { name: "Koç", glyph: "♈" };
  let moonSign = { name: "Koç", glyph: "♈" };

  // 1. AstroAdapter ile Hesapla
  if (typeof AstroAdapter !== 'undefined') {
    try {
      jd = AstroAdapter.getJulianDate(year, month, day, hour, minute, 3.0);
      sunLong = AstroAdapter.getSunLongitude(jd);
      moonLong = AstroAdapter.getMoonLongitude(jd);
      sunSign = AstroAdapter.getZodiacSign(sunLong);
      moonSign = AstroAdapter.getZodiacSign(moonLong);
      calculated = true;
    } catch (e) {
      console.warn("AstroAdapter failed in widgets, falling back:", e);
    }
  }

  // 2. Fallback: AstroCalc
  if (!calculated) {
    try {
      const jdOld = AstroCalc.getJulianDate(year, month, day, hour, minute, 3.0);
      sunLong = AstroCalc.getSunLongitude(jdOld);
      moonLong = AstroCalc.getMoonLongitude(jdOld);
      sunSign = AstroCalc.getZodiacSign(sunLong);
      moonSign = AstroCalc.getZodiacSign(moonLong);
    } catch (e) {
      console.warn("AstroCalc fallback failed:", e);
      sunLong = 120.0;
      moonLong = 240.0;
    }
  }

  // Ay Fazı ve Aydınlık
  let angle = AstroCalc.norm360(moonLong - sunLong);
  let radAngle = angle * Math.PI / 180;
  let illum = Math.round(50 * (1 - Math.cos(radAngle)));
  
  let phaseName = "";
  let emoji = "🌑";
  if (angle >= 355 || angle < 5) { phaseName = "Yeniay"; emoji = "🌑"; }
  else if (angle >= 5 && angle < 85) { phaseName = "Büyüyen Hilal"; emoji = "🌒"; }
  else if (angle >= 85 && angle < 95) { phaseName = "İlk Dördün"; emoji = "🌓"; }
  else if (angle >= 95 && angle < 175) { phaseName = "Şişkin Ay"; emoji = "🌔"; }
  else if (angle >= 175 && angle < 185) { phaseName = "Dolunay"; emoji = "🌕"; }
  else if (angle >= 185 && angle < 265) { phaseName = "Küçülen Ay"; emoji = "🌖"; }
  else if (angle >= 265 && angle < 275) { phaseName = "Son Dördün"; emoji = "🌗"; }
  else { phaseName = "Balsamik Hilal"; emoji = "🌘"; }

  // --- WIDGET 1: astroloji-takvimi.html ---
  if (document.getElementById('widgetGunes')) {
    document.getElementById('widgetGunes').textContent = `${sunSign.glyph} ${sunSign.name}`;
    document.getElementById('widgetAy').textContent = `${moonSign.glyph} ${moonSign.name}`;
    document.getElementById('widgetAyFazi').textContent = `${emoji} ${phaseName} (%${illum})`;
    
    // Retro Sayısı
    let retroCount = 0;
    if (calculated && jd !== null) {
      try {
        const planets = ["mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
        planets.forEach(p => {
          if (AstroAdapter.isPlanetRetrograde(p, jd)) retroCount++;
        });
      } catch (err) {
        retroCount = 1;
      }
    }
    document.getElementById('widgetRetroSayisi').textContent = `${retroCount} Gezegen`;
  }

  // --- WIDGET 2: ay-takvimi.html ---
  if (document.getElementById('widgetMoonPhase')) {
    document.getElementById('widgetMoonEmoji').textContent = emoji;
    document.getElementById('widgetMoonPhase').textContent = `${phaseName} (Yaklaşık)`;
    document.getElementById('widgetMoonIllum').textContent = `%${illum} Aydınlık`;
  }

  // --- Scan New/Full Crossing (for Widget 1 & Widget 2) ---
  let nextNewJd = null;
  let nextFullJd = null;
  if (calculated && jd !== null) {
    try {
      let prevAngle = angle;
      for (let step = 1; step <= 300; step++) {
        let scanJd = jd + (step * 0.1);
        let sL = AstroAdapter.getSunLongitude(scanJd);
        let mL = AstroAdapter.getMoonLongitude(scanJd);
        let scanAngle = AstroCalc.norm360(mL - sL);
        
        if (nextNewJd === null && prevAngle > 350 && scanAngle < 10) {
          nextNewJd = scanJd;
        }
        if (nextFullJd === null && prevAngle < 180 && scanAngle >= 180) {
          nextFullJd = scanJd;
        }
        if (nextNewJd !== null && nextFullJd !== null) break;
        prevAngle = scanAngle;
      }
    } catch (scanErr) {
      console.warn("Scan failed:", scanErr);
    }
  }

  const formatJd = (targetJd) => {
    if (!targetJd) return "Yakında (Yaklaşık)";
    try {
      const timeObj = new Astronomy.AstroTime(targetJd);
      return timeObj.date.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return "Yakında (Yaklaşık)";
    }
  };

  const nextNewStr = formatJd(nextNewJd);
  const nextFullStr = formatJd(nextFullJd);

  if (document.getElementById('widgetNextNew')) {
    document.getElementById('widgetNextNew').textContent = nextNewStr;
    document.getElementById('widgetNextFull').textContent = nextFullStr;
  }

  if (document.getElementById('widgetKozmikOlay')) {
    if (nextNewJd && nextFullJd) {
      if (nextNewJd < nextFullJd) {
        document.getElementById('widgetKozmikOlay').textContent = `🌑 Yeniay: ${nextNewStr}`;
      } else {
        document.getElementById('widgetKozmikOlay').textContent = `🌕 Dolunay: ${nextFullStr}`;
      }
    } else {
      document.getElementById('widgetKozmikOlay').textContent = "Yeniay veya Dolunay (Yaklaşıyor)";
    }
  }

  // --- WIDGET 3: retro-takvimi.html ---
  if (document.getElementById('widgetRetroList')) {
    let retroList = [];
    if (calculated && jd !== null) {
      try {
        const trPlanets = {
          mercury: "Merkür ☿",
          venus: "Venüs ♀",
          mars: "Mars ♂",
          jupiter: "Jüpiter ♃",
          saturn: "Satürn ♄",
          uranus: "Uranüs ♅",
          neptune: "Neptün ♆",
          pluto: "Plüton ♇"
        };
        for (let key in trPlanets) {
          if (AstroAdapter.isPlanetRetrograde(key, jd)) {
            retroList.push(trPlanets[key]);
          }
        }
      } catch (err) {
        retroList = ["Satürn ♄"];
      }
    }
    
    const displayList = document.getElementById('widgetRetroList');
    if (retroList.length > 0) {
      displayList.innerHTML = retroList.map(p => `<span class="badge" style="margin: 0.2rem; background: rgba(231,76,60,0.2); border: 1px solid #e74c3c; color: #fff; padding: 0.4rem 0.8rem; border-radius: 4px; display: inline-block;">${p} 🔄</span>`).join(' ');
    } else {
      displayList.textContent = "Şu an seçili gezegenlerde retro görünmüyor. Tüm gezegenler düz harekette.";
    }
  }
}
