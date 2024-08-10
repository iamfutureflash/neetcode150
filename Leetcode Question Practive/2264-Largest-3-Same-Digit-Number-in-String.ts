function largestGoodInteger(num: string): string {
    let result = ''
    for (let i = 0; i < num.length; i++) {
        let char = num[i];
        // console.log(num[i], num[i + 1], num[i + 2], "num[i] === num[i + 1] && num[i + 1] === num[i + 2]", num[i] === num[i + 1] && num[i + 1] === num[i + 2], "result", result);
        if (num[i] === num[i + 1] && num[i + 1] === num[i + 2]) {
            result = num[i] > result ? num[i] : result;
        }
    }
    return result + result + result;
};

function largestGoodInteger1(num: string): string {
    const temp = ['999', '888', '777', '666', '555', '444', '333', '222', '111', '000',]
    for (let i = 0; i < temp.length; i++) if (num.includes(temp[i])) return temp[i];
    return '';
};

console.log(largestGoodInteger1("6777133339")); //777
console.log(largestGoodInteger1("2300019")); //000