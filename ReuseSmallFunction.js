const greeting = hi => target => name =>
    hi + ' ' + target + ' ' + name;

const helloWorld = greeting('Hello')('World');
const words = helloWorld('Sam');
console.log(words);
