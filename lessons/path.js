const path = require('path') // константа для управления путями

console.log('Константы')
console.log('__dirname: ', __dirname) // абсолютный путь до папки с файлом
console.log('__filename: ', __filename) // абсолютный путь до самого файла
console.log('-----------')

console.log('Метод join')
console.log(path.join('path', 'first', 'second')) // склеивание путей
console.log(path.join('path', 'first', 'second', '..')) // вернуться на одну папку ниже
console.log('-----------')

console.log('Метод resolve')
console.log(path.resolve('first', 'second')) // возвращает абсолютный путь (без dirname'a) (лучше не использовать)
console.log('-----------')

// парсинг пути
console.log('Метод parse')
const fullPath = path.resolve('first', 'second.js')
console.log('Парсинг пути: ', path.parse(fullPath))
console.log('-----------')

console.log('Остальные полезные методы')
console.log('Разделитель в текущей ОС, поле sep: ', path.sep)
console.log('Проверка fullPath на абсолютный путь: ', path.isAbsolute(fullPath)) // указан ли полный путь
console.log('Метод basename: ', path.basename(fullPath)) // имя файла
console.log('Метод extname: ', path.extname(fullPath)) // расширение файла
console.log('-----------')

//Работа с URL
const siteURL = 'http://localhost:3000/users?id=5112'
const url = new URL(siteURL) // парсинг url запроса
console.log(url)
