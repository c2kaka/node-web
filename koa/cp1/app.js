const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
  const start = new Date()
  
  console.log('[logger] before wait...')
  await next()
  console.log('[logger] after wait...')

  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(async (ctx) => {
  console.log('[response] response')

  ctx.body = 'Hello Koa2!'
})

app.listen(3000)