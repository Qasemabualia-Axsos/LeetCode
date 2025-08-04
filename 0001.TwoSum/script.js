var twoSum=function(nums,target){
    for (var i=0;i<nums.length;i++){
        for (var j=i+1;j<nums.length;i++){
            if (nums[i]+nums[j]==target){
                return[i,j]
            }
        }
    }
}