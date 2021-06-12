function getFreq(str) {
    let tempIbj = {};
    str.split('').forEach(char => {
        if()
    })
}


function reArrageString(str) {
    let freMap = getFreq(str);

    let maxChar = Math.max(...Object.values(freMap));
    let characters = Object.keys(freMap);
    let strLen = str.length;
    let noOfChars = 0, i = 0, j = 0, k = 0, output = []

    for(i = 0; i < characters.length; i++) {
        noOfChars = freMap[characters[i]];

        if(maxChar > (strLen - maxChar + 1)) {
            console.log("string not valid");
            return;
        }

        for(k = 0; k < noOfChar; k++) {
            if(j > strLen) {
                j = 1;
            }

            output[j] = characters[i];
            j += 1;
        }
    }

}


const maxProfit = (prices) => {
    let profit = 0;
    let cost = 0;
    let length = prices.length;
    if(length == 0) {
        return 0;
    }
    let minPrice = prices[0];
    
    for (let i = 0; i < prices.length; i++) {
      minPrice = Math.min(minPrice, prices[i]);

      cost = prices[i] - minPrice;

      profit = Math.max(cost, profit);
        
    }
}