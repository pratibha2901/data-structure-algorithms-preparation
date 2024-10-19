var findSubstring = function (s, words) {
    if(s === words.join('').toString('')){
       return [0];
   }
   let winStrt = 0;
   let k = words[0].length;

  
   let res = [];
   let mapOfWords = {};
  setOfWords = new Set(words);
  if(setOfWords.size === 1){
       let setItr = setOfWords.keys();
      mapOfWords[setItr.next().value] = words.length;
   }else {
       for (let word of words) {
           mapOfWords[word] = (mapOfWords[word] || 0) + 1;
       }
   }
   let setOfS = new Set(s);
   let iter = setOfS.keys();
   let key = (iter.next().value);
   if(setOfS.size === 1 && (key in mapOfWords) && Object.keys(mapOfWords).length === 1){
    let winStr = 0;
    while(winStrt < s.length){
       let substr = s.substring(winStrt,s.length);
       if(substr.length>= mapOfWords[key] ){
           res.push(winStrt);
           
       }
       winStrt += mapOfWords[key];
    }
    return res;
   }

  
   while (winStrt < s.length) {
       //start evaluating with this starting position
       winEnd = winStrt;
       let foundWords = {};
       let found = 0;
       while (winEnd < s.length && found < Object.keys(mapOfWords).length) {
           currentWord = s.substring(winEnd, winEnd + k);
           foundWords[currentWord] = (foundWords[currentWord]||0)+1;
           if ((currentWord in mapOfWords) && (mapOfWords[currentWord] === foundWords[currentWord])) {
             found += 1;
           }
           else if (((currentWord in mapOfWords) && (mapOfWords[currentWord] < foundWords[currentWord]))||
           (!(currentWord in mapOfWords))){
             found = 0;
             foundWords = {};
             break;
           }
           winEnd += k;
       }
       if(found === Object.keys(mapOfWords).length){
           res.push(winStrt);
       }
       winStrt += 1;
   }
   return res;
}
 findSubstring( s =
    "aaa",
    words =
    ["a","a"]);