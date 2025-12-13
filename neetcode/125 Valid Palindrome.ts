function isPalindrome(s: string): boolean {
  let l = 0;
  let r = s.length - 1;

  const isAlphaNum = (c: string) => {
    return /[a-zA-Z0-9]/.test(c);
  };

  while (l < r) {
    while(l<r && !isAlphaNum(s[l].toLowerCase())) l++;
    while(l<r && !isAlphaNum(s[r].toLowerCase())) r--;
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome(" "));
console.log(isPalindrome("Naman is si Naman"));
console.log(isPalindrome("cat bat"));
