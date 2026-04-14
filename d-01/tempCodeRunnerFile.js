function minAddForBalance(arr){
    let n = arr.length;
    let mid = n/2;
    let leftSum = 0;
    let rightSum = 0;
    for(let i =0 ; i<mid;i++){
        leftSum += arr[i]
    }

    for(let i =mid;i<n;i++){
        rightSum+=arr[i]
    }
    if(leftSum===rightSum)console.log("No need to add anything...");
    else if(leftSum>rightSum) console.log("Value to be added on right side is ",leftSum-rightSum);
    else console.log("Value to be added on left side is ",rightSum-leftSum);
}

minAddForBalance([1,2,1,2,1,3])