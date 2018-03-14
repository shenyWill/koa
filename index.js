const Koa = require('koa');
const app = new Koa();

app.use(async(ctx) => {
    ctx.body = 'hellp koa'
})
app.listen(3000);
console.log('koa is good');