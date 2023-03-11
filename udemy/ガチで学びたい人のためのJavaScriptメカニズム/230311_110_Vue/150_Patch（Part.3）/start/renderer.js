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

  for(const key in n2.props) {
    const prevProp = n1.props[key];
    const nextProp = n2.props[key];

    if(prevProp !== nextProp) {
      if(key.startsWith('on')) {
        nodeOps.on(el, key.substring(2).toLowerCase(), () => {
          nextProp();
        });
      } else {
        nodeOps.setAttr(el, key, nextProp);
      }
      
    }
  }
  if(n1.children !== n2.children) {
    nodeOps.html(el, n2.children);
  }
}

export { createVNode, patch };