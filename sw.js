/**
 * Light Metronome - Service Worker
 * (c) 2026 σiΣ (https://github.com/sigmaIsigma)
 * Licensed under MIT License
 */

const CACHE_NAME = 'light-metronome-cache-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    './favicon.svg',
    'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:wght@400;700&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
