// // input : aab
// // output: aba
// // input: aaab
// // output: ""
// // count each character
// // [ { a: 3 }, { b: 1} ]

// // construct a new array
// // iterate through each char in map & reduce count
// // a: 1, b: 0
// // aba X
// // BASE: WHEN ALL COUNTS = 0
// // [a: 0, b: 0]
// // aba
// // Whenever every count in hash is 0
// // > 1 scan (N) for creating the map
// // > iterations of the keys in the map ~= N
// // > Space: O(N) complexity
// // > TC = O(N)
// // aaaabbbbcc
// // ccaaaabbbb
// // { c: 0, a: 0, b: 0 }
// // cabcababab
// // aaab
// // [ { a: 0, b: 0 } ]
// // abaa


// function buildAlternate (str) {
//     // Build the map
//     const map = new Map()
//     let uniquechars = 0
//     str.split('').forEach(char => 
//         {
//         if (map.has(char)) {
//             map.set(char, map.get(char) + 1)
//         } else {
//                 map.set(char, 1)
//                 uniquechars += 1
//             }
//     })
//     // Iterate over the map:
//     let nonZeroes = uniquechars
//     let resStr = ''

//     for (const [key, value] of map.entries()) {
//         if (!nonZeroes) {
//             break
//            }

//            if (resStr[resStr.length - 1] === key) {
//             return ""
//         }
//         // Append char
//         resStr += key
//         // Decrement count for char in map
//         map.set(key, map.get(key) - 1)
//         // If count decreased from 1 to 0, decrement 'nonZeroes' count
//         if (map.get(key) === 0 && map.get(key) !== value) {
//         nonZeroes -= 1
    
//             }
//         console.log(key, value);
//       }

   
    
//     return resStr
// }

// console.log(buildAlternate("aab"))


function createFrequencyAnalysis(str) {
    var charFrequency = {};

    Array.prototype.forEach.call(str, function(ch) {
        charFrequency[ch] ? charFrequency[ch]++ : charFrequency[ch] = 1;
    });
    return charFrequency;
}

function reArrange (str) {

  var freqMap = createFrequencyAnalysis(str);
  
  var strLength = str.length;
  var characters = Object.keys(freqMap);
  var output = new Array(strLength);
  
  var i = 0;
  var j = 0;
  var k = 0;
  var charFreq = 0;
  var numberOfChar = characters.length;
  let maxFreq = Math.max(...Object.values(freqMap));
  console.log(maxFreq)
   
  for (i = 0; i < numberOfChar; i++) {
    charFreq = freqMap[characters[i]];
  
    if (maxFreq > ((strLength - maxFreq) + 1)) {
      console.log('No valid output');
      return;
    }
  
    for (k = 0; k < charFreq; k++) {
      // If reached at the end of an array, wrap the array and
      // start from the begining with odd (1, 3, 5 ...) indexes
      if (j > strLength) {
        j = 1;
      }
      
      output[j] = characters[i];
      j += 2;
    }
  }
  return output.join('');
}


function getFreq(str) {
    let freq = {};
    str.split('').forEach(char => {
        if(freq[char]) {
            freq[char] += 1;
        } else {
            freq[char] = 1;
        }
    })

    return freq;
}

function arrangeString(str) {
    const charFreq = getFreq(str);
    let strLength = str.length;
    let characters = Object.keys(charFreq);
    let output = new Array(strLength);

    let i = 0, j = 0, k=0;
    let noOfChar = characters.length;
    let maxFreq = Math.max(...Object.values(charFreq));
    let noCharFreq = 0;

    for ( i = 0; i < noOfChar; i++) {
       noCharFreq = charFreq[characters[i]];

       if(maxFreq > (strLength - maxFreq) + 1) {
           console.log("not valid");
           return;
       }

       for(k = 0; k < noCharFreq; k++) {
           if(j > strLength) {
               j = 1;
           }

           output[j] = characters[i];
           j += 2;
       }   
    }

    return output.join('');


}

console.log(arrangeString("aaaabc"));


