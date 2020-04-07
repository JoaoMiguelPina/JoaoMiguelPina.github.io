'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "eec5fc8f7e0497d0298e04a053aa3e0b",
"assets/assets/note1.wav": "a2f02d4e6e9d225ebf4e554c0fc9b36b",
"assets/assets/note2.wav": "1760f9313cae8fa1564e9091c58cdcf4",
"assets/assets/note3.wav": "ec8173470a0186fdecf2f6935260eb56",
"assets/assets/note4.wav": "7817b629210c6d879b493439bcded62b",
"assets/assets/note5.wav": "69f4c1dd58b17a67a632ed106f203afc",
"assets/assets/note6.wav": "c713df4bb4bb1b6b11d041d97387d959",
"assets/assets/note7.wav": "bf1ffa7743bbdfdca078cb3f6d80bb77",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "978b7ccca38ae902de1f15aa1cc1d7a9",
"assets/note1.wav": "a2f02d4e6e9d225ebf4e554c0fc9b36b",
"assets/note2.wav": "1760f9313cae8fa1564e9091c58cdcf4",
"assets/note3.wav": "ec8173470a0186fdecf2f6935260eb56",
"assets/note4.wav": "7817b629210c6d879b493439bcded62b",
"assets/note5.wav": "69f4c1dd58b17a67a632ed106f203afc",
"assets/note6.wav": "c713df4bb4bb1b6b11d041d97387d959",
"assets/note7.wav": "bf1ffa7743bbdfdca078cb3f6d80bb77",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d5b242cbcc546323c5836e8f90286304",
"/": "d5b242cbcc546323c5836e8f90286304",
"main.dart.js": "256a3d5fd80101256e20e892f9a614d3",
"manifest.json": "f5fbf4c59cffbb2103a7b9d4ad34b867"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
