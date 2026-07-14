// Zodyak Atlası - Bağımsız Referans Veri Seti Şablonu (Faz 4A-0.5)
// Bu dosya, 30 test profilinin bağımsız Swiss Ephemeris referans verileri için şablon yapıyı içerir.
// Tüm profiller başlangıçta "missing_reference" olarak işaretlenmiştir.

const GoldenDatasetTemplate = [
  {
    profileId: 1,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/Oslo",
    julianDateUtc: 2446232.020833,
    positions: {
      sun: null,
      moon: null,
      mercury: null,
      venus: null,
      mars: null,
      jupiter: null,
      saturn: null,
      uranus: null,
      neptune: null,
      pluto: null
    },
    angles: {
      asc: null,
      mc: null
    },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Kuzey Yüksek Enlem (Tromsø, Norveç) - Placidus ve ev sıkışmaları testi",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 2,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "America/Argentina/Ushuaia",
    julianDateUtc: 2453725.71875,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Güney Yarımküre (Ushuaia, Arjantin) - Enlem yön tayini testi",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 3,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Asia/Jakarta",
    julianDateUtc: 2455276.708333,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Ekvatora Yakın Konum (Pontianak, Endonezya) - ASC salınım testi",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 4,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/Istanbul",
    julianDateUtc: 2451265.479167,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Tarihsel DST Geçişi (İstanbul, Türkiye) - DST ileri alınma sınırı",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 5,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/Istanbul",
    julianDateUtc: 2458437.791667,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Türkiye 2016 Sonrası (Ankara, Türkiye) - Kalıcı UTC+3 uygulaması",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 6,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/Istanbul",
    julianDateUtc: 2442423.489583,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Türkiye Tarihsel Fark (İzmir, Türkiye) - Geçmiş standart kış saati",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 7,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/London",
    julianDateUtc: 2451544.498611,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Gece Yarısına Yakın (Londra, İngiltere) - Yıl/gün geçişi doğrulaması",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 8,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "America/New_York",
    julianDateUtc: 2461235.883333,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Ay Burç Değişimi (New York, ABD) - İkizler/Yengeç geçiş sınırı",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 9,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/Paris",
    julianDateUtc: 2459344.752778,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "ASC Burç Değişimi (Paris, Fransa) - Koç/Boğa yükselen geçiş sınırı",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 10,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Asia/Tokyo",
    julianDateUtc: 2460180.25,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Retro Başlangıcı (Tokyo, Japonya) - Merkür durağan retro başlangıcı",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 11,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/Berlin",
    julianDateUtc: 2460202.583333,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Retro Bitişi (Berlin, Almanya) - Merkür durağan retro bitişi",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 12,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/Istanbul",
    julianDateUtc: 2431590.770833,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "1950 Öncesi Tarih (İstanbul, Türkiye) - Tarihsel timezone verisi",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 13,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Australia/Sydney",
    julianDateUtc: 2470170.041667,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "2050 Sonrası (Sidney, Avustralya) - Yüzyıllık yörünge oranı doğrulaması",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 14,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "America/Lima",
    julianDateUtc: 2448119.447917,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Ekvator Altı Pasifik (Lima, Peru) - Batı boylamı/güney enlem testi",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 15,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Asia/Vladivostok",
    julianDateUtc: 2447262.760417,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Doğu Rusya Aşırı TZ (Vladivostok, Rusya) - Yüksek boylam ve yüksek saat dilimi",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 16,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/London",
    julianDateUtc: 2459021.458333,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Sıfır Boylam / TZ (Greenwich, İngiltere) - Meridyen başlangıcı ve ekinoks",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 17,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Pacific/Fiji",
    julianDateUtc: 2456109.1875,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Gün Değişim Çizgisi (Suva, Fiji) - Tarih çizgisine en yakın konum testi",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 18,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "America/Phoenix",
    julianDateUtc: 2451729.916667,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Arizona (Phoenix, ABD) - DST uygulamayan özel bölge kontrolü",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 19,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Asia/Kolkata",
    julianDateUtc: 2432412.271528,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Hindistan 30dk Offset (Yeni Delhi, Hindistan) - Yarım saatlik offset",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 20,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Asia/Kathmandu",
    julianDateUtc: 2458849.640625,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Nepal 45dk Offset (Katmandu, Nepal) - Çeyrek saatlik offset",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 21,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/Moscow",
    julianDateUtc: 2461396.041667,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Kış Gündönümü Anı (Moskova, Rusya) - Güneş'in 0°00' Oğlak anı",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 22,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Africa/Cairo",
    julianDateUtc: 2461213.145833,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Yaz Gündönümü Anı (Kahire, Mısır) - Güneş'in 0°00' Yengeç anı",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 23,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/Rome",
    julianDateUtc: 2460027.052083,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Plüton Burç Değişimi (Roma, İtalya) - Oğlak/Kova sınır geçiş testi",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 24,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "America/New_York",
    julianDateUtc: 2454037.749306,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Kuzey Amerika Doğu (Boston, ABD) - Sonbahar saati geri alınma anı",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 25,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Asia/Shanghai",
    julianDateUtc: 2448657.145833,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Çin Yeni Yılı Sınırı (Pekin, Çin) - Çin burcu sınır geçişi",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 26,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/Istanbul",
    julianDateUtc: 2455648.625,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Türkiye 2011 DST Gecikmesi (Bursa, Türkiye) - YGS sınavı anomalisi",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 27,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Africa/Johannesburg",
    julianDateUtc: 2457305.888889,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Güney Afrika (Cape Town, G. Afrika) - Güney yarımküre standart zaman",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 28,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Atlantic/Reykjavik",
    julianDateUtc: 2449920.25,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "İzlanda (Reykjavik, İzlanda) - Sürekli UTC+0 / DST'sizlik kuralı",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 29,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "Europe/Istanbul",
    julianDateUtc: 2460143.208333,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Ay Düğümü Burç Değişimi (Adana, Türkiye) - Boğa/Koç geçiş sınırı",
    verificationStatus: "missing_reference"
  },
  {
    profileId: 30,
    sourceName: "Astrodienst / Swiss Ephemeris",
    sourceUrl: "https://www.astro.com",
    sourceDate: "2026-07-14",
    timezoneResolved: "America/Santiago",
    julianDateUtc: 2455454.895833,
    positions: {
      sun: null, moon: null, mercury: null, venus: null, mars: null,
      jupiter: null, saturn: null, uranus: null, neptune: null, pluto: null
    },
    angles: { asc: null, mc: null },
    houses: [null, null, null, null, null, null, null, null, null, null, null, null],
    notes: "Hızlı Yükselen G.Y. (Santiago, Şili) - Short ascension testi",
    verificationStatus: "missing_reference"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GoldenDatasetTemplate;
}
