new Promise(function promise(resolve) { //
  console.log('promise');

  setTimeout(function task1() { // マクロタスク
    console.log('task1');
    resolve();
  });

}).then(function job1() {
  console.log('job1');
  setTimeout(function task1() {
    console.log('task2');
    resolve();
  })

  queuerMicrotask(function job4() {
    console.log('job4');
  })


}).then(function job1() {
  console.log('job2');
}).then(function job1() {
  console.log('job3');
})

// グローバルコンテキストの処理
console.log('global end');
