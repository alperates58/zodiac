// Zodyak Atlası Astronomik Hesaplama Motoru (Pure JS)
// Yazan: Antigravity Team
// NASA JPL Keplerian orbital elements ve Meeus analytical formulas kullanılmıştır.

const AstroCalc = {
  // Burç isimleri ve glifleri
  zodiacs: [
    { name: 'Koç', glyph: '♈', start: 0 },
    { name: 'Boğa', glyph: '♉', start: 30 },
    { name: 'İkizler', glyph: '♊', start: 60 },
    { name: 'Yengeç', glyph: '♋', start: 90 },
    { name: 'Aslan', glyph: '♌', start: 120 },
    { name: 'Başak', glyph: '♍', start: 150 },
    { name: 'Terazi', glyph: '♎', start: 180 },
    { name: 'Akrep', glyph: '♏', start: 210 },
    { name: 'Yay', glyph: '♐', start: 240 },
    { name: 'Oğlak', glyph: '♑', start: 270 },
    { name: 'Kova', glyph: '♒', start: 300 },
    { name: 'Balık', glyph: '♓', start: 330 }
  ],

  // Dereceyi 0-360 arasına normalize et
  norm360(deg) {
    let out = deg % 360;
    if (out < 0) out += 360;
    return out;
  },

  // Dereceyi radyana çevir
  rad(deg) {
    return deg * Math.PI / 180;
  },

  // Radyanı dereceye çevir
  deg(rad) {
    return rad * 180 / Math.PI;
  },

  // Julian Date hesapla (Tarihsel saat dilimi uyumlu)
  getJulianDate(year, month, day, hour, minute, tzOffset) {
    // Saati UTC'ye çevir
    let decimalHour = hour + (minute / 60) - tzOffset;
    let y = year;
    let m = month;
    if (m <= 2) {
      y -= 1;
      m += 12;
    }
    let A = Math.floor(y / 100);
    let B = 2 - A + Math.floor(A / 4);
    let jd = Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + day + (decimalHour / 24.0) + B - 1524.5;
    return jd;
  },

  // Local Sidereal Time (LST) hesapla (Yıldız Saati)
  getLocalSiderealTime(jd, longitude) {
    let T = (jd - 2451545.0) / 36525.0;
    // Greenwich Mean Sidereal Time (GMST) in degrees
    let gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T - (T * T * T / 38710000.0);
    let lst = gmst + longitude;
    return this.norm360(lst);
  },

  // Ekliptik Eğikliği (Obliquity of Ecliptic)
  getObliquity(jd) {
    let T = (jd - 2451545.0) / 36525.0;
    // Epsilon in degrees
    return 23.4392911 - (46.8150 * T - 0.00059 * T * T + 0.001813 * T * T * T) / 3600.0;
  },

  // Güneş Boylamı (Sun geocentric longitude)
  getSunLongitude(jd) {
    let T = (jd - 2451545.0) / 36525.0;
    let L = 280.46646 + 36000.76983 * T + 0.0003032 * T * T;
    let M = 357.52911 + 35999.05029 * T - 0.0001537 * T * T;
    
    L = this.rad(this.norm360(L));
    M = this.rad(this.norm360(M));
    
    let C = (1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M) +
            (0.019993 - 0.000101 * T) * Math.sin(2 * M) +
            0.000289 * Math.sin(3 * M);
            
    let lambda = this.deg(L) + C;
    return this.norm360(lambda);
  },

  // Ay Boylamı (Moon geocentric longitude) - Truncated ELP-2000/85
  getMoonLongitude(jd) {
    let T = (jd - 2451545.0) / 36525.0;
    
    // Moon mean longitude
    let L_prime = 218.3164477 + 481267.88123421 * T;
    // Moon mean anomaly
    let M_prime = 134.9633964 + 477198.8675055 * T;
    // Sun mean anomaly
    let M = 357.5291092 + 35999.0502909 * T;
    // Moon mean elongation
    let D = 297.8501921 + 445267.1114034 * T;
    // Moon argument of latitude
    let F = 93.2720950 + 483202.0175381 * T;
    
    L_prime = this.rad(this.norm360(L_prime));
    M_prime = this.rad(this.norm360(M_prime));
    M = this.rad(this.norm360(M));
    D = this.rad(this.norm360(D));
    F = this.rad(this.norm360(F));
    
    // Basitleştirilmiş perturbasyon terimleri
    let lambda = this.deg(L_prime) +
                 6.289 * Math.sin(M_prime) -
                 1.274 * Math.sin(M_prime - 2 * D) +
                 0.658 * Math.sin(2 * D) +
                 0.214 * Math.sin(2 * M_prime) -
                 0.186 * Math.sin(M) -
                 0.114 * Math.sin(2 * F) +
                 0.058 * Math.sin(M_prime - 2 * D - M) +
                 0.057 * Math.sin(M_prime + 2 * D) +
                 0.053 * Math.sin(M_prime - M);
                 
    return this.norm360(lambda);
  },

  // Yükselen Burç (Ascendant) Hesapla
  getAscendant(jd, latitude, longitude) {
    let lst = this.getLocalSiderealTime(jd, longitude);
    let eps = this.getObliquity(jd);
    
    let lstRad = this.rad(lst);
    let epsRad = this.rad(eps);
    let latRad = this.rad(latitude);
    
    let denominator = Math.sin(lstRad) * Math.cos(epsRad) + Math.tan(latRad) * Math.sin(epsRad);
    let ascRad = Math.atan2(-Math.cos(lstRad), denominator);
    
    return this.norm360(this.deg(ascRad));
  },

  // Tepe Noktası (MC) Hesapla
  getMidheaven(jd, longitude) {
    let lst = this.getLocalSiderealTime(jd, longitude);
    let eps = this.getObliquity(jd);
    
    let lstRad = this.rad(lst);
    let epsRad = this.rad(eps);
    
    let mcRad = Math.atan2(Math.sin(lstRad), Math.cos(lstRad) * Math.cos(epsRad));
    return this.norm360(this.deg(mcRad));
  },

  // Boylamı Zodyak Burcuna Çevir (Örn: 145.2° -> Aslan 25.2°)
  getZodiacSign(longitude) {
    const norm = this.norm360(longitude);
    const index = Math.floor(norm / 30);
    const sign = this.zodiacs[index];
    const degree = norm - sign.start;
    
    // Derece, dakika, saniye formatı
    const degInt = Math.floor(degree);
    const minFloat = (degree - degInt) * 60;
    const minInt = Math.floor(minFloat);
    
    return {
      name: sign.name,
      glyph: sign.glyph,
      degree: degInt,
      minute: minInt,
      totalDegree: norm,
      index: index
    };
  },

  // 12 Ev Girişlerini (House Cusps) Hesapla (Whole Sign & Equal sistemleri)
  getHouseCusps(asc, system = 'Whole Sign') {
    let cusps = new Array(12);
    if (system === 'Whole Sign') {
      // ASC'nin bulunduğu burcun 0 derecesi 1. ev başlangıcıdır
      let ascSignIdx = Math.floor(asc / 30);
      for (let i = 0; i < 12; i++) {
        cusps[i] = this.norm360((ascSignIdx + i) * 30);
      }
    } else {
      // Eşit Ev (Equal): ASC derecesi 1. ev başlangıcıdır, her ev tam 30 derecedir
      for (let i = 0; i < 12; i++) {
        cusps[i] = this.norm360(asc + i * 30);
      }
    }
    return cusps;
  },

  // Gezegenin hangi evde olduğunu bul
  getHouseOfPlanet(planetLong, cusps) {
    for (let i = 0; i < 12; i++) {
      let start = cusps[i];
      let end = cusps[(i + 1) % 12];
      
      if (start < end) {
        if (planetLong >= start && planetLong < end) return i + 1;
      } else {
        // 360 derece geçişi
        if (planetLong >= start || planetLong < end) return i + 1;
      }
    }
    return 1;
  },

  // Keplerian orbital elements yardımıyla diğer gezegenleri yaklaşık hesapla
  getPlanetaryPositions(jd) {
    // J2000'den beri geçen yüzyıllar
    let T = (jd - 2451545.0) / 36525.0;
    
    // [a (AU), e, i (deg), L (deg), w (deg), N (deg)] + rate per century
    const elements = {
      mercury: {
        a: 0.38709893, e: 0.20563069, i: 7.00487, L: 252.25084, w: 77.45645, N: 48.33167,
        da: 0, de: 0.0000204, di: -0.00594, dL: 149472.67411, dw: 0.15901, dN: -0.12536
      },
      venus: {
        a: 0.72333199, e: 0.00677323, i: 3.39471, L: 181.97973, w: 131.53298, N: 76.68069,
        da: 0, de: -0.0000477, di: -0.00078, dL: 58517.81538, dw: 0.00213, dN: -0.27769
      },
      mars: {
        a: 1.52366231, e: 0.09341233, i: 1.85061, L: 355.45332, w: 336.04084, N: 49.57854,
        da: 0, de: 0.0001190, di: -0.00724, dL: 19140.30268, dw: 0.44388, dN: -0.29496
      },
      jupiter: {
        a: 5.20336301, e: 0.04839266, i: 1.30530, L: 34.40438, w: 14.75385, N: 100.55615,
        da: 0.000607, de: -0.000128, di: -0.00415, dL: 3034.74612, dw: 0.19111, dN: 0.20405
      },
      saturn: {
        a: 9.53707032, e: 0.05415060, i: 2.48446, L: 49.94432, w: 92.43194, N: 113.71504,
        da: -0.003015, de: -0.000367, di: 0.00193, dL: 1222.11379, dw: -0.41897, dN: -0.28899
      },
      uranus: {
        a: 19.19126393, e: 0.04716771, i: 0.76986, L: 313.23218, w: 170.96424, N: 74.22988,
        da: 0.00152, de: -0.000191, di: -0.00269, dL: 428.48202, dw: 0.52150, dN: -0.09033
      },
      neptune: {
        a: 30.06896348, e: 0.00858587, i: 1.76917, L: 304.88003, w: 44.97135, N: 131.72169,
        da: -0.00125, de: 0.0000251, di: -0.00097, dL: 218.45945, dw: -0.32241, dN: -0.00539
      }
    };

    // Earth (heliocentric calculation context)
    const earth = {
      a: 1.00000011, e: 0.01671022, i: 0.0, L: 100.46435, w: 102.94719, N: 0.0,
      da: 0, de: -0.0000380, di: 0.0, dL: 35999.37245, dw: 0.32327, dN: 0.0
    };

    // Heliosentrik koordinat hesaplama fonksiyonu
    const getHeliocentric = (el) => {
      let a = el.a + el.da * T;
      let e = el.e + el.de * T;
      let i = this.rad(el.i + el.di * T);
      let L = this.rad(this.norm360(el.L + el.dL * T));
      let w = this.rad(this.norm360(el.w + el.dw * T));
      let N = this.rad(this.norm360(el.N + el.dN * T));

      let M = L - w;
      // Kepler denklemini çöz: E - e sin E = M
      let E = M;
      for (let j = 0; j < 5; j++) {
        E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
      }

      // Yörünge düzleminde koordinatlar
      let xv = a * (Math.cos(E) - e);
      let yv = a * Math.sqrt(1 - e * e) * Math.sin(E);

      // Ekliptik düzlemine rotasyon
      let u = w - N;
      let r = Math.sqrt(xv*xv + yv*yv);
      let trueAnomaly = Math.atan2(yv, xv);
      
      let x = r * (Math.cos(N) * Math.cos(trueAnomaly + u) - Math.sin(N) * Math.sin(trueAnomaly + u) * Math.cos(i));
      let y = r * (Math.sin(N) * Math.cos(trueAnomaly + u) + Math.cos(N) * Math.sin(trueAnomaly + u) * Math.cos(i));
      let z = r * Math.sin(trueAnomaly + u) * Math.sin(i);

      return { x, y, z };
    };

    // Dünya'nın Heliosentrik koordinatları
    let coordEarth = getHeliocentric(earth);

    let positions = {};
    
    // Diğer gezegenleri hesapla
    Object.keys(elements).forEach(planetName => {
      let coordPlanet = getHeliocentric(elements[planetName]);
      
      // Jeosentrik (Dünya merkezli) koordinatlara dönüştür
      let x_geo = coordPlanet.x - coordEarth.x;
      let y_geo = coordPlanet.y - coordEarth.y;
      
      // Ekliptik boylam
      let lambda = Math.atan2(y_geo, x_geo);
      positions[planetName] = this.norm360(this.deg(lambda));
    });

    return positions;
  }
};
