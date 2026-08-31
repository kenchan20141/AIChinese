const CACHE_NAME = 'planner-cache-v1';

// 這裡只放「課業手帳」專屬的檔案
const PLANNER_URLS = [
  './calendar.html',
  './planner-manifest.json',
  './icon.png'
];

// 1. 安裝時，快取手帳檔案
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PLANNER_URLS))
  );
});

// 2. 攔截請求，進行安全過濾（不干擾其他工具）
self.addEventListener('fetch', event => {
  const requestUrl = event.request.url;
  
  // 檢查這個網址是不是手帳相關的檔案
  const isPlannerRelated = PLANNER_URLS.some(url => requestUrl.includes(url.replace('./', '')));

  // 🛑 如果不是手帳的檔案（例如使用者開了 toolbox 裡的其他工具），直接放行，完全不管！
  if (!isPlannerRelated) {
    return; 
  }

  // ✅ 如果是手帳的檔案，才執行離線快取邏輯
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
