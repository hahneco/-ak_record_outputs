const handler = {
  get(target, key, receiver) {
    const res = Reflect.get(target, key, receiver);
    console.log('%c[reactive:get]', 'background: green; color: white;', key, res);
    track(target);
    return res;
  },
  set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver);
    console.log('%c[reactive:set]', 'background: red; color: white;', key, value);
    trigger(target);
    return res;
  }
}
function reactive(target) {
  return new Proxy(target, handler);
}

let activeEffect = null;
function effect(fn) {
  activeEffect = fn;
  activeEffect();
}

const targetMap = new WeakMap();
function track(target) {
  console.log('%c[effect:register]', 'background: blue; color: white;', target, activeEffect);
  targetMap.set(target, activeEffect);
}

function trigger(target) {
  const effect = targetMap.get(target);
  effect();
}
export { effect, trigger, reactive };