console.log(`RUNNING TASK ...`);

// Simulating some long running task (asynchronous).
// It would not matter if the task is sync or async.
new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
  console.log(`TASK READY`);
});

// Simulating some long running task (synchronous).
// let i = 0;
// while (i < 5000000000) {
//   i++;
// }

// console.log(`TASK READY`);
