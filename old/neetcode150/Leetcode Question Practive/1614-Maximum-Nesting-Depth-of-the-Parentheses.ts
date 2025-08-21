function maxDepth1(s: string): number {
    let result = 0;
    let stack = [];
    for (const e of s) {
        if (e === "(") { stack.push(e); }
        else if (e === ")") { stack.pop(); }
        result = Math.max(result, stack.length);
    }
    return result;
};
function maxDepth(s: string): number {
    let result = 0;
    let openBracket = 0;
    for (const e of s) {
        if (e === "(") { openBracket++; }
        else if (e === ")") { openBracket--; }
        result = Math.max(result, openBracket);
    }
    return result;
};

console.log(maxDepth1("(1+(2*3)+((8)/4))+1"));
console.log(maxDepth1("(1)+((2))+(((3)))"));
console.log(maxDepth1("()(())((()()))"));