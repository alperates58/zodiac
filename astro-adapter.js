// Astronomy Engine Adapter for Zodyak Atlası
// Yazan: Antigravity Team
// Astronomy Engine (astronomy.min.js) kütüphanesini Zodyak Atlası API'sine haritalar.
// Lisans: MIT (Don Cross / cosinekitty)

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['Astronomy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('./astronomy.min.js'));
  } else {
    root.AstroAdapter = factory(root.Astronomy);
  }
}(typeof self !== 'undefined' ? self : this, function (Astronomy) {
  if (!Astronomy) {
    if (typeof window !== 'undefined' && window.Astronomy) {
      Astronomy = window.Astronomy;
    } else {
      throw new Error("Astronomy Engine library (astronomy.min.js) must be loaded before astro-adapter.js");
    }
  }

  const AstroAdapter = {
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

    rad(deg) {
      return deg * Math.PI / 180;
    },

    deg(rad) {
      return rad * 180 / Math.PI;
    },

    // Julian Date hesaplama (TimeZone ve DST kaydırmasını çözümler)
    // DİKKAT: tzOffset sayısal saat farkıdır. IANA saat dilimi çözümlemesi SSG fazında yapılacaktır.
    getJulianDate(year, month, day, hour, minute, tzOffset) {
      // Yerel saati UTC saati cinsinden ondalıklı saate çevir
      let decimalHour = hour + (minute / 60) - tzOffset;
      
      // UTC tarihi oluştur
      let date = new Date(Date.UTC(year, month - 1, day));
      date.setUTCMilliseconds(date.getUTCMilliseconds() + decimalHour * 3600000);
      
      let time = new Astronomy.AstroTime(date);
      return time.ut; // J2000.0 epoch'undan beri geçen gün sayısı (negatif olabilir)
    },

    // Ekliptik Eğikliği (Obliquity of Ecliptic of date)
    getObliquity(jd) {
      let time = new Astronomy.AstroTime(jd);
      let tilt = Astronomy.e_tilt(time);
      return tilt.tobl; // Gerçek ekliptik eğikliği (of-date)
    },

    // Güneş Boylamı (Geocentric Ecliptic Longitude of date, Tropical)
    getSunLongitude(jd) {
      let time = new Astronomy.AstroTime(jd);
      let vec = Astronomy.GeoVector(Astronomy.Body.Sun, time, true);
      let coords = Astronomy.Ecliptic(vec);
      return this.norm360(coords.elon);
    },

    // Ay Boylamı (Geocentric Ecliptic Longitude of date, Tropical)
    getMoonLongitude(jd) {
      let time = new Astronomy.AstroTime(jd);
      let coords = Astronomy.EclipticGeoMoon(time);
      return this.norm360(coords.lon); // Moon için coords.lon kullanılır
    },

    // Gezegen Konumları (Geocentric Ecliptic Longitude of date, Tropical)
    getPlanetaryPositions(jd) {
      let time = new Astronomy.AstroTime(jd);
      const bodies = {
        mercury: Astronomy.Body.Mercury,
        venus: Astronomy.Body.Venus,
        mars: Astronomy.Body.Mars,
        jupiter: Astronomy.Body.Jupiter,
        saturn: Astronomy.Body.Saturn,
        uranus: Astronomy.Body.Uranus,
        neptune: Astronomy.Body.Neptune,
        pluto: Astronomy.Body.Pluto
      };

      let positions = {};
      Object.keys(bodies).forEach(key => {
        let vec = Astronomy.GeoVector(bodies[key], time, true);
        let coords = Astronomy.Ecliptic(vec);
        positions[key] = this.norm360(coords.elon);
      });

      return positions;
    },

    // Yükselen Burç (Ascendant)
    getAscendant(jd, latitude, longitude) {
      let time = new Astronomy.AstroTime(jd);
      // Yerel Yıldız Saati (LST) hesapla (Sidereal Time + Boylam)
      let lstHours = Astronomy.SiderealTime(time) + (longitude / 15);
      let lstRad = this.rad(this.norm360(lstHours * 15));
      let eps = this.getObliquity(jd);
      let epsRad = this.rad(eps);
      let latRad = this.rad(latitude);

      let denominator = Math.sin(lstRad) * Math.cos(epsRad) + Math.tan(latRad) * Math.sin(epsRad);
      let ascRad = Math.atan2(-Math.cos(lstRad), denominator);
      return this.norm360(this.deg(ascRad));
    },

    // Tepe Noktası (Midheaven - MC)
    getMidheaven(jd, longitude) {
      let time = new Astronomy.AstroTime(jd);
      let lstHours = Astronomy.SiderealTime(time) + (longitude / 15);
      let lstRad = this.rad(this.norm360(lstHours * 15));
      let eps = this.getObliquity(jd);
      let epsRad = this.rad(eps);

      let mcRad = Math.atan2(Math.sin(lstRad), Math.cos(lstRad) * Math.cos(epsRad));
      return this.norm360(this.deg(mcRad));
    },

    // Gezegenin Retro durumunu hız değişiminden (t ve t+dt karşılaştırarak) hesapla
    isPlanetRetrograde(bodyKey, jd) {
      const bodies = {
        mercury: Astronomy.Body.Mercury,
        venus: Astronomy.Body.Venus,
        mars: Astronomy.Body.Mars,
        jupiter: Astronomy.Body.Jupiter,
        saturn: Astronomy.Body.Saturn,
        uranus: Astronomy.Body.Uranus,
        neptune: Astronomy.Body.Neptune,
        pluto: Astronomy.Body.Pluto
      };
      
      const body = bodies[bodyKey];
      if (!body) return false;

      // jd ve jd + 0.005 gün (yaklaşık 7 dakika) arasındaki boylam farkını kıyasla
      let time1 = new Astronomy.AstroTime(jd);
      let time2 = new Astronomy.AstroTime(jd + 0.005);

      let vec1 = Astronomy.GeoVector(body, time1, true);
      let vec2 = Astronomy.GeoVector(body, time2, true);

      let coords1 = Astronomy.Ecliptic(vec1);
      let coords2 = Astronomy.Ecliptic(vec2);

      let diff = coords2.elon - coords1.elon;
      // 360 derece geçişini kontrol et
      if (diff > 180) diff -= 360;
      if (diff < -180) diff += 360;

      return diff < 0; // Boylam azalıyorsa gezegen retrodur.
    },

    // Boylamı Zodyak Burcuna Çevir (Derece & Dakika)
    getZodiacSign(longitude) {
      const norm = this.norm360(longitude);
      const index = Math.floor(norm / 30);
      const sign = this.zodiacs[index];
      const degree = norm - sign.start;
      
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
    }
  };

  return AstroAdapter;
}));
