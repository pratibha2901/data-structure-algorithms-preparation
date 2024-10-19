var longestSubstring = function(s, k) {
    let freqMap = new Map();
    let currFreq = new Map();
    let winStrt = 0;
    let winEnd = 0;
    let currentUniqueChars = 0;
    let currentUniqueCharsWithDesiredLen = new Map();
    let longestSubstringLen = 0;
    for (let c of s){
        freqMap[c] = (freqMap[c]||0)+1;

    }
    while(winEnd < s.length){
        let lastLen = winEnd - winStrt ;
        if(lastLen > longestSubstringLen && currentUniqueChars === currentUniqueCharsWithDesiredLen.size){
            longestSubstringLen = lastLen;
        }
        let currChar = s[winEnd];
        if(freqMap[currChar] < k ){
            // we cannot include this char
           // get the last substring length
           
           winStrt = winEnd+1;
           currFreq.clear();
           currentUniqueChars=0;
           currentUniqueCharsWithDesiredLen.clear();
        }else{
            if(!currFreq.has(currChar)){
                currentUniqueChars+=1;
            }
            currFreq.set(currChar, (currFreq.get(currChar)||0)+1);
            if(currFreq.get(currChar) >=k && !currentUniqueCharsWithDesiredLen.has(currChar))
            {
                currentUniqueCharsWithDesiredLen.set(currChar, true);
            }
        }
        
        winEnd++;
    }
    let lastLen = winEnd - winStrt ;
    if(lastLen > longestSubstringLen && currentUniqueChars === currentUniqueCharsWithDesiredLen.size){
            longestSubstringLen = lastLen;
    }
    return longestSubstringLen;
};
longestSubstring("aaabbb",3)