const CACHE_NAME = 'zodiac-atlas-v1.8.0';
const OFFLINE_URL = '/offline.html';

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
  '/transitler.html',
  '/ay-fazlari.html',
  '/retrolar.html',
  '/dogum-haritasi-rehberi.html',
  '/elementler.html',
  '/nitelikler.html',
  '/gezegen-retrolari.html',
  '/ay-burclari.html',
  '/yukselen-burclar.html',
  '/burclar-ve-ask.html',
  '/burclar-ve-kariyer.html',
  '/burclar-ve-para.html',
  '/burclar-ve-saglik.html',
  '/burclar-ve-aile.html',
  '/astroloji-takvimi.html',
  '/ay-takvimi.html',
  '/retro-takvimi.html',
  '/burc-tarihleri.html',
  '/astrolojik-olaylar.html',
  '/yerlesimler.html',
  '/gezegen-burc-yerlesimleri.html',
  '/gezegen-ev-yerlesimleri.html',
  '/yerlesimler/gezegen-burc/index.html',
  '/yerlesimler/gezegen-ev/index.html',
  '/acilar/detay/index.html',
  '/element-nitelik-hesaplayici.html',
  '/ay-burcu-hesaplayici.html',
  '/yukselen-burc-hesaplayici.html',
  '/guncel-gokyuzu.html',
  '/hesaplayicilar.html',
  '/rehberler.html',
  '/astronomy.min.js',
  '/astro-adapter.js',
  OFFLINE_URL,
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

// Install Event - Cache critical assets
self.addEventListener('install', e => {
  self.skipWaiting(); // Force active state for local dev if waiting is not handled
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Warm up cache
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Handle incoming messages
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Fetch Event with strategic caching
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // 1. HTML Navigation Requests - Network First, fallback to offline page
  if (e.request.mode === 'navigate' || e.request.headers.get('accept').includes('text/html')) {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          // Update the cache with the fresh page
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If offline, try cache first, then fallback to offline page
          return caches.match(e.request).then(cachedResponse => {
            return cachedResponse || caches.match(OFFLINE_URL);
          });
        })
    );
    return;
  }

  // 2. Daily Horoscopes & Dynamic Data - Network First to ensure freshness
  if (url.pathname.includes('/data/daily-horoscopes') || url.pathname.includes('daily-horoscopes')) {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(e.request);
        })
    );
    return;
  }

  // 3. Static Assets (CSS, JS, Fonts, Images) - Stale-While-Revalidate
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      const fetchPromise = fetch(e.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(e.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Silent catch for network failure during background revalidation
      });

      return cachedResponse || fetchPromise;
    })
  );
});
