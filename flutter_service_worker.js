'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6f6a2d2c73b9aec3ba2f6db3c7a7424b",
"assets/assets/africa_continent_map.json": "60b5663cc212c59eaf5e59ba5206b7ec",
"assets/assets/asia_continent_map.json": "f4e3b4b884494f744d65ef797cf31b30",
"assets/assets/australia.json": "581d9a831f3376bcedbb019e5975f2fe",
"assets/assets/california.json": "09291e63b2fbe5dbc316d4d2c52d23af",
"assets/assets/europe.json": "a336a091c0758b69506ea6a4fa21086b",
"assets/assets/fonts/Heebo-Bold.ttf": "ede6fdf4ecf8c32c21701823004343f4",
"assets/assets/fonts/Heebo-Medium.ttf": "6c57263dbdee325394e471a12499e64c",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/usa.json": "a50aca5dd3dafa2fca014f6461a14dab",
"assets/assets/world_map.json": "80bdf06bacdd991fc5ba67cff2cf0216",
"assets/FontManifest.json": "24b14e15ffb480f8b8973586128084af",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/images/airplane.png": "4de8ca33d5532527863e21b892ef4f9b",
"assets/images/athletics.png": "606a492a01697c86ff61193af97f1c86",
"assets/images/axis_feature.png": "7d383ec825835cdc2442437948ec0280",
"assets/images/axis_types.png": "42260cbdd03a50f330aa2aab041c5cda",
"assets/images/axis_types.svg": "851f3168c0e3bfbb4f2a8ff39b6bae83",
"assets/images/back.png": "67b2e68c59b6c01c22939944ba697be3",
"assets/images/ball.png": "d29cb732af2a432c69d58e415ae2c5b4",
"assets/images/barcode.png": "770b27de2695fdf9f56f6ca88835a479",
"assets/images/bike.png": "815d5fe99c5f263c698323586d48892d",
"assets/images/bike_legend.png": "b323d01ce28cd347d5fb8bfbcad61ec8",
"assets/images/book.png": "f4ca58847383a3378b55ef121220ec4b",
"assets/images/calendar.png": "e7da9c17d1ee344423042099dfc8c827",
"assets/images/car.png": "12c754611a32632b77c692412e33e8c3",
"assets/images/cartesian.svg": "976dccbc17c278839a40b42059687299",
"assets/images/cartesian_types.png": "e5d22ace312b92e03996b5caa73f7164",
"assets/images/car_legend.png": "c053e460ca6466b76bf2810ae081203e",
"assets/images/Cavaliers.png": "f7b79a955a58bb2c257bd519f3984804",
"assets/images/circle_gauge.png": "56444ed86c91672c6c63822d24f95b33",
"assets/images/circle_gauge.svg": "a4768fab5634a2f188b1976d2dc537f7",
"assets/images/circle_series.png": "bbff3b81fdfb74b410f0bc686d76268a",
"assets/images/circle_series.svg": "12a8fe27b0688e3464878270ec4ae69d",
"assets/images/Clippers.png": "7587a56a10ab1dea4cdec3c3bc75b2d4",
"assets/images/close.png": "c7e2a43786925bb1ba25d66f575e4e38",
"assets/images/code.png": "1b9c82930460d4a666f2db9feb49d6af",
"assets/images/code.svg": "dbe429c91c6bb26aca877efa89cc27a1",
"assets/images/cycle_legend.png": "ce3bc98993ed3f1fa1cb9cf9e8f5549a",
"assets/images/dark_theme_gauge.png": "cb350bec49d622f92cb77c680486e328",
"assets/images/dashline.png": "07855a68e7fb8ec5f07c0b025b75d22b",
"assets/images/Datagrid.png": "9cfd47f3acd5bd7fa32106cdae5653e6",
"assets/images/Date_range_picker.png": "3f09aecac805fd6f66aec6b6d9e85b00",
"assets/images/DenverNuggets.png": "7a81e8bff16d3ba24753039c1c24ab50",
"assets/images/DetroitPistons.png": "745a3415d5b13602b25d7bf49b9c4fc9",
"assets/images/documentation.png": "66dd8986f40c729bae5c79c3377144dd",
"assets/images/Downarrow.png": "e09187add2ad675c7b0bd8008f3812ff",
"assets/images/external.png": "d49f2912e83502c98e20b5dd9da7e7bc",
"assets/images/fullscreen.png": "e3c4c422d6b10eba388749fe454cb11f",
"assets/images/funnel.png": "5d3d0b84d0446a2f71bf3c75ba41aee4",
"assets/images/funnel.svg": "37ddb0f18383c3d8717d02915e477f48",
"assets/images/GoldenState.png": "e81419e21668d5f5babab61c61e7ff14",
"assets/images/golfball.png": "718f272789a1d8179d1474f0e0789c5a",
"assets/images/golfball2.png": "dcc3e355c239fadf69d861fac9fad0ec",
"assets/images/golfball3.png": "6bdef200521926e4cc86e6fa80d6d588",
"assets/images/home.png": "582e4349238d6518d43f4b29f469bde6",
"assets/images/Hornets.png": "d51deaf9edf9a3fa461f9ba40f9cc96b",
"assets/images/image_nav_banner.png": "03f48db27424d51b033c2d59a092fff0",
"assets/images/image_nav_banner_darktheme.png": "ce6aa4634f35ce5db96dead06c958b6b",
"assets/images/img_JS.png": "68beac803bd5a87ee1b502afc3809a79",
"assets/images/img_xamarin.png": "4ca17d98df6db44c339acc6681432876",
"assets/images/img_xamarin_ui.png": "d7753f3efb7863182d9576bffd916201",
"assets/images/info.png": "d153c08a4b1014edc5d81dd284b32942",
"assets/images/information.svg": "8d5a8e187ef6fcf98d4050006e92214b",
"assets/images/Insufficient%2520.png": "a8b666c4a3b7970c5bc98b16e9786160",
"assets/images/legend.png": "c59c099c473fc27089831cfbd68f34a3",
"assets/images/legend.svg": "c13e245c5f9d1676c54b466b01380b2a",
"assets/images/live_update.png": "9512f3ca2a55996fe87746663dd535fb",
"assets/images/live_update.svg": "5fdb2cfdf87b833d3b91dfe1b3b7978e",
"assets/images/LosAngeles.png": "ab0cab0878ef326a58ce7fbe75620d92",
"assets/images/man1.png": "14335fe7cab02cda6863f9cd395d5310",
"assets/images/man2.png": "d4686f19631e1512c7a6c86a0f28d5f8",
"assets/images/man3.png": "dfc639c8d4e0cb8186606e9424f25f65",
"assets/images/map.png": "e3bc699306888febd6d5629bdfbeb85e",
"assets/images/map.svg": "27e3b5306669a715d961faf53627d384",
"assets/images/maps_facebook.png": "f220eaf64e59611e5255093f34cba743",
"assets/images/maps_instagram.png": "3a88d4b0664c71f64d1dfcefe3e93905",
"assets/images/maps_snapchat.png": "79b650cd32c68c4fa8aa6d262adaea76",
"assets/images/maps_tiktok.png": "e47f4b2661b1365522ca957b03b22fd4",
"assets/images/maps_twitter.png": "84202db5b290ba209ee8f9cf5b15b42e",
"assets/images/Mavericks.png": "051c3da14bdb04638467e81eb1885e3c",
"assets/images/Memphis.png": "7a3fb76e4b100194abc4d5bdb944535e",
"assets/images/menu.png": "95e3c27f6bb0e06c2debaeb0616ee44e",
"assets/images/Miami.png": "83618b19510d1b158ab49f6c848de764",
"assets/images/Milwakke.png": "0a60a2c166948ab5184fb7035fe7a974",
"assets/images/NewYork.png": "3febf28791407e6628f9a13b830129ae",
"assets/images/open_arrow.png": "558d93ad18859d8ef01dc956cc67e4a4",
"assets/images/Orlando.png": "f315175d6b4d3b7578839224f2b913fb",
"assets/images/other_features.png": "488324f6b844690f82f84aeb6ea49605",
"assets/images/other_features.svg": "76162f548df974fd336780dc608f4244",
"assets/images/pdf/certificate.jpg": "a615006599cc6e253111f9d8cb250eb5",
"assets/images/pdf/Pdf_Succinctly_img_1.jpg": "c1fcd3c589ea855adc1fc8c4ae06706b",
"assets/images/pdf/Pdf_Succinctly_img_2.jpg": "988cc8d0d6b41729dabf504b9ded2deb",
"assets/images/pdf/Pdf_Succinctly_img_3.jpg": "0adce59365166e26012c6e9c704c41a5",
"assets/images/pdf/Pdf_Succinctly_img_4.jpg": "2dc8691a2c1b2b9ec3e16e04903e131c",
"assets/images/pdf/Pdf_Succinctly_img_5.jpg": "edcd911d0a250290a244a2f810e72159",
"assets/images/pdf.png": "26e7f142089d6e1598fa2ef3feb2bae9",
"assets/images/people_1.png": "3cb632d1b2e967a456122f28d4770a01",
"assets/images/people_2.png": "b77f934a97bae7b1b2fdcf265fd77f0b",
"assets/images/people_3.png": "2b837eca4b31646cfdcea21211cf66d9",
"assets/images/people_4.png": "fee6b31985beb35b69c3506e2af15088",
"assets/images/people_5.png": "4cd96ce198230e008742848f5df47b05",
"assets/images/people_6.png": "b2a6372eb6deb9a0ffa69466f961242c",
"assets/images/people_7.png": "d57009fb6ed5b4cbbafcd8e230a20086",
"assets/images/people_8.png": "657a91b5b93f1573c29a56e8cd312a8e",
"assets/images/People_Circle0.png": "c2982e84427a646842442173b62681f0",
"assets/images/People_Circle1.png": "657a91b5b93f1573c29a56e8cd312a8e",
"assets/images/People_Circle10.png": "6a6358ac3491ef5a79f521065d7e654e",
"assets/images/People_Circle11.png": "1b3d36d168f8f27a027b3d5fe54354b2",
"assets/images/People_Circle12.png": "fee6b31985beb35b69c3506e2af15088",
"assets/images/People_Circle13.png": "73da9fb063f6307b928808b8b49a7c71",
"assets/images/People_Circle14.png": "b77f934a97bae7b1b2fdcf265fd77f0b",
"assets/images/People_Circle15.png": "e8d60d3a29c062b0213e0c433353c37b",
"assets/images/People_Circle16.png": "95472f9d51c951d7643b957b20bd1ff3",
"assets/images/People_Circle17.png": "a62eb728f3af3248dd6404393718a094",
"assets/images/People_Circle18.png": "9cc9674b42891b1757db7b73e593c1de",
"assets/images/People_Circle19.png": "f7af5b3dc5835b7975a959a96ecd3e88",
"assets/images/People_Circle2.png": "4cd96ce198230e008742848f5df47b05",
"assets/images/People_Circle20.png": "52cdbc89f084428e9df1fdaf75bcf918",
"assets/images/People_Circle21.png": "4390309be3e04c885528e9a4f9c081ec",
"assets/images/People_Circle22.png": "ac4bb783f5b3532dc57ce66db960ffa6",
"assets/images/People_Circle23.png": "05985cfc1de3cc32355ae56fe6652b1f",
"assets/images/People_Circle24.png": "0a33516701ea509f461e87a1771f9c8c",
"assets/images/People_Circle25.png": "a92b2550be278d8dcfa183d680b61ecb",
"assets/images/People_Circle26.png": "084a7485156f49757e53c3910e532cc9",
"assets/images/People_Circle27.png": "8df8e8574e1e33751beced5cae1035b3",
"assets/images/People_Circle3.png": "b2a6372eb6deb9a0ffa69466f961242c",
"assets/images/People_Circle4.png": "8d2af5d841d1337cb808d544194202d7",
"assets/images/People_Circle5.png": "3cb632d1b2e967a456122f28d4770a01",
"assets/images/People_Circle6.png": "d57009fb6ed5b4cbbafcd8e230a20086",
"assets/images/People_Circle7.png": "b8ab4808268e19c02f62b17e27b90b04",
"assets/images/People_Circle8.png": "2b837eca4b31646cfdcea21211cf66d9",
"assets/images/People_Circle9.png": "924f7a5e23d99815ac4e8ed961848017",
"assets/images/Perfect.png": "80375a775accd5e6d4ee663ad512d4fe",
"assets/images/person.png": "c7ed75c0fc451352ade741e05ad72bc8",
"assets/images/personal_loan.png": "510d52fff7f5d8695805251e9fa2cca6",
"assets/images/product.png": "ff5e97be025410ea087ea42ba51ccacd",
"assets/images/pyramid.png": "d2a194468a6303550e97b65cc2feaa26",
"assets/images/pyramid.svg": "68c2be39c6afa017bb2ca9f21772dacb",
"assets/images/range_selector.png": "8808b2b933871fa5c39de6e62613f496",
"assets/images/range_slider.png": "883635b167755502bfba7893b12c8bdd",
"assets/images/settings.png": "2e19b744463bba165f82f292ebd6d6f7",
"assets/images/settings.svg": "ee6d1f0ef77382ee8bea26a4ff4d684c",
"assets/images/shotput.png": "60ced46648353b7dad9377da6b525288",
"assets/images/slider.png": "9a79fa29ee75287af0ff391306050469",
"assets/images/Sufficient.png": "52d8a445c98489cc90307b020d275d61",
"assets/images/sun.png": "526fb20eca521243a35c378de356c629",
"assets/images/syncfusion.png": "9636837ed6d3558c53ca89d2f8370778",
"assets/images/syncfusion_dark.png": "f675093578cced80eab33cad19cbf590",
"assets/images/Thunder_Logo.png": "4a83e1f4cb4a03d80abd1f57287a9b7a",
"assets/images/truck.png": "35ca7393daf4abf9591ddf2267e61f5e",
"assets/images/truck_legend.png": "1394a8aad840267c7307ffe28b16871f",
"assets/images/Uparrow.png": "c05f1607992cde72582b61f52e9e8432",
"assets/images/user_interaction.png": "64bb5e099afb109be06d32932cc12e44",
"assets/images/user_interaction.svg": "fa2da0b25caa55621745cd2fac57addc",
"assets/images/whatsnew.png": "5f12c9d22f2c679061ef5d7b4e393b68",
"assets/lib/sample_details.json": "6d36d4463cdf926fedcf148884ce389b",
"assets/NOTICES": "fbd25d1c4c99c7377e432691933823f7",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"BingSiteAuth.xml": "5a55635fd2a391bdcad8d0ef1af1a17b",
"favicon.png": "0ff0e0cdd689c586ae5c1aa7ac7c9dcb",
"googlec03dd4bc003151bc.html": "d8ee63ac530b376c19042286c0935849",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d4a8256121bae0fb870472c6c7dc9802",
"/": "d4a8256121bae0fb870472c6c7dc9802",
"main.dart.js": "29937674ec58553980bf0d38b1443ac4",
"manifest.json": "e0ce32893358312172b53c3721868c70",
"naver335c61fba11bdb4a502b86bfe2e8db08.html": "85f86c5a9f9bac1ffe7952c2c28fc294",
"robots.txt": "5634545ff7f473a66679177c67cdfe40",
"sitemap.xml": "3a92faedb633adb43266a6617a5c2e8f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
