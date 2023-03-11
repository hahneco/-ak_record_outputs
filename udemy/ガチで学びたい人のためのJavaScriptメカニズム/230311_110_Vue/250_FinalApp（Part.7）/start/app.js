import { nodeOps } from './nodeOps.js';
import { createVNode, patch } from './renderer.js';
import { reactive, computed, effect } from './reactive.js';

function createApp(args) {
    const { data, computed: computedData, methods, render } = args;

    const app = {};

    const rawData = data();
    const ctx = { ...rawData, ...computedData, ...methods };

    app.publicCtx = new Proxy(ctx, {
        get(target, key, receiver) {
            if(rawData.hasOwnProperty(key)) {
                return app.data[key];
            } else if(computedData.hasOwnProperty(key)) {
                return app.computed[key].value;
            } else {
                return Reflect.get(target, key, receiver);
            }
        },
        set(target, key, value, receiver) {
            if(rawData.hasOwnProperty(key)) {
                const res = app.data[key] = value;
                return res;
            }
        }
    })
    console.log(ctx);

    app.methods = methods;
    
    app.data = reactive(rawData);

    app.computed = {};
    for(const prop in computedData) {
        const c = computed(computedData[prop], app.publicCtx);
        app.computed[prop] = c;
    }

    app.mount = function(selector) {
        const container = nodeOps.qs(selector);
        app.vnode = createVNode();
        effect(() => {
            const nextVNode = render.call(app.publicCtx);
            console.log('%c[patch]', 'background: orange; color: white;', app.vnode, nextVNode);
            patch(app.vnode, nextVNode, container);
            app.vnode = nextVNode;
        })
        
    }
    return app;
}

export { createApp, createVNode as h };