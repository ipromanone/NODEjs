const express = require('express') // подключение плагина exspress server
const bodyParser = require('body-parser') //  подключение плагина body-parser
const weatherRequest = require('./requests/weather.request')

// 69a59655bbe4d5fc82a38bc6f87eb48e

const app = express() // вызов 

app.set('view engine','ejs') // настройка плагина ejs
app.use(express.static('public')) // указываем статический путь (подключение стилей)
app.use(bodyParser.urlencoded({extended: true})) // настройка плагина body-parser

app.get('/', (request,response) => {
    response.render('index')  // подключение веб-страницы
})
app.post('/', (request,response) => { // обработка POST запроса
    const { city } = request.body

    weatherRequest(city)
    response.render('index')
})

app.listen(3000, ()=> {
    console.log('Server 3000...') // запуск сервера
})


