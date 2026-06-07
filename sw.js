self.addEventListener('fetch', function(event) {
    // Membantu aplikasi memuat data lebih cepat secara lokal
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});