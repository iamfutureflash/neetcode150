// function isPowerOfFourAP1(n: number): boolean {
//     console.log(n);
//   while (n % 4 == 0) {
//     if (n % 4 === 1) return true;
//     n = n / 4;
//     console.log(n);
//   }
//   return false;
// }

// console.log(isPowerOfFourAP1(12));

function isPowerOfFourAP1(n: number): boolean {
  while (n % 4 == 0) {
    if (n % 4 === 1) return true;
    n = n / 4;
  }
  return false;
}

console.log(isPowerOfFourAP1(12));
