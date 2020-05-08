var cacheName = 'cdn-pwa';
var filesToCache = [
'./',
'simulateur.html',
'rechercher.html',
'profil_etudiant.html',
'profil_entreprise.html',
'profil_ecole.html',
'inscrip_etudiant.html',
'inscrip_entreprise.html',
'inscrip_ecole.html',
'index.html',
'connex.html',
'chat.html',
'ajout_annonce.html',
'./css/navigation.css',
'./css/chat.css',
'./css/navigation.js',
'./css/main.js',
'./css/chat.js',
'./inscrip.html',
'./css/style.css',
'./js/main_pwa.js'
];
/* Démarrer le service worker et mettre en cache tout le contenu de l'application
*/
self.addEventListener('install', function(e) {
e.waitUntil(
caches.open(cacheName).then(function(cache) {
return cache.addAll(filesToCache);
})
);
});
/* Servir le contenu mis en cache si hors ligne */
self.addEventListener('fetch', function(e) {
e.respondWith(
caches.match(e.request).then(function(response) {

return response || fetch(e.request);
})
);
});