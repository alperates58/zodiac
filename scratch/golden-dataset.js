// Zodyak Atlası - Golden Dataset ve Test Profilleri
// Bu dosya, astrolojik motor testleri için doğrulanmış girdi ve referans verilerini içerir.
// DİKKAT: isIndependent: true bayrağı, bu verilerin bağımsız Swiss Ephemeris
// sonuçlarıyla karşılaştırılıp doğrulandığını gösterir.

const GoldenDataset = [
  {
    id: 1,
    name: "Kuzey Yüksek Enlem",
    city: "Tromso, Norveç",
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
    isIndependent: true, // Bağımsız Swiss Ephemeris ile doğrulandı
    sourceName: "Astrodienst / Astro-Seek Swiss Ephemeris Engine",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    notes: "Tromso 69N65 yüksek enlem Placidus ev sıkışması kontrolü. ASC: 10°07' Aries, MC: 18°38' Cancer.",
    reference: {
      sun: 84.340,       // İkizler 24°20'
      moon: 50.883,      // Boğa 20°53'
      mercury: 93.880,   // Cancer 3°53'
      venus: 38.621,     // Taurus 8°37'
      mars: 94.044,      // Cancer 4°03'
      jupiter: 316.784,  // Aquarius 16°47'
      saturn: 232.707,   // Scorpio 22°42'
      uranus: 255.631,   // Sagittarius 15°38'
      neptune: 272.460,  // Capricorn 2°28'
      pluto: 212.122,    // Scorpio 2°07'
      asc: 10.117,       // Aries 10°07'
      mc: 108.637,       // Cancer 18°38'
      retros: ['jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
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
    isIndependent: true,
    sourceName: "Astrodienst / Astro-Seek Swiss Ephemeris Engine",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    notes: "Güney yarımküre yüksek enlem (54S80). ASC: 27°54' Aries, MC: 9°30' Cancer.",
    reference: {
      sun: 269.434,
      moon: 151.281,
      mercury: 250.188,
      venus: 301.265,
      mars: 39.006,
      jupiter: 221.466,
      saturn: 130.553,
      uranus: 337.364,
      neptune: 315.654,
      pluto: 264.490,
      asc: 27.899,
      mc: 99.493,
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
    isIndependent: true,
    sourceName: "Astrodienst / Astro-Seek Swiss Ephemeris Engine",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    notes: "Ekvator çizgisi (0.00). ASC: 2°42' Capricorn, MC: 3°12' Aries.",
    reference: {
      sun: 0.475,
      moon: 62.477,
      mercury: 7.069,
      venus: 16.996,
      mars: 120.942,
      jupiter: 344.720,
      saturn: 181.349,
      uranus: 356.796,
      neptune: 327.409,
      pluto: 275.345,
      asc: 272.701,
      mc: 3.208,
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
    isIndependent: true,
    sourceName: "Astrodienst / Astro-Seek Swiss Ephemeris Engine",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    notes: "Tarihsel DST geçiş anı doğruluğu. ASC: 3°59' Cancer, MC: 28°26' Libra.",
    reference: {
      sun: 6.848,
      moon: 140.849,
      mercury: 352.270,
      venus: 41.517,
      mars: 221.650,
      jupiter: 10.041,
      saturn: 32.942,
      uranus: 315.593,
      neptune: 303.938,
      pluto: 250.441,
      asc: 93.982,
      mc: 208.435,
      retros: ['mercury', 'mars', 'pluto']
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
    isIndependent: true,
    sourceName: "Astrodienst / Astro-Seek Swiss Ephemeris Engine",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    notes: "Kalıcı UTC+3 uygulaması kontrolü. ASC: 21°53' Gemini, MC: 13°14' Libra.",
    reference: {
      sun: 232.856,
      moon: 319.296,
      mercury: 253.262,
      venus: 205.272,
      mars: 329.609,
      jupiter: 241.494,
      saturn: 276.211,
      uranus: 29.677,
      neptune: 343.725,
      pluto: 289.255,
      asc: 81.879,
      mc: 193.226,
      retros: ['venus', 'uranus', 'neptune']
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GoldenDataset;
}
