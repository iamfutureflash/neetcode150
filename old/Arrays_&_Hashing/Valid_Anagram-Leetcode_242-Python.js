console.log('valid anagram');
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    return sortedS === sortedT
    console.log(sortedS, sortedT);

    // slution 1
    // if (s.length !== t.length) return false;
    // let countA = {};
    // let countB = {};
    // console.log('entring try');
    // for (const i in s) {
    //     countA[s[i]] = 1 + (countA[s[i]] || 0);
    //     countB[t[i]] = 1 + (countB[t[i]] || 0);
    // }
    // for (const c in countA) {
    //     if (countA[c] !== countB[c]) return false;
    // }
    // return true;
}

const result = isAnagram('tcar', 'ratc')
console.log(result);
