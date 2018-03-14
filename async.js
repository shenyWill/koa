
function takeLongTime(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('hello async')
        }, 3000);
    })
}

async function test() {
    var result = await takeLongTime();
    console.log(result)
}

test();