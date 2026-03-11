const CACHE_NAME = 'beltour-v1';
const ASSETS = [
  '/',
  'index.html',
  'manual.html'
];

// Instala e salva os arquivos no cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responde mesmo sem internet usando o que está no cache
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
