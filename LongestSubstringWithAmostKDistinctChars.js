var lengthOfLongestSubstringKDistinct = function(s, k) {
    let longestLength = 0;
    let i = 0;
    let distinctCount = 0;
    let distinctCharsObj = new Map();
    let winStart = 0;
    let winEnd = 0;
    while(winEnd < s.length){
       let currChar = s[winEnd];
       if(!(distinctCharsObj.has(currChar)) || (distinctCharsObj.get(currChar) <= 0)){
        distinctCount++;
       }
       distinctCharsObj.set(currChar, (distinctCharsObj.get(currChar) || 0) + 1);
       if(distinctCount <= k){
          let currLen = winEnd - winStart + 1;
          if(currLen > longestLength){
               longestLength = currLen;
          }
       }
      if(distinctCount > k){
        winStart=winEnd;
        distinctCount=1;
        distinctCharsObj.clear();
        distinctCharsObj.set(s[winStart],1)
      }
       winEnd++;
    }
    return longestLength;
};
lengthOfLongestSubstringKDistinct("abee",1)