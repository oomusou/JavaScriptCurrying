const prices = [10, 20, 30];

const calculatePrice1 = prices => {
    const sum = prices  =>
        prices.reduce((acc, elm) => acc + elm);

    return sum(prices) - 10;
};

const calculatePrice2 = prices => {
    const sum = prices  =>
        prices.reduce((acc, elm) => acc + elm);

    return sum(prices) * 0.9
};

console.log(calculatePrice1(prices));
console.log(calculatePrice2(prices));