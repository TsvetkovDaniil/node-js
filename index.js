const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('./framework/bodyParser')
const parseUrl = require('./framework/parseUrl')

dotenv.config()

const PORT = process.env.PORT || 3000

const app = new Application()

app.use(jsonParser)
app.use(parseUrl('http://localhost:3000'))

app.addRouter(userRouter)

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://tsvetkovdaniil001:520Boum520@cluster0.inyrfpr.mongodb.net/?retryWrites=true&w=majority'
    ) // подключение к базе данных
    app.listen(PORT, () => {
      console.log(`Server started on PORT:${PORT}`) // при успешном запуске
    })
  } catch (e) {
    console.log(e)
  }
}
start()
