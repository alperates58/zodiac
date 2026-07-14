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

document.querySelector('#filters').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;activeElement=b.dataset.element;renderFilters();renderSigns();});
document.querySelector('#birthdate').addEventListener('change',e=>{
  const s=findSign(e.target.value);
  document.querySelector('#foundSign').innerHTML=s?`<div class="found"><span>${s.glyph}</span><div><small>GÜNEŞ BURCUN</small><strong>${s.name}</strong><p>${s.motto} · ${s.element} · ${s.ruler}</p><a href="burclar/${s.slug}.html" class="text-link" style="color: var(--gold-bright); margin-top: 10px; display: inline-block;">Detaylı Analizi Oku →</a></div></div>`:'<p class="date-hint">Takvimden bir tarih seç.</p>';
});
document.querySelector('#menuButton').addEventListener('click',()=>{const nav=document.querySelector('#mainNav'),open=nav.classList.toggle('open');document.querySelector('#menuButton').setAttribute('aria-expanded',String(open));document.querySelector('#menuButton').textContent=open?'Kapat':'Menü';});
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('#mainNav').classList.remove('open');document.querySelector('#menuButton').setAttribute('aria-expanded','false');document.querySelector('#menuButton').textContent='Menü';}));

document.querySelector('#planetList').innerHTML=planets.map(p=>`<article><span>${p[0]}</span><div><h3>${p[1]}</h3><small>${p[2]}</small></div><p>${p[3]}</p></article>`).join('');
document.querySelector('#housesGrid').innerHTML=houses.map((h,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><h3>${h}</h3></article>`).join('');
document.querySelector('#aspectRow').innerHTML=aspects.map(a=>`<article><span>${a[0]}</span><h3>${a[1]}</h3><b>${a[2]}</b><p>${a[3]}</p></article>`).join('');
document.querySelector('#year').textContent=new Date().getFullYear();
renderFilters();renderSigns();

// Canlı Gökyüzü Transit Hesaplamaları
if (document.getElementById("liveMoonPhaseName")) {
  const now = new Date();
  const jd = AstroCalc.getJulianDate(now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), 3.0);
  
  const sunLong = AstroCalc.getSunLongitude(jd);
  const moonLong = AstroCalc.getMoonLongitude(jd);
  
  const moonSign = AstroCalc.getZodiacSign(moonLong);
  const sunSign = AstroCalc.getZodiacSign(sunLong);
  
  let angle = AstroCalc.norm360(moonLong - sunLong);
  let illum = Math.round(50 * (1 - Math.cos(AstroCalc.rad(angle))));
  
  let phaseName = "";
  let icon = "☽";
  
  if (angle >= 355 || angle < 5) { phaseName = "Yeniay"; icon = "🌑"; }
  else if (angle >= 5 && angle < 85) { phaseName = "Hilal (Büyüyen)"; icon = "🌒"; }
  else if (angle >= 85 && angle < 95) { phaseName = "İlk Dördün"; icon = "🌓"; }
  else if (angle >= 95 && angle < 175) { phaseName = "Şişkin Ay"; icon = "🌔"; }
  else if (angle >= 175 && angle < 185) { phaseName = "Dolunay"; icon = "🌕"; }
  else if (angle >= 185 && angle < 265) { phaseName = "Küçülen Ay"; icon = "🌖"; }
  else if (angle >= 265 && angle < 275) { phaseName = "Son Dördün"; icon = "🌗"; }
  else { phaseName = "Hilal (Küçülen)"; icon = "🌘"; }
  
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
}


// PWA Service Worker Kaydı
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('Service Worker registered.'))
      .catch(err => console.log('Service Worker registration failed.'));
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
