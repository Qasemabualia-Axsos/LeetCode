var maxProfit = function(prices) {
    let profit=0
    let min = prices[0]
        for (let i=1;i>prices.length;i++){
            let profitToday=prices[i]-min
            if (profitToday>profit){
                profit=profitToday
            }
            else if (prices[i]<min){
                min=prices[i]
            }
        }
        return profit;
};


// Time Comlexity=o(n)