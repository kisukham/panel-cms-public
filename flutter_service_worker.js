'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "32d452a45d811493fe60a6ab5a124777",
"index.html": "9bed934952ba442892f9776e4da8063a",
"/": "9bed934952ba442892f9776e4da8063a",
"main.dart.js": "9e26a20c3aa121a85e75783ac2a0a922",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"manifest.json": "7e90769cf43b8d6fba10bed0a8560053",
".git/config": "2c471c6646298b53c0b00061f13cfdc9",
".git/objects/61/39e1d735f03832948640506c71093ff200a8c2": "ec4b47a82156ea02f2f6a360997cefbb",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/57/28ab99ade3cfdac61d9b1cb826df7f60065e56": "d60f7f512340ac1d550221b6116c8c75",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/56/56b9c0dd847e9e17f1b47149157c8ae59b5167": "b5642b288e723d56e3d2a47fd2a79bcb",
".git/objects/0b/d384ae75e17bd337a094adfb736a733c28601c": "46259648d7990287d8d5cd2fe9e6e463",
".git/objects/60/11a7d06b3ef4ce931ce12fd8cdf8e04f524f84": "16775027e78dffba54a5cb2decfad056",
".git/objects/5a/c40bae28ea8807d3ad78f458f65132e58de17b": "1be2bbf1e253f3721ec2a7485aad5a01",
".git/objects/33/ad73f27eed0bf6b41822ebde7312bcb3ec4161": "f5dd7841462ae7fe0d6513d5510fea52",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/bb/7f42b55044d3cd19e75c570068d6db9c08bf96": "86cf176d28b1d0cf041e7d117804e83a",
".git/objects/da/67e4136977de4b05abc61914c87d0e174001a9": "0f42e6e90c5f15eaacbe1caf99364b4a",
".git/objects/d1/36d1d7d3b8d0b7dab2dfd88645e42b79c08853": "ad2f6d944eb3be00a14f5fa5e262d743",
".git/objects/ab/f883b300bcf0f7b992cf1190e2f4eaf9188685": "4248b2fe6f769943a86cfc0f1659c18a",
".git/objects/c0/e2e7633451935e7d129f4e272ad36bbe4b535f": "3442632660777686d595b8b3eecf2801",
".git/objects/20/e0def9b2129c7deaa321b146bead9d9d607f71": "746aeb026057fa2f519dc9792fbae3d2",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/42/1cde03527a0cff0cacbcaf41aa7f232aba57b1": "cd3c02ba1c6fea261052c4426952c2ae",
".git/objects/80/65fb593790d6d9dabcdead09b52222e2a967ab": "fd958a0287ecb2cba38048a62e6575e1",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/7b/f0cee67bc36a0b69ac95cfc081fc54e888964e": "808db9eef68e4ccfa44f25be7cc3cc5c",
".git/objects/72/3add074f7fa511b3bca74421d994b2cd46fdac": "b75749606416e1da74ccda829fab0db2",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/07/9fa0396b2cabfe0ff9f1467f368a6cefa9fd77": "c80ccb9573fb2e196a0a080e53ad4767",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/5c/91b6d9ff4298d6cc9de183eec23e5fa61443dd": "ed0ea5249cbd88cbfc06eb84a1f9fc43",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5d/f0d5a15d12f0fc8f61d34601020c90923d46a8": "dd64eb79662ca4223c207cbe5d816d77",
".git/objects/65/2a429039abe159411147b5553fdeefe41ef417": "ca14896245e985316f1277c743b61e7f",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/01/4308c38217f4cc8367f7de56993bb043b49f93": "3020c9da5c7e1d656a649a7d28e4acb4",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/64/67c19bd3025603895a66833b73e669f128d5a0": "bd93a47468382bcc73c8caf517decf7b",
".git/objects/dd/500d22acf82fd1a93db8ad9f83a73914d61c69": "d30e011262f8f48e2890ae09cdf22f50",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/d5/d53e7822822bb5b95059e1480e23ae56936498": "bc7be24db296b7feccbc6186f3497594",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/a6/2592e322b89d92ccbcb3a3affe272629bbf256": "03ab474e34321e2fa65e73f1840e3918",
".git/objects/c4/e008c437bc6b32a9d8a20234d88d5387d5b858": "97eb00cd49ab484c084e661c957ace5c",
".git/objects/ea/aa4f92876ad0d6617eb410b4478eb702192b80": "9b1b77e24279115b2c9b6c6e72329c63",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/0aecc2fa02cabb004105f82852abdfcbdc8ddb": "283377358ce42d857a9af3970d44f6b1",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/f6/af10fe56f86817153f6c440a2367615ab52f43": "b8a47f759dfc30e064667dc0c367c2ad",
".git/objects/ce/601d87d456bd7aee3d660d6d05de9a768d8c10": "29037c30f441e521fed061b3a29f4cf4",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/f7bc74a7a8b525a2692adf0efac887249f1968": "3d6115b1c7f7fbcd1a0dd5052745c4a7",
".git/objects/48/28dfe5038f2cdca7a3ea466a8f22d1c53b6bad": "989f294f9aaaadf7dfdfd22d1c39de30",
".git/objects/70/2903d508f68c0cc77c3a922f6b85789764d630": "0a0d412cde46c479064c007d00b15738",
".git/objects/1e/67329bd898bbc7fcaf32076e068fda08dc2b1b": "9c1db4475c03e8723c58fb53e1ef98fb",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/4a/a4ed2a865acbe2370d91ceac3f31544d26479b": "f77259a9bd7e7818c60cf7328c8c3603",
".git/objects/1c/bc127d7a4fd90f97dda8bce84d2503f2efd670": "4a21f0b70c5b7821a101defdb98642ac",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/7f/ca1b837ba8ba4edc0bb422b153e045b70dd5ff": "1c5a234221dfcb8cf8536a6330e033e0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "12ed1231feb33c8829642c9191ca322f",
".git/logs/refs/heads/main": "12ed1231feb33c8829642c9191ca322f",
".git/logs/refs/remotes/origin/main": "a92139d5f3c490d9a4e8ea6d25beba18",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3d34947f1ed2229e3f15fb4c6107827c",
".git/refs/remotes/origin/main": "3d34947f1ed2229e3f15fb4c6107827c",
".git/index": "043b78a454c8afe4bc7a35e923488797",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "c4371daa9a5c5b3e308ac4f0b9688be2",
"assets/NOTICES": "34b39014fed1c253a9ba3e9503dbfee6",
"assets/FontManifest.json": "c85759c7a8601a179d0db31a406f2420",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/shaders/ink_sparkle.frag": "1a5ee49e1d29be33f9c53569030131c5",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons/chat.png": "dc5ad7f23dd7e810cea24488d9024624",
"assets/assets/fonts/Pretendard-Regular.ttf": "d1a9532a41f64908fab67d700ff2a5f0",
"assets/assets/fonts/Pretendard-ExtraLight.ttf": "abebb245a46f488f6b820c97609889dd",
"assets/assets/fonts/Pretendard-SemiBold.ttf": "695f00aeed623840ba7ed68dc166c761",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
