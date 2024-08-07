// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// 121. Best Time to Buy and Sell Stock
// Easy
// Topics
// Companies

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function maxProfit(prices: number[]): number {
    let l = 0;
    let r = 1;
    let maxP = 0;
    console.log(prices.length);
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            const profit = prices[r] - prices[l];
            maxP = Math.max(maxP, profit);
        } else {
            l = r;
        }
        r++;
    }
    return maxP;
};
// console.log("maxProfit->", maxProfit([7, 1, 5, 3, 6, 4]));
// console.log("maxProfit->", maxProfit([7, 6, 4, 3, 1]));
// console.log("maxProfit->", maxProfit([2, 2, 5]));
console.log("maxProfit->", maxProfit([2, 1, 2, 1, 0, 1, 2]));