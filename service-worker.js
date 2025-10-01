const CACHE_NAME = 'doormmigo-cache-v1';
const urlsToCache = [
  '/DoorBuddyV2/',
  '/DoorBuddyV2/index.html',
  '/DoorBuddyV2/style.css',
  '/DoorBuddyV2/script.js',
  '/DoorBuddyV2/icon-192.png',
  '/DoorBuddyV2/icon-512.png'
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
