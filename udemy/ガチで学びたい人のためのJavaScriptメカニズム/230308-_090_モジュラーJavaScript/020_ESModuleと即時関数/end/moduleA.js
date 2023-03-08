
console.log('ESmodule called');

let privateVal = 1;
export let publicVal = {prop: 10};

export function publicFn() {
  console.log('publicFn called: ' + privateVal);
  privateVal++;
}

function privateFn() {

}
