function fn() {
  'use strict';
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
    fn();
  }
}

const c = new C();
c.method();