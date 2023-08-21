// Работа с файлами
const fs = require('fs')
const path = require('path')

// создать синхронно и рекурсивно несколько папок
fs.mkdirSync(path.join(__dirname, 'dir', 'dir2', 'dir3'), { recursive: true })

// создать папку асинхронно
console.log('start')
fs.mkdir(path.join(__dirname, 'dir2'), (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Папка создана')
})
console.log('end')
// -----------------------

// удалить папку асинхронно
fs.rmdir(path.join(__dirname, 'dir', 'dir2', 'dir3'), (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Папка удалена')
})
// -----------------------

// создать файл для записи (перезаисывает файл)
fs.writeFile(
  path.join(__dirname, 'test.txt'), // путь до файла
  'Это будет записано в файл', // запись в файл
  (err) => {
    // колбэк ошибки/успеха
    if (err) {
      console.log(err)
      return
    }
    console.log('Файл создан и перезаписан')
  }
)
// -----------------------

// создать файл для записи (дописывает в файл)
fs.appendFile(
  path.join(__dirname, 'test.txt'), // путь до файла
  ' / доп запись через append', // запись в файл
  (err) => {
    // колбэк ошибки/успеха
    if (err) {
      console.log(err)
      return
    }
    console.log('Файл создан и записан')
  }
)
// -----------------------
