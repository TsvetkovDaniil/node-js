// Через переменную окружения передать строку, записать её в файл
// прочитать файл, посчитать кол-во слов в файле и записать
// их в новй файл count.txt, затем удалить первый файл

const fsPromise = require('fs/promises') // модуль для файловой системы с промисами
const path = require('path')
const fullPath = path.join(__dirname, 'test3.txt')
const counterPath = path.join(__dirname, 'count.txt')

const dotenv = require('dotenv')
dotenv.config()
const fileInput = process.env.FILE_INPUT || ''

fsPromise
  .writeFile(fullPath, fileInput) // создали файл по пути, записали в него строку
  .then(() => fsPromise.readFile(fullPath, { encoding: 'utf-8' })) // прочитали файл, поместили в resolve(data)
  .then((data) => {
    const split = data.trim().split(' ') // массив слов
    return split.length.toString() // вернули кол-во слов
  })
  .then((wordsAmount) => fsPromise.writeFile(counterPath, wordsAmount)) // приняли кол-во слов, записали в другой файл
  .then(() => fsPromise.rm(fullPath)) // удалили старый файл
  .catch((err) => console.log(err.message)) // обработка ошибок
