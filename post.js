
const Koa = require('koa');
const app = new Koa();

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
        let htmlStr = await parsePostData(ctx);
        // let ctxHtml = transformStr(htmlStr);
        ctx.body = htmlStr
    }else {
        ctx.body = `
            <h1>404</h1>
        `
    }
})

function parsePostData(ctx) {
    return new Promise((resolve,reject) => {
        try {
            let postData = '';
            ctx.req.addListener('data',(data)=>{
                postData += data;
            });
            ctx.req.on('end',()=>{
                let obj = transformStr(postData);
                resolve(obj);
            })
        }catch(error) {
            reject(error)
        }
    })
}

function transformStr(str) {
    let jsonArr = str.split('&');
    let obj = {};
    for(let itemStr of jsonArr) {
        let itemArr = itemStr.split('=');
        obj[itemArr[0]] = decodeURIComponent(itemArr[1]);
    }

    return obj;
}


app.listen(3000,()=>{
    console.log('post请求')
})

