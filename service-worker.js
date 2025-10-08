const CACHE_NAME = 'doormmigo-cache-v1';
const urlsToCache = [
  '/doormigo/index.html',
  '/doormigo/style.css',
  '/doormigo/script.js',
  '/doormigo/icon-192.png',
  '/doormigo/icon-512.png'
];

self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

