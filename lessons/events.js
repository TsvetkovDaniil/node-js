const Emitter = require('events') // модуль для работы с событиями (класс)

const emitter = new Emitter() // объект класса

const dotenv = require('dotenv')
dotenv.config()

emitter.on('message', (data, second, third) => {
  // создать слушателя, когда кто-то генерирует событие message

  console.log('Вы прислали сообщение: ' + data)
  console.log('Второй аргумент: ' + second)
})

const MESSAGE = process.env.message || ''
if (MESSAGE) {
  emitter.emit('message', MESSAGE, 'I am second argument!') // генерирует событие 'message'
} else {
  emitter.emit('message', 'Вы не указали сообщение') // генерирует событие 'message'
}

emitter.removeAllListeners() // убрать всех слушателей
emitter.removeListener('message') // убрать конкретного слушателя

// Для чего на самом деле нужно?
// http, websockets, long pulling, clusters

// Генерирует событие единажды:
// emitter.once('message', (data, second, third) => {
//     // создать слушателя, когда кто-то генерирует событие message

//     console.log('Вы прислали сообщение: ' + data)
//     console.log('Второй аргумент: ' + second)
//   })
