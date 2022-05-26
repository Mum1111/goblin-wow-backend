const Koa = require('koa')


const app = new Koa()


app.listen(5000, () => {
    console.log('Koa is listening in http://localhost:5000')
})

module.exports = app