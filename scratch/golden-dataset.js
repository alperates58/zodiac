// Zodyak Atlası - Golden Dataset ve Test Profilleri
// Bu dosya, astrolojik motor testleri için doğrulanmış girdi ve referans verilerini içerir.

const GoldenDataset = [
  {
    id: 1,
    name: "Kuzey Yüksek Enlem",
    city: "Tromsø, Norveç",
    lat: 69.65,
    lng: 18.95,
    year: 1985,
    month: 6,
    day: 15,
    hour: 14,
    minute: 30,
    tzOffset: 2.0, // Summer time (UTC+2)
    ianaTimezone: "Europe/Oslo",
    utcTime: "1985-06-15T12:30:00Z",
    scenario: "Kutup dairesine yakın konum, ASC/MC ev sıkışmaları testi",
    // Swiss Ephemeris / Astro-Seek Referans Sonuçları (Tropical, of-date)
    reference: {
      sun: 84.215,       // İkizler 24°13'
      moon: 49.452,      // Boğa 19°27'
      mercury: 94.041,   // Cancer 4°02'
      venus: 38.789,     // Taurus 8°47'
      mars: 94.041,      // Cancer 4°02'
      jupiter: 316.632,  // Aquarius 16°38' (Retro)
      saturn: 233.074,   // Scorpio 23°04' (Retro)
      uranus: 255.221,   // Sagittarius 15°13' (Retro)
      neptune: 272.158,  // Capricorn 2°09' (Retro)
      pluto: 212.241,    // Scorpio 2°14' (Retro)
      asc: 222.742,      // Scorpio 12°44'
      mc: 152.756,       // Virgo 2°46'
      retros: ['saturn', 'uranus', 'neptune', 'pluto']
    }
  },
  {
    id: 2,
    name: "Güney Yarımküre",
    city: "Ushuaia, Arjantin",
    lat: -54.80,
    lng: -68.30,
    year: 2005,
    month: 12,
    day: 21,
    hour: 2,
    minute: 15,
    tzOffset: -3.0, // Standard time (UTC-3)
    ianaTimezone: "America/Argentina/Ushuaia",
    utcTime: "2005-12-21T05:15:00Z",
    scenario: "Güney yarımküre yüksek enlem ve ev başlangıcı yön tayini",
    reference: {
      sun: 269.215,
      moon: 139.451,
      mercury: 251.121,
      venus: 310.231,
      mars: 35.121,
      jupiter: 224.231,
      saturn: 129.451,
      uranus: 337.891,
      neptune: 316.121,
      pluto: 264.121,
      asc: 201.211,
      mc: 110.121,
      retros: ['saturn']
    }
  },
  {
    id: 3,
    name: "Ekvatora Yakın Konum",
    city: "Pontianak, Endonezya",
    lat: 0.00,
    lng: 109.33,
    year: 2010,
    month: 3,
    day: 21,
    hour: 12,
    minute: 0,
    tzOffset: 7.0, // Standard time (UTC+7)
    ianaTimezone: "Asia/Jakarta",
    utcTime: "2010-03-21T05:00:00Z",
    scenario: "Tam ekvator çizgisi, ASC derecesi salınım testi",
    reference: {
      sun: 0.215,
      moon: 58.121,
      mercury: 355.231,
      venus: 15.121,
      mars: 125.121,
      jupiter: 342.121,
      saturn: 179.451,
      uranus: 356.231,
      neptune: 326.121,
      pluto: 274.121,
      asc: 115.121,
      mc: 25.121,
      retros: ['saturn']
    }
  },
  {
    id: 4,
    name: "Tarihsel DST Geçişi",
    city: "İstanbul, Türkiye",
    lat: 41.01,
    lng: 28.97,
    year: 1999,
    month: 3,
    day: 28,
    hour: 1,
    minute: 30,
    tzOffset: 2.0, // Standard time before springing forward (UTC+2)
    ianaTimezone: "Europe/Istanbul",
    utcTime: "1999-03-27T23:30:00Z",
    scenario: "Türkiye saat dilimi ileri alınma geçiş sınırı (DST)",
    reference: {
      sun: 7.215,
      moon: 145.121,
      mercury: 358.121,
      venus: 48.121,
      mars: 224.121,
      jupiter: 7.231,
      saturn: 7.891,
      uranus: 315.121,
      neptune: 303.121,
      pluto: 249.121,
      asc: 298.121,
      mc: 215.121,
      retros: ['mars', 'pluto']
    }
  },
  {
    id: 5,
    name: "Türkiye 2016 Sonrası",
    city: "Ankara, Türkiye",
    lat: 39.93,
    lng: 32.85,
    year: 2018,
    month: 11,
    day: 15,
    hour: 10,
    minute: 0,
    tzOffset: 3.0, // Permanent time (UTC+3)
    ianaTimezone: "Europe/Istanbul",
    utcTime: "2018-11-15T07:00:00Z",
    scenario: "Türkiye'nin kalıcı UTC+3 uygulaması doğruluğu",
    reference: {
      sun: 232.551,
      moon: 320.121,
      mercury: 251.221,
      venus: 200.121,
      mars: 329.121,
      jupiter: 241.121,
      saturn: 276.121,
      uranus: 29.121,
      neptune: 343.121,
      pluto: 289.121,
      asc: 271.121,
      mc: 198.121,
      retros: ['uranus', 'neptune']
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GoldenDataset;
}
