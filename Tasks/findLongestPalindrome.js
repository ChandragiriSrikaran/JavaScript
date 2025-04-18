// Task 2: Longest Palindrome Substring
// Given a string s, return the longest palindromic substring in s.
// A string is called a palindrome if it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.
let str='madam';
let str2='racecar';
let str3='hello';
let str4="pdsd";
console.log(longestPalindrome(str)); // Output: "madam"
console.log(longestPalindrome(str2)); // Output: "racecar"   
console.log(longestPalindrome(str3)); // Output: "h"
console.log(longestPalindrome(str4));
function longestPalindrome(s) {
    let len=1;
    let si=0;
    for(let i=0;i<s.length;i++){
        let l=i-1;
        let r=i+1;
        // Check for odd length palindromes
        while(l>=0 && r<s.length && s[l]===s[r]){
            if(r-l+1>len){
                si=l;
                len=r-l+1;
            }
            l--;
            r++;
        }
        // Check for even length palindromes
        l=i-1;
        r=i;
        while(l>=0 && r<s.length && s[l]===s[r]){
            if(r-l+1>len){
                si=l;
                len=r-l+1;
            }
            l--;
            r++;
        }
    }
    // Return the longest palindromic substring
    return s.slice(si,si+len);
}