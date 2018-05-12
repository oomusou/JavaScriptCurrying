const prices = [10, 20, 30];

const discount = (rate, prices) =>
    prices.map(elm => elm * rate);

const sum = prices =>
    prices.reduce((acc, elm) => acc + elm);

const compose = (...fns) =>
    fns.reduce(
        (f, g) => (...args) => f(g(...args))
    );

const action = compose(sum, discount(0.8));
console.log(action(prices));