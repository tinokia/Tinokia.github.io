const CACHE_NAME = "english-test-pwa-v1";

const APP_FILES = [
  "./data/Co-ban.html",
  "./data/English Level A.html",
  "./data/English Level B.html",
  "./data/English Level C.html",
  "./data/Icon.png",
  "./data/Icon1.png",
  "./data/Toeic test Vocabulary.html",
  "./data/coban.js",
  "./data/levelA.js",
  "./data/levelB.js",
  "./data/levelC.js",
  "./data/toeic_vocab.js",
  "./data/toeic_vocab1.js",
  "./data/toeic_vocab2.js",
  "./icon-192.png",
  "./icon-512.png",
  "./manifest.json",
  "./online-english-test.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      }).catch(() => {
        return caches.match("./online-english-test.html");
      });
    })
  );
});
