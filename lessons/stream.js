// 4 типа потоков
// Readable - чтение
// Writeable - запись
// Duplex - Readable + Writeable
// Transform - Такой же как Duplex, но может изменить данные по мере чтения

const fs = require('fs')
const path = require('path')

// fs.readFile(path.join(__dirname, 'heavy.txt'), (err, data) => {
//   if (err) {
//     throw err
//   }
//   console.log(data)
// })

const readableStream = fs.createReadStream(path.join(__dirname, 'heavy.txt')) // создать экземпляр потока чтения
readableStream.on('data', (chunk) => {
  // открыли поток чтения, вся информация в событие data
  // chunk - кусочек файла (64 кб), информация считывается по кусочкам
  console.log(chunk)
})
readableStream.on('end', () => console.log('Закончил читать')) // конец потока
readableStream.on('open', () => console.log('Начал читать')) // начало потока
readableStream.on('error', (e) => console.log(e)) // ошибка (важно указывать иначе весь процесс может упасть!!!)

const writeableStream = fs.createWriteStream(path.join(__dirname, 'test4.txt'))
for (let i = 0; i < 20; i++) {
  // запись по кусочкам
  writeableStream.write(i + '\n')
}
writeableStream.end()
// ещё методы для закрытия (каждый нужен для чего-то своего)
// writeableStream.close()
// writeableStream.destroy()
// writeableStream.on('error')

const http = require('http')
http.createServer((req, res) => {
  // req - readable stream
  // res - writable stream
  const stream = fs.createReadStream(path.join(__dirname, 'test4.txt'))

  // stream закончит читать раньше, чем пользователь скачает
  // stream.on('data', (chunk) => {
  //     res.write(chunk)
  // })
  // stream.on('end', () => {
  //     res.end()
  // })

  // вместо примера выше лучше использовать pipe для синхронизации
  stream.pipe(res)
})
