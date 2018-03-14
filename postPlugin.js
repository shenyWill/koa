
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

app.use(bodyParser());

app.use(async(ctx) => {
    if(ctx.url === '/' && ctx.method === 'GET') {
        let htmlDom = `
            <h1>post提交表单</h1>
            <form method="post" action="/">
                <p>username</p>
                <input name="username">
                </br>
                <p>age</p>
                <input name="age">
                </br>
                <p>website</p>
                <input name="website">
                </br>
                <button type="submit">提交</button>
            </form>
        `
        ctx.body = htmlDom;
    }else if(ctx.url === '/' && ctx.method === 'POST') {
        let htmlStr = ctx.request.body;
        ctx.body = htmlStr
    }else {
        ctx.body = `
            <h1>404</h1>
        `
    }
})



app.listen(3000,()=>{
    console.log('post请求')
})

