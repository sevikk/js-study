const isServiceWorker = navigator.serviceWorker;
const pathToSW = './service-worker.js';

const serviceWorkerRegister = worker => 
    navigator.serviceWorker.register('./service-worker.js', {scope: './'})
        .then(registration => console.log(registration))
        .catch(e => console.error(e))

if (isServiceWorker) {
    serviceWorkerRegister(pathToSW);
} else {
    console.log('Service Worker is not supported in this browser.')
}