var findSubstring = function(s, words) {
    let winStrt = 0;
    let k = words[0].length;
    let winEnd = k;
    let found = 0;
    let res = [];
    let setOfWords = {};
    for (let word of words){
        setOfWords[word] = (setOfWords[word]||0)+1;
    }
    let foundWords = {};
    while(winStrt < s.length && winEnd < s.length){
        let currSubstr = s.substring(winEnd-k,winEnd);
        foundWords[currSubstr] = (foundWords[currSubstr] || 0) +1;
        if(found > 0 && (!(currSubstr in setOfWords) || (setOfWords[currSubstr] > foundWords[currSubstr]))){
            found = 0;
            foundWords = {};
            winStrt+=k;
        }
        else if((currSubstr in setOfWords) && (setOfWords[currSubstr] === foundWords[currSubstr])){
          found +=1;
         
        }else{
            winStrt+=k;
        }
        if(found === words.length){
          res.push(winStrt);
          found = 0;
          foundWords = {};
          winStrt=winEnd;
        }
         
          winEnd+=k;
        
       
    }
    return res;
 }
 findSubstring(s = "barfoothefoobarman", words = ["foo","bar"])