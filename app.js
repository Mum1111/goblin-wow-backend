const cors = require('@koa/cors')
const Koa = require('koa')
const koaBodyparser = require('koa-bodyparser')
const InitManager = require('./core/init')
const ratelimit = require('koa-ratelimit');


require('module-alias/register')

const catchError = require('./middlewares/exception')


const app = new Koa()

app.use(cors())
app.use(catchError)
app.use(koaBodyparser())

const db = new Map()

app.use(ratelimit({
    driver: 'memory',
    db: db,
    duration: 60000,
    errorMessage: 'Sometimes You Just Have to Slow Down.',
    id: (ctx) => ctx.ip,
    headers: {
      remaining: 'Rate-Limit-Remaining',
      reset: 'Rate-Limit-Reset',
      total: 'Rate-Limit-Total'
    },
    max: 100,
    disableHeader: false,
    whitelist: (ctx) => {
      // some logic that returns a boolean
    },
    blacklist: (ctx) => {
      // some logic that returns a boolean
    }
  }));

InitManager.initCore(app)

app.listen(5000, () => {
    console.log('Koa is listening in http://localhost:5000')
})

module.exports = app