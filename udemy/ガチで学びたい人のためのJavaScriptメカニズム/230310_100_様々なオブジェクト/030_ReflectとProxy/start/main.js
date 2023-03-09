const targetObj = { a: 0 };

const handler = {
  get: function(target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    if(target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return -1;
    }
  }
}
const pxy = new Proxy(targetObj, handler);
