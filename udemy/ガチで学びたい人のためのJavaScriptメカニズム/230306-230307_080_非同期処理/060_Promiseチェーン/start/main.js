function sleep(callback, val) {
  setTimeout(function() {
    console.log(val++);
    callback(val);
  }, 1000);
}