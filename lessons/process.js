console.log(process.pid) // id текущего процесса

// "импорт" утилиты для обращения к пользовательским параметрам окружения в файле .env
const dotenv = require('dotenv')
dotenv.config() // обязательный вызом метода

// обращение к параметрам из файла .env
console.log(process.env.PORT)
console.log(process.env.NODE_ENV)
// --------------------------------------------------

console.log(process.argv) // аргументы, которые передаем через консоль, хранятся здесь
// --------------------------------------------------

for (let index = 0; index < 5; index++) {
  while (Math.random() < 0.5) {
    console.log('-')
  }
  console.log('end')
  process.exit() // процесс можно завершать вручную (отключение программы)
}
