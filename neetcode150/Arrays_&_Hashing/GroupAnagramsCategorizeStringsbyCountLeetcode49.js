function groupAnagrams(strs) {
    const ag = new Object();
    for(const str of strs){
        const sig = str.split('').sort().join('');
        if(ag.hasOwnProperty(sig)){
            ag[sig].push(str);
        }else{
            ag[sig] = [str]
        }
    }
    return Object.values(ag);
}

// Example usage:
const example1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const example2 = [""];
const example3 = ["a"];

console.log(groupAnagrams(example1));
console.log(groupAnagrams(example2));
console.log(groupAnagrams(example3));
ran