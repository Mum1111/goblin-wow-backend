const cors = require('@koa/cors')
const Koa = require('koa')
const koaBodyparser = require('koa-bodyparser')
const InitManager = require('./core/init')

require('module-alias/register')

const catchError = require('./middlewares/exception')


const app = new Koa()

app.use(cors())
app.use(catchError)
app.use(koaBodyparser())

InitManager.initCore(app)

app.listen(5000, () => {
    console.log('Koa is listening in http://localhost:5000')
})

module.exports = app