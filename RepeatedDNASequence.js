var findRepeatedDnaSequences = function(s) {
    let winStrt = 0;
    let winEnd = 9;
    let out = [];
    let freqMap = {};
    while(winEnd <= s.length && winStrt < s.length){
      let substring = s.substring(winStrt,winEnd);
      freqMap[substring] = (freqMap[substring]||0)+1;
      if(freqMap[substring] > 1 && !out.includes(substring)){
          out.push(substring);
      }
      winEnd+=1;
      winStrt+=1;
    }  
    return out;
  };
  findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT");
  findRepeatedDnaSequences("AAAAAAAAAA")