module.exports = class Router {
  constructor() {
    this.endpoints = {} // все пути и запросы хранятся здесь
  }

  request(method, path, handler) {
    // создаем абсолютно новый запрос

    if (!this.endpoints[path]) {
      // если такого пути нет, то создай
      this.endpoints[path] = {}
    }
    const endpoint = this.endpoints[path] // вынесли необходимый объект с запросами в отдельный параметр

    if (endpoint[method]) {
      // если переданный метод уже существует, то отправь ошибку
      throw new Error(`[${method}] по адресу ${path} уже существует`)
    }
    endpoint[method] = handler // закрепи обработчик запроса
  }

  get(path, handler) {
    this.request('GET', path, handler)
  }
  post(path, handler) {
    this.request('POST', path, handler)
  }
  put(path, handler) {
    this.request('PUT', path, handler)
  }
  delete(path, handler) {
    this.request('DELETE', path, handler)
  }
}
