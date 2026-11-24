// Service worker mínimo: hace que el celular ofrezca "Instalar" la app con el escudo.
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => self.clients.claim());
self.addEventListener("fetch", () => {});
