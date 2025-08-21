let a = "abcd";
let b = "abcde";

const func1 = () => {
  let c: { [key: string]: number } = {};
  for (const element of a) {
    c[element] = c[element] ? c[element] + 1 : 1;
  }

  for (const e of b) {
    c[e] = c[e] ? c[e] - 1 : -1;
  }

  for (const key in c) {
    if (c[key] !== 0) {
      return key;
    }
  }
  return null;
};

// console.log(func1());

const func2 = () => {
  let suma = 0,
    sumb = 0;
  for (const e of a) suma += e.charCodeAt(0);
  for (const e of b) sumb += e.charCodeAt(0);
  return String.fromCharCode(sumb - suma);
};

console.log(func2());

const func3 = () => {
    let xor_sum = 0;
    for (const e of a) xor_sum ^= e.charCodeAt(0);
    for (const e of b) xor_sum ^= e.charCodeAt(0);
    return String.fromCharCode(xor_sum);
  };
  
  console.log(func3());

