function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// Promise.all([sleep(2), sleep(3), sleep(4)])
Promise.sleep([sleep(2), sleep(3), sleep(4)])
  .then(function (data) {
    console.log(data);
  });
sleep(0).then(function (val) {
  // return sleep(val);
  return Promise.all([sleep(2), sleep(3), sleep(4)])
}).then(function(val) {
  // return sleep(val);
  return Promise.all([sleep(2), sleep(3), sleep(4)])
}).then(function(val) {
  return sleep(val);
})

// ########################
// 直列ではなく並列に非同期処理を行いたい場合
