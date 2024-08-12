function buyChoco1(prices: number[], money: number): number {
    prices.sort((a, b) => a - b);
    if ((prices[0] + prices[1]) > money) return money;
    else return money - (prices[0] + prices[1]);
};
function buyChoco2(prices: number[], money: number): number {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (const num of prices) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else {
            secondSmallest = Math.min(secondSmallest, num);
        }
    }
    if ((smallest + secondSmallest) > money) return money;
    else return money - (smallest + secondSmallest);
};
console.log(buyChoco2([1, 2, 2], 3));
console.log(buyChoco2([3, 2, 3], 3));