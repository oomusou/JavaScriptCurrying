const greeting = function (hi) {
    return function (target) {
        return function (name) {
            return hi + ' ' + target + ' ' + name;
        }
    }
};

const words = greeting('Hello')('World')('Sam');
console.log(words);
