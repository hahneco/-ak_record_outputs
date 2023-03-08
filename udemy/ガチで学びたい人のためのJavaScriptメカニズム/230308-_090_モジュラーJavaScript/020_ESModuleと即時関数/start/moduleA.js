console.log('ESmodule called');

// const moduleA = (function () {

//   let privateVal = 1;
//   export let publicVal = 10;

//   export function publicFn() {
//     console.log('publicFn called: ' + publicVal);
//   }

//   function privateFn() {

//   }

// })();

console.log('ESmodule called');

let privateVal = 1;
export let publicVal = {prop: 10};

export function publicFn() {
  console.log('publicFn called: ' + privateVal);
  privateVal++;
}

function privateFn() {

}
