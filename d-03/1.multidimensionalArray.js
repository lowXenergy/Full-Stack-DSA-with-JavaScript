// 2D Array

let prompt = require('prompt-sync')();
let arr = new Array(3);

for(let i=0;i<arr.length;i++){
    arr[i]=new Array(2);
}

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){;
        arr[i][j]=Number(prompt("Enter the value "))
    }
}

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        process.stdout.write(arr[i][j]+" ");
    }
    console.log(  );
    
}

//OR

let arr1= [
    [10,20,30],
    [23,44,55]
]
for(let i=0;i<arr1.length;i++){
    for(let j=0;j<arr1[i].length;j++){
        process.stdout.write(arr1[i][j]+" ");
    }
    console.log(  );
    
}

//OR

let arr3=Array.from({length:3},()=> new Array(3).fill(0));
for(let i=0;i<arr3.length;i++){
    for(let j=0;j<arr3[i].length;j++){
        process.stdout.write(arr3[i][j]+" ");
    }
    console.log(  );   
}

//JAGGED ARRAY

let arr4 = new Array(4);
for(let i=0;i<arr4.length;i++){
    let dimension = Number(prompt("Enter length of inner array "));
    arr4[i]=new Array(dimension);
}
for(let i=0;i<arr4.length;i++){
    for(let j=0;j<arr4[i].length;j++){
        arr4[i][j]=Number(prompt("Enter the value ")) 
    }
}
for(let i=0;i<arr4.length;i++){
    for(let j=0;j<arr4[i].length;j++){
        process.stdout.write(arr4[i][j]+" ");
    }
    console.log( );
    
}