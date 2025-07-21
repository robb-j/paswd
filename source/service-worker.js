import meta from "./app.json" with { type: "json" };
const assets = ["/", "/index.html", "/words.json", "/app.json", "/icon.svg"];

const cacheKey = `${meta.name}-${meta.version}`;

self.addEventListener("install", (e) => e.waitUntil(install()));
self.addEventListener("activate", (e) => e.waitUntil(activate()));
self.addEventListener("fetch", (e) => e.respondWith(performFetch(e.request)));

// Cache assets on install (no-cors allows external assets to be cached)
async function install() {
  console.log("@install");
  try {
    const cache = await caches.open(cacheKey);
    await cache.addAll(assets);
  } catch (error) {
    console.error("install failed", error);
  }
}

// Uncache old assets when opened
async function activate() {
  console.log("@activate");
  try {
    for (const key of await caches.keys()) {
      if (key !== cacheKey) await caches.delete(key);
    }
  } catch (error) {
    console.error("activate failed", error);
  }
}

/** @param {Request} request */
async function performFetch(request) {
  console.log("@fetch", request.url);

  try {
    let response = await caches.match(request);
    if (response) response;

    return fetch(request);
  } catch (error) {
    console.error("fetch failed", error);
    return new Response(undefined, { status: 404 });
  }
}
