importScripts('js/cache-polyfill.js');

const CACHE_VERSION = 'app-v1';
const CACHE_FILES = [
    '/',
    'images/background.jpeg',
    'js/app.js',
    'css/styles.css',
];


self.addEventListener('install', event => {
    console.log("installed service worker!")

    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(CACHE_FILES);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map((key, i) => {
                if(key !== CACHE_VERSION){
                    return caches.delete(keys[i]);
                }
            }))
        })
    )
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then( res => {
            if(res){
                return res;
            }
            requestBackend(event);
        })
    )
});

function requestBackend(event){
    var url = event.request.clone();
    return fetch(url).then(function(res){
        //if not a valid response send the error
        if(!res || res.status !== 200 || res.type !== 'basic'){
            return res;
        }

        var response = res.clone();

        caches.open(CACHE_VERSION).then(function(cache){
            cache.put(event.request, response);
        });

        return res;
    })
}