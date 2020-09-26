import TodoService from './TodoService.js';
class App {

  constructor() {
    this.registerServiceWorker();
    this.bindFormEvent();
    new TodoService();
  }

  bindFormEvent() {
    const form = document.querySelector('form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      console.log(form.item.value);
      form.reset();
    });
  }

  registerServiceWorker() {
    if (!'serviceWorker' in navigator) {
      console.info('Offline feature is not available on this browser');
      return;
    }

    const onsuccess = () => console.log('[Service Worker] Registered');
    const onfailure = () => console.log('[Service Worker] Failed');

    navigator.serviceWorker
      .register('sw.js')
      .then(onsuccess)
      .catch(onfailure);
  }
}

new App();
