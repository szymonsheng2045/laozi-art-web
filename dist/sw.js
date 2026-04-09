// Service Worker for LAOZI.ART PWA
const CACHE_NAME = 'laozi-art-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/observation',
  '/about',
  '/profile',
  '/admin',
  '/_next/static/chunks/main.js',
  '/_next/static/chunks/webpack.js',
  '/_next/static/chunks/pages/_app.js',
];

// 安装时缓存静态资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((err) => {
        console.log('Service Worker: Cache failed', err);
      })
  );
  self.skipWaiting();
});

// 激活时清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// 拦截请求并提供缓存
self.addEventListener('fetch', (event) => {
  // 只处理 GET 请求
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((cached) => {
        // 返回缓存或发起网络请求
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // 更新缓存
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, clone);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // 网络失败时返回离线页面
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
          });

        // 优先返回缓存，同时更新缓存
        return cached || fetchPromise;
      })
  );
});

// 后台同步（用于稍后发送收藏等操作）
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-favorites') {
    event.waitUntil(syncFavorites());
  }
});

async function syncFavorites() {
  // 同步收藏数据到服务器
  console.log('Syncing favorites...');
}

// 推送通知
self.addEventListener('push', (event) => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/icon-72x72.png',
      data: data.url,
      actions: [
        { action: 'open', title: '阅读' },
        { action: 'close', title: '关闭' }
      ]
    })
  );
});

// 点击通知
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'open' || !event.action) {
    event.waitUntil(
      clients.openWindow(event.notification.data)
    );
  }
});
