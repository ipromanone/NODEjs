const express = require('express') // подключение плагина exspress server
const bodyParser = require('body-parser') //  подключение плагина body-parser
const weatherRequest = require('./requests/weather.request') // Подключаем модуль из файла weather.request.js

const app = express() // вызов 

app.set('view engine','ejs') // настройка плагина ejs
app.use(express.static('public')) // указываем статический путь (подключение стилей)
app.use(bodyParser.urlencoded({extended: true})) // настройка плагина body-parser

app.get('/',(request,response) => {
    response.render('index', {weather: null, error: null})  // подключение веб-страницы
})
app.post('/', async (request,response) => { // обработка POST запроса
    const { city } = request.body

    const {weather, error} = await weatherRequest(city)
    response.render('index', {weather, error})
})

app.listen(3000, ()=> {
    console.log('Server 3000...') // запуск сервера
})


