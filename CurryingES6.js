const greeting = hi => target => name =>
    hi + ' ' + target + ' ' + name;

const words = greeting('Hello')('World')('Sam');
console.log(words);