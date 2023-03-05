function hello(name) {
    console.log('hello ' + name);
}

function bye() {
    console.log('bye');
}

function fn(cb) {
    cb();
}

fn(hello);
fn(bye);
fn(function(name) {
    console.log('hello ' + name);
});

setTimeout(hello, 2000);