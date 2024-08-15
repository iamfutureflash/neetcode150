function lemonadeChange(bills: number[]): boolean {
    let five = 0;
    let ten = 0;
    let twenty = 0;
    for (const bill of bills) {
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            if (five === 0) return false;
            five--;
            ten++;
        } else if (bill === 20) {
            twenty++;
            if (ten > 0 && five > 0) {
                ten--; five--;
            } else if (five >= 3) {
                five -= 3
            } else {
                return false;
            }
        }
    }
    return true;
};

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));