class Solution {
    missingNum(arr) {
        let n=arr.length+1;
        let sum=0;
        for (let i=0;i<arr.length;i++){
            sum+=arr[i];
        }
        const expected=(n*(n+1))/2;
        return expected-sum;
    }
    
}

// Time Complexity=o(n) || Space Complixity=o(1)



// Using Hashing
class Solution {
    missingNum(arr) {
        let n=arr.length+1;

        let hash=[];
        for (let i=0;i<=n;i++){
            hash[i]=0;
        }
        for (let i=0;i<n-1;i++){
            let value=arr[i];
            hash[value]=hash[value]+1;
        }
        for (let i=1;i<=n;i++){
            if (hash[i]===0){
                return i;
            }
        }
    }
}

// Time Complexity=o(n) || Space Complixity=o(n)
