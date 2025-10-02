const CACHE_NAME = 'clean-text-toolkit-v1';
const FILES_TO_CACHE = [
    '/index.html',
    '/styles.css',
    '/scripts.js',
    '/toolkits/clean-text.js',
    '/manifest.json'
    // Adicione aqui os caminhos para os ícones quando eles existirem
    // '/icons/icon-192x192.png',
    // '/icons/icon-512x512.png'
];

// Evento de Instalação: armazena os arquivos em cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[ServiceWorker] Pre-caching offline page');
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});

// Evento de Ativação: limpa caches antigos
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});

// Evento de Fetch: serve arquivos do cache quando offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Se o arquivo estiver no cache, retorna ele
                if (response) {
                    return response;
                }
                // Caso contrário, faz a requisição à rede
                return fetch(event.request);
            })
    );
});
