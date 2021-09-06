console.log('first');
// setInterval(() => {
//     console.log('third')
// }, 5000);
let seconds = 0;
const timeId = setInterval(() => {
    // seconds++;
    /// console.log(seconds++);
    console.log(++seconds);
    if (seconds > 15) {
        clearInterval(timeId);
    }
}, 1000);
console.log('second')