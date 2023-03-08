'use strict'

function fn() {
    console.log(this);
}
class C {
    constructor() {
        fn();
    }

    method() {
        function fn() {
            console.log(this);
        }
    }
}

const c = new C();
c.method();
