// Реализуем примеры из file-system через промисы
const fs = require('fs')
const path = require('path')
const fullPath = path.join(__dirname)

// Создание/перезапись файла
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      console.log('Файл успешно создан и записан')
      resolve()
    })
  )
}

// Добавление в существующий файл
const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err.message)
      }
      console.log('Запись успешно добавлена в файл')
      resolve()
    })
  )
}

// Чтение файла
const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(err.message)
      }
      console.log('Чтение файла...')
      resolve(data)
    })
  )
}

// Удаление файла
const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        return reject(err.message)
      }
      console.log('Файл успешно удален')
      resolve()
    })
  )
}

writeFileAsync(path.join(__dirname, 'test2.txt'), 'Запись в файл')
  .then(() =>
    appendFileAsync(path.join(__dirname, 'test2.txt'), ' доп запись 1')
  )
  .then(() =>
    appendFileAsync(path.join(__dirname, 'test2.txt'), ' доп запись 2')
  )
  .then(() => readFileAsync(path.join(__dirname, 'test2.txt')))
  .then((data) => console.log(data))
  .then(() => removeFileAsync(path.join(__dirname, 'test2.txt')))
  .catch((err) => console.log(err))

// Преимущества: простота использования, последовательное выполнение
// ------------------------------

// Есть также встоенная работа с промисами
// const fsPromise = require('fs/promises')

// fsPromise.mkdir('/').then().catch()
// fsPromise.readFile('/').then().catch()
// fsPromise.writeFile('/').then().catch()
// fsPromise.appendFile('/').then().catch()
// fsPromise.rm('/').then().catch()
// fsPromise.rmdir('/').then().catch()
