function destCity(paths: string[][]): string {
    let obj: { [key: string]: number } = {};
    for (const cites of paths) {
        obj[cites[0]] = 1;
    }
    for (const cites of paths) {
        if (!obj.hasOwnProperty(cites[1])) return cites[1];
    }
    return ''
};

function destCity2(paths: string[][]): string {
    const set = new Set();
    for (const cites of paths) {
        set.add(cites[0]);
    }
    for (const cites of paths) {
        if (!set.has(cites[1])) return cites[1];
    }
    return ''
};

let a1 = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]];
let b1 = [["B", "C"], ["D", "B"], ["C", "A"]];
let c2 = [["A", "Z"]];

console.log(destCity2(a1));
console.log(destCity2(b1));
console.log(destCity2(c2));