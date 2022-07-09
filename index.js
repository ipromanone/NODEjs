const express = require('express') // подключение плагина exspress

const app = express() // вызов 

app.set('view engine','ejs') // настройка плагина ejs
app.use(express.static('public')) // указываем статический путь (подключение стилей)

app.get('/', (request,response) => {
    response.render('index')  // подключение веб-страницы
})

app.listen(3000, ()=> {
    console.log('Server 3000...') // запуск сервера
})


