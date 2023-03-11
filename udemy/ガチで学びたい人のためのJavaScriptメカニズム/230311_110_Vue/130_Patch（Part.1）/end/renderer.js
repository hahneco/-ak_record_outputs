import { nodeOps } from './nodeOps.js';

function createVNode(type = '', props = {}, children = '') {
  return {
    type,
    props,
    children
  }
}

function patch(n1, n2, container) {
  console.log(n1, n2);
  let el;
  if(n1.type !== n2.type) {
    el = nodeOps.create(n2.type);
    nodeOps.append(container, el);
  }
  if(n1.children !== n2.children) {
    nodeOps.html(el, n2.children);
  }
}

export { createVNode, patch };