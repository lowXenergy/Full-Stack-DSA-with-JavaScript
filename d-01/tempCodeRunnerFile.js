var getSumAbsoluteDifferences = function(nums) {
    let result = [];
    for(let i=0;i<nums.length;i++){
        let sum =0;
        for(let j=0;j<nums.length;j++){
            let diff = nums[i]-nums[j];
            if(diff<0) diff = -diff;
            sum += diff;
            console.log(sum);
            
        }
        result[i] = sum;
    }
    console.log(result);
    
};

getSumAbsoluteDifferences([2,3,5])