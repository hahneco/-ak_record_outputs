import { nodeOps } from './nodeOps.js';

function createVNode(type = '', props = {}, children = '') {
  return {
    type,
    props,
    children
  }
}

function patch(n1, n2, container) {
  let el;
  if(n1.type !== n2.type) {
    el = n2.el = nodeOps.create(n2.type);
    nodeOps.append(container, el);
  } else {
    el = n2.el = n1.el;
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
  if(n2.children instanceof Array) {
    for(let i = 0; i < n2.children.length; i++) {
      if(n1.children.hasOwnProperty(i)) {
        patch(n1.children[i], n2.children[i], el);
      } else {
        patch(createVNode(), n2.children[i], el);
      }
    }
  } else {
    if(n1.children !== n2.children) {
      nodeOps.html(el, n2.children);
    }
  }
  
}

export { createVNode, patch };