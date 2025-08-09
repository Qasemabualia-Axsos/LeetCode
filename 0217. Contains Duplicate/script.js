var containsDuplicate = function(nums) {
    for (let i =0;i<nums.length;i++){
        for (let j=i+1;j<num.length;j++){
            if (nums[i]==nums[j]){
                    return true
            }
        }
    }
    return false;
};

// Time Compixity = o(n)^2