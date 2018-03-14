const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();



//父级路由
const router = new Router();

//子级路由 --home
const home = new Router();
home
    .get('/will',async(ctx)=>{
        ctx.body = 'home->will'
    })
    .get('/yuan',async(ctx)=>{
        ctx.body = 'home->yuan'
    })

//子级路由 --page
const page = new Router();
page
    .get('/will',async(ctx)=>{
        ctx.body = 'page->will'
    })
    .get('/yuan',async(ctx)=>{
        ctx.body = 'page->yuan'
    })

//加载路由中间件
app
    .use(router.routes())
    .use(router.allowedMethods())

//父级路由装载子路由
router
    .use('/home',home.routes(),home.allowedMethods())
    .use('/page',page.routes(),page.allowedMethods())

app.listen(3000,()=>{
    console.log('配置子路由')
})