function a() {
  setTimeout(function task1() { 
    console.log('task1 done');
  });

  console.log('fn a done');
}

function b() {
  console.log('fn b done');
}

a();

b();