var characterReplacement = function(s, k) {
    const getMostFrequentChar = (freqMap,mostFrequentChar) => {
        for(let alphabet of freqMap){
           if(!(mostFrequentChar in freqMap)){
            mostFrequentChar = alphabet;
           }else{
            if(freqMap[alphabet] > freqMap[mostFrequentChar]){
                mostFrequentChar = alphabet;
            }
           }
        }
        return mostFrequentChar;
    }
    let setOfS = new Set(s);
    if(setOfS.size === 1){
        return s.length;
    }
    let longestLength = 0;
    let charFreqMap = new Map();
    let winStart = 0;
    let winEnd = 0;
    let mostFrequentChar = s[winStart];
    while(winEnd < s.length){
        let currChar = s[winEnd];
        charFreqMap.set(currChar,(charFreqMap.get(currChar)||0)+1);
        if(charFreqMap.get(currChar) > charFreqMap.get(mostFrequentChar)){
            mostFrequentChar = currChar;
        }
        let replacementRequired = (winEnd - winStart + 1) - charFreqMap.get(mostFrequentChar) ;
        if(replacementRequired <= k){
            longestLength = Math.max(longestLength,(winEnd - winStart +1));
        }else{
            
            charFreqMap.set(s[winStart],charFreqMap.get(s[winStart])-1);
            winStart+=1;
            mostFrequentChar= s[winStart];
        }
        winEnd++;
    }
    return longestLength;
    
};
characterReplacement("IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR",2 )