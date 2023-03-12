let isFlushing = false;
let isFlushPending = false;
const queue = [];
const p = Promise.resolve();

function nextTick(fn) {
  return p.then(fn);
}

function queueJob(job) {
  if(!queue.includes(job)) {
    queue.push(job);
    queueFlush();
  }
}

function queueFlush() {
  if(!isFlushPending && !isFlushing) {
    isFlushPending = true;
    nextTick(flushJobs);
  }
}

function flushJobs() {
  let job;
  isFlushing = true;
  isFlushPending = false;
  while((job = queue.shift()) !== undefined) {
    job();
  }
  isFlushing = false;
}
export { queueJob, nextTick };