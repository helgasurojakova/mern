const express = require('express') //получаем express, в node.js есть глобальная функция require()
const config = require('config')
const mongoose = require('mongoose')

const app = express() //будущий сервер

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1) //завершение процесса в случае ошибки
    }
}

start()


