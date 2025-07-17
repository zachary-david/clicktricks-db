const CACHE_NAME = 'simple-crm-v1'
const urlsToCache = [
  '/',
  '/manifest.json',
  '/_next/static/css/',
  '/_next/static/chunks/',
  '/_next/static/media/',
  'https://fonts.googleapis.com/css2',
  'https://fonts.gstatic.com/',
  'https://api.dicebear.com/7.x/avataaars/svg',
]

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache)
      })
      .catch((error) => {
        console.error('Failed to cache resources:', error)
      })
  )
})

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return response
        if (response) {
          return response
        }

        // Clone the request because it's a stream
        const fetchRequest = event.request.clone()

        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }

          // Clone response because it's a stream
          const responseToCache = response.clone()

          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache)
            })

          return response
        })
        .catch(() => {
          // Return offline page if available
          if (event.request.destination === 'document') {
            return caches.match('/offline.html')
          }
        })
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME]

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(
      // Process queued form submissions
      processQueuedFormSubmissions()
    )
  }
})

async function processQueuedFormSubmissions() {
  // Implementation for processing queued form submissions
  // This would handle offline form submissions
  console.log('Processing queued form submissions...')
}

// Push notification handling (future enhancement)
self.addEventListener('push', (event) => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
    }

    event.waitUntil(
      self.registration.showNotification('Simple CRM', options)
    )
  }
})

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  
  event.waitUntil(
    clients.openWindow('https://simplecrm.com')
  )
})