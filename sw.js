const CACHE_NAME = 'zodiac-atlas-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/dogum-haritasi.html',
  '/uyum.html',
  '/testler.html',
  '/sozluk.html',
  '/cin-burclari.html',
  '/search.html',
  '/takvim.html',
  '/style.css',
  '/style-detail.css',
  '/script.js',
  '/testler.js',
  '/uyum.js',
  '/astro-calc.js',
  '/horoscope-tabs.js',
  '/data/cities.js',
  '/data/dictionary.js',
  '/data/planets.json',
  '/data/houses.json',
  '/data/famous.json',
  '/data/search-index.js',
  '/data/daily-horoscopes.js',
  '/data/compatibility-detail.js'
];

// Install Event
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event (Cache temizleme)
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch Event (Offline fallback)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});
