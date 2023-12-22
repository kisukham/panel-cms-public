'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "32d452a45d811493fe60a6ab5a124777",
"index.html": "25f74ae4fc9405460b5585c8f7d582f3",
"/": "25f74ae4fc9405460b5585c8f7d582f3",
"firebase-messaging-sw.js": "158dc51739b7f18e9db828699447a998",
"main.dart.js": "0fc937dec8cd9321c81c6773183390dd",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"manifest.json": "7e90769cf43b8d6fba10bed0a8560053",
".git/config": "2c471c6646298b53c0b00061f13cfdc9",
".git/objects/59/62a5541d4c1e38b258ec377c5d6c984e65dc3d": "348d714bc1acceb2227854676e486f53",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/57/f7a10906eb91e0d558cc98993f71e97c7b691e": "e885c4e41dc29159a5c91552deb9a6c5",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/56/56b9c0dd847e9e17f1b47149157c8ae59b5167": "b5642b288e723d56e3d2a47fd2a79bcb",
".git/objects/0b/d384ae75e17bd337a094adfb736a733c28601c": "46259648d7990287d8d5cd2fe9e6e463",
".git/objects/94/7a722b29a4c7986fde87fead849f6417759a3a": "86603813ea63cc1dac65c2d14327d076",
".git/objects/94/be76a14d813c2606faee20ea8ca4cc74124818": "8320c5742bb4b768b44076b90051f455",
".git/objects/60/11a7d06b3ef4ce931ce12fd8cdf8e04f524f84": "16775027e78dffba54a5cb2decfad056",
".git/objects/5a/c40bae28ea8807d3ad78f458f65132e58de17b": "1be2bbf1e253f3721ec2a7485aad5a01",
".git/objects/33/e4f80528111d3440982ca27f701fafb241d38b": "16ebdade5b94d3ccae2130e3b23e5222",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/d7/94e233f8b46761e176b02163cf915d9361879b": "3d7fda4dcccddd6946ceb75dcd001f1e",
".git/objects/b4/77310669fc16bd5269e0767a9561223d8d7d2d": "56ae8cc255cd44b6ea0c5235f1211a69",
".git/objects/f4/12535222c219341dc199e1d30fc03924731b68": "78a16a82143b3c2003a28fe2b8d98d51",
".git/objects/ee/fc6d529bb702c33edd0982e63fbaa54c428a6a": "f5db909f5b92bcd28f627537b30738b9",
".git/objects/c6/4e4f3559736c91ad5f1639c6ecac7041be9978": "8442bab7fe5efac1af8a8efe12dc654f",
".git/objects/4e/193bd4aedb383103cb95c8655a548c4606f34b": "29f95c472306b321ae2bd1236c7a1259",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7d/359c093db44c240b15087e75e1e89864cc2ab6": "bce253108e718c7547d8883f35a9bc9c",
".git/objects/29/20b804c9b04bc135073d2f34cba1c18778dd63": "86f6b21ecb15b382d143da5d9049ada0",
".git/objects/16/d5e847f1c439500f6226db4712147ec233e344": "0300838b6c20b5e98c53bee47b55e42d",
".git/objects/42/1cde03527a0cff0cacbcaf41aa7f232aba57b1": "cd3c02ba1c6fea261052c4426952c2ae",
".git/objects/89/9d2d9a00f1a18e314fc44dcfb7f2cd0e9d4ac7": "1f6a4a5508e7ed29526c98eb3fb31252",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/8f/2a75335b50bb43e3289162fbb928496a1858c6": "d58388d23c876008b5298c5771335cbf",
".git/objects/21/299a4dc82b7f3aafc498804b840f65335937b1": "a547d8a2008664d66784351b94b33abd",
".git/objects/4d/62dd3d404cf28793072f272b4f073981c8d101": "ef0f7ad7cbab747a69189d1962282558",
".git/objects/81/83da1a77221233edb62372f4b0024e82094909": "291fa8608f62c4276f3d66ea62b62fea",
".git/objects/81/f8fba5e5e65e0c23663e1610152f79ff34c174": "667f3cf3b7fce94e57a17219669d66bd",
".git/objects/72/35d6adda5e2ebcae8e19a0a6fa2f9f5ea1e775": "c4f246cbd07574f36ffddcd72ade4462",
".git/objects/88/2d83a393135ab7b4802fa53cbb3718bb6e04b2": "76d8e30de30fcf890f30bafc4f50ef8b",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/07/9fa0396b2cabfe0ff9f1467f368a6cefa9fd77": "c80ccb9573fb2e196a0a080e53ad4767",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/31/5026a8ed7dcf9e5071bb557b7634a1bf5fec62": "0610de95fd2e2db7b2cd87294c2726af",
".git/objects/91/157b5c9f7af2bcf753d33ad3166f9bd9649fb4": "6fd9ca6596653ebb8b0fa19ed8c52e33",
".git/objects/65/6c51aa11377f6eb29c1281c266624c089b6989": "aa5f928ca02301a28fef224fb1f6f859",
".git/objects/54/208fc8a1cb8ae50d5703af0b1b8488b62a7536": "839c3bb80cf89c9fc85f6a582a2bbd83",
".git/objects/3f/3632fea954bb8af1d92fed4d2a92863e8082da": "437410872b40780d5253b88e9b179939",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/97/79c1b7567d0a102e7ff47d3d7972fc09478773": "132b3ad3e2deb59954be6c64874887db",
".git/objects/64/b6ac4d041ac67c09cb0b0f10e996326ababa86": "e747405f08d5e3d8e1bb964cb129fa1b",
".git/objects/64/67c19bd3025603895a66833b73e669f128d5a0": "bd93a47468382bcc73c8caf517decf7b",
".git/objects/90/d3951936d2c6e24c0e76f86e3d5f48271fc614": "eca8c3dd464d8306ad41a0f7ceb362df",
".git/objects/d4/942d6d3fd4c0af91899aad328e5c7d4b348441": "6853ee3558f89d9dabdf4721654f6045",
".git/objects/ba/1342bb68f5f6aa0a47a0589f6d96dbc05e16d3": "192641d06b9fca436d1c4a9327c5e256",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/d5/d53e7822822bb5b95059e1480e23ae56936498": "bc7be24db296b7feccbc6186f3497594",
".git/objects/d2/723378d38e101cbf552c4a41b039b60dcf8ce1": "b6df5667351cf70a3aa583d1d590ed0f",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/de/24fd3c26b29e3aa5e5b5d2c03b3188b7319037": "001c7c374f8a50944d571e056653f6b1",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/b0/2625e9d27b6bd53633fd0ef4998a4fd1ebbae3": "8a1124892063f728d39d495f749713e1",
".git/objects/cd/04d563e829690d07930989d7a3fe4f6ccca3cf": "6f0d863351c4155fd704651cf5ee1d01",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/f6/db9b5f44cf66b0e51c30004192042a5ee08535": "d432e6c2b06c151271fa7d2262a85d45",
".git/objects/e7/a075dfd2f5e89d4afbd4297d8ea299030991cc": "92fc07fe2731e00242b4c0ab93ef3e72",
".git/objects/e7/1809e9a295583c2766364d675d988b2bbb311b": "cb97df2b2e22f52f343ee674c6691211",
".git/objects/cb/0efd3e18732d8726cf83af4bb32a70af09af3d": "eae1b13fe0b06fc335dcefcb6e76383e",
".git/objects/2c/fcf49123992288cefd0771ae7f1a37c953c4a7": "b321de4c2d5f64416f21d027ffbfc997",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/e8d5d84250e3d7aa500a2ea8fd33e7e101c1a4": "f0eceeb7810bb6e907e6dff7d228828b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/7c73cc2a42ea20e196d16f45b3e8b85f63fbc0": "ab4f95e8771c758aa427b148989b7c88",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/14/d76dd4c192a17b324d9c15db29c11f741f7043": "5e815f8b9b56c1e598111d0f12733e61",
".git/objects/14/b853fe3d50de1986305e90221bd612d29fa84a": "7ade3591bf446962647ccf44dc88ff98",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f2498a85794553b8cc35ca0ca0332302",
".git/logs/refs/heads/main": "f2498a85794553b8cc35ca0ca0332302",
".git/logs/refs/remotes/origin/main": "22d88a660df0fd3aebc7b0694b0475de",
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
".git/refs/heads/main": "8edd3638780cfdf34fd44b8859e880d8",
".git/refs/remotes/origin/main": "8edd3638780cfdf34fd44b8859e880d8",
".git/index": "460de69a0285c1b185db1d24f6997d31",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
"assets/AssetManifest.json": "6c1106a9dea9cb19c80c70b8f8930c89",
"assets/NOTICES": "62885daddddd5e78985bad77eb1fcfb5",
"assets/FontManifest.json": "e2f126e136ff8be123b9c7260c25ac7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/icons/chat.png": "dc5ad7f23dd7e810cea24488d9024624",
"assets/assets/fonts/Pretendard-Medium.ttf": "be5dedc52c0403d321e8202ae6aac2b3",
"assets/assets/fonts/Pretendard-Black.ttf": "eb51bbd6cd9010dc92357f8303784b17",
"assets/assets/fonts/Pretendard-Regular.ttf": "d1a9532a41f64908fab67d700ff2a5f0",
"assets/assets/fonts/Pretendard-Thin.ttf": "86fdcc882292e5db7d6bef1c68aceba6",
"assets/assets/fonts/Pretendard-ExtraLight.ttf": "abebb245a46f488f6b820c97609889dd",
"assets/assets/fonts/Pretendard-SemiBold.ttf": "695f00aeed623840ba7ed68dc166c761",
"assets/assets/fonts/Pretendard-ExtraBold.ttf": "a75966342357de44f5a09d07b0ae535a",
"assets/assets/fonts/Pretendard-Bold.ttf": "dc5a0e145559879abb18d5969da0df6b",
"assets/assets/fonts/Pretendard-Light.ttf": "3a2c8b53f02202d322fa86eb9672ba30",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
