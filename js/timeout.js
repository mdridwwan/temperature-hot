function doSomething() {
    console.log('five java')
}
console.log('first');
console.log('second');
setTimeout(doSomething, 5000);
setTimeout(() => {
    console.log('expolring mdn articles')
}, 4000)
console.log('third');
console.log('fourth')