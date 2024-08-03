// Ques 2 - Fibonacci Number
// Fibonacci Series ->0,1,1,2,3,5,8,13,21,34,55,89,144,233...

// F(0): 0 ,F(1) = 1  
// F(n) = F(n-1)+F(n-2), for n > 1 

// Input: n= 3 ---->>>> Output: 2

// 0,1,1,2,3

const FibonacciSeries = (x) => {
    if (typeof x !== "number") return;
    if (x === 0) return 0;
    const arr = [0, 1];
    for (let i = 2; i <= x; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}
console.log(FibonacciSeries(121));
console.log(FibonacciSeries(10));
