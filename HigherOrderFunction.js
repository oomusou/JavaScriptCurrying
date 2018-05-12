const prices = [10, 20, 30];

const sum = prices =>
    prices.reduce((acc, elm) => acc + elm);

const calculate = prices => action =>
    action(sum(prices));

const calculatePrice = calculate(prices);
console.log(calculatePrice(sum => sum - 10));
console.log(calculatePrice(sum => sum * 0.9));