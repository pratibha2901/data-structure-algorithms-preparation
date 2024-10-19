

var minWindow = function (s, t) {
    let tFreqMap = {};
    let minWindowSubstring = "";
    for (let char of t) {
        tFreqMap[char] = (tFreqMap[char] || 0) + 1;
    }
    let winStrt = 0;
    let winEnd = 0;
    let subStrMap = {};
    let k = Object.keys(tFreqMap).length;
    let found = 0;
    while (winEnd < s.length && winStrt < s.length) {



        let currChar = s[winEnd];
        if (currChar in tFreqMap) {
            subStrMap[currChar] = (subStrMap[currChar] || 0) + 1;
            if (currChar in tFreqMap && tFreqMap[currChar] == subStrMap[currChar]) {
                found += 1;

            }
        }



        // at this point we have found our Window
        // now next step is to find minimum of this window which still has all chars of t
        while (found === k && winStrt <= winEnd) {
            let newMin = s.substring(winStrt, winEnd + 1);
            if (minWindowSubstring === "" || newMin.length < minWindowSubstring.length) {
                minWindowSubstring = newMin;
            }
            let charAtWinStrt = s[winStrt];
            if (charAtWinStrt in tFreqMap && (subStrMap[charAtWinStrt] - 1) < tFreqMap[charAtWinStrt]) {
                found--;
            }
            subStrMap[charAtWinStrt]--;
            winStrt++;
        }


        winEnd++;

    }
    return minWindowSubstring;
};


minWindow(s = "ADOBECODEBANC", t = "ABC")
minWindow(s = "bdab", t = "ab")