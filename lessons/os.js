const os = require('os') // модуль для взаимодействия с ОС
const cluster = require('cluster') // модуль для использования всех возможностей многоядерных систем

if (cluster.isPrimary) {
  // если процесс родительский, то...
  for (let i = 0; i < os.cpus().length - 2; i++) {
    // основываясь на кол-ве ядров запускаем дочерние процессы
    cluster.fork() // запуск дочернего процесса
  }
  cluster.on('exit', (worker, code, signal) => {
    // слушатель события 'exit', т.е. слушатель завершения процесса
    console.log(`Воркер с pid = ${worker.process.pid} умер`)
    cluster.fork() // возобновим работу воркера
  })
} else {
  console.log(`Воркер с pid = ${process.pid} запущен`)
  setInterval(() => {
    console.log(`Воркер с pid = ${process.pid} ещё работает`)
  }, 5000)
}

// console.log(os.platform()) // возвращает текущую систему
// console.log(os.arch()) // возвращает архитектуру системы
// console.log(os.cpus()) // возвращает описание ядер процессора
