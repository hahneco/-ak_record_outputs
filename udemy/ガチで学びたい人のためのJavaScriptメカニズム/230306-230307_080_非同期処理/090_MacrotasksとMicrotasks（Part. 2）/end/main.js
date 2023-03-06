new Promise(function promise(resolve) {
  console.log('promise');

  setTimeout(function task1() {
    console.log('task1');
    resolve();
  });

  setTimeout(function task1() {
    console.log('task2');

    const p = Promise.resolve();
    p.then(function job4() {
      console.log('job4')
    })

    queueMicrotask(function job4() {
      console.log('job4')
    })
  });

}).then(function job1() {
  console.log('job1');
  

}).then(function job2() {
  console.log('job2');
}).then(function job3() {
  console.log('job3');
})

console.log('global end');