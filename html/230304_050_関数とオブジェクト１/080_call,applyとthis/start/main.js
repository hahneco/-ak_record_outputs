function a(name) {
    console.log('hello ' + name);
}

const b = a.bind(null, 'Tim');

b();
