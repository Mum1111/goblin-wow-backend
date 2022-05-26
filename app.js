const Koa = require('koa')
const InitManager = require('./core/init')


const app = new Koa()

InitManager.initCore(app)

app.listen(5000, () => {
    console.log('Koa is listening in http://localhost:5000')
})

module.exports = app