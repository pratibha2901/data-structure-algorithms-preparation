var lengthOfLongestSubstringTwoDistinct = function(s) {
    let freqMap = {};
    let winStrt = 0;
    let winEnd = 1;
    freqMap[s[winStrt]] = 1;
    let max = 0;
    while ( winEnd < s.length){
     let currChar = s[winEnd];
     freqMap[currChar] = (freqMap[currChar]||0) +1;
     if(Object.keys(freqMap).length >2)
     {
         while ( winStrt< s.length && Object.keys(freqMap).length > 2){
             let charToDrop = s[winStrt];
             freqMap[charToDrop] = freqMap[charToDrop]  - 1;
             if(freqMap[charToDrop] === 0){
                 delete freqMap[charToDrop];
             }
             winStrt++;
         }
     }
     if(Object.keys(freqMap).length <= 2)
        {
           max = Math.max(max, (winEnd - winStrt)+1);
          
        }
        winEnd+=1;
    }
    if(Object.keys(freqMap).length <= 2){
        max = Math.max(max, (winEnd - winStrt));
     }
     return max;
 };
 lengthOfLongestSubstringTwoDistinct("eceba")