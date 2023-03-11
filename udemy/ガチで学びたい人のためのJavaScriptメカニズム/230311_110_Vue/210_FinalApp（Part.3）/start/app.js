import { nodeOps } from './nodeOps.js';
import { createVNode, patch } from './renderer.js';

function createApp(args) {
    const { render } = args;

    const app = {};
    app.mount = function(selector) {
        const container = nodeOps.qs(selector);
        app.vnode = createVNode();
        const nextVNode = render();
        console.log('%c[patch]', 'background: orange; color: white;', app.vnode, nextVNode);
        patch(app.vnode, nextVNode, container);
    }
    return app;
}

export { createApp, createVNode as h };