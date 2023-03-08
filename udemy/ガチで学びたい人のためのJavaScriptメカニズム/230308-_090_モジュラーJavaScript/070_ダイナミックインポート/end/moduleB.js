async function fn() {
  const modules = await import('./moduleA.js');
  modules.publicFn();
}
fn();

// import('./moduleA.js').then(function(modules) {
//   console.log(modules);
//   modules.publicFn();
// })