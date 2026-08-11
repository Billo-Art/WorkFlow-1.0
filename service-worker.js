// =======================================
// WorkFlow - Service Worker
// =======================================


const CACHE_NAME = "workflow-v1";


const fichiers = [

    "index.html",

    "style.css",

    "script.js",

    "manifest.json",

    "sukuna.png"

];



// Installation

self.addEventListener(
    "install",
    function(event){

        event.waitUntil(

            caches.open(CACHE_NAME)

            .then(function(cache){

                return cache.addAll(fichiers);

            })

        );

    }
);



// Chargement hors connexion

self.addEventListener(
    "fetch",
    function(event){

        event.respondWith(

            caches.match(event.request)

            .then(function(response){

                return response || fetch(event.request);

            })

        );

    }
);