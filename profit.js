var maxProfit = function(prices) {
    
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i+1] - prices[i] > 0){
            profit += prices[i+1] - prices[i];
        }
    }
    
    return profit;
};

console.log(maxProfit([7,1,5,3,6,4]))