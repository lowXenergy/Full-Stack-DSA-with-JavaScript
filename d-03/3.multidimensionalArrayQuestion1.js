// leetcode -> https://leetcode.com/problems/matrix-diagonal-sum/description/
//MATRIX DIAGNOL SUM

var diagonalSum = function(mat) {
    let sum =0;
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[i].length;j++){
            if(i==j||i+j==mat[i].length-1)sum+=mat[i][j];
        }
    }
    return sum;
};

//https://leetcode.com/problems/transpose-matrix/solutions/6097971/video-give-me-5-minutes-2-solutions-how-ihrf8/
//TRANSPOSE MATRIX

var transpose = function(matrix) {
    let row = matrix.length, col = matrix[0].length;
    let arr= new Array(col)
    for(let i=0;i<arr.length;i++){
        arr[i]=new Array(row);
    }
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            arr[j][i]=matrix[i][j];
        }
    }
    return arr;
};

//https://leetcode.com/problems/flipping-an-image/submissions/1907427053/
//FLIPPING AN IMAGE

var flipAndInvertImage = function(image) {
    for(let i=0;i<image.length;i++){
        let arr=image[i];
        let k=0,j=arr.length-1;
        while(k<j){
            let temp=arr[k];
            arr[k]=arr[j];
            arr[j]=temp;
            k++;
            j--;
        }
    }
    for(let i=0;i<image.length;i++){
        for(let j=0;j<image[i].length;j++){
            image[i][j]=image[i][j]==1?0:1;
        }
    }
    return image;
};

//OR

var flipAndInvertImage = function(image) {
    for(const row of image) {
        row.reverse();
        for(let i = 0; i < row.length; i++) {
            if(row[i] === 0) {
                row[i] = 1;
            } else {
                row[i] = 0;
            }
        }
    }

    return image;
};

//How do you check if an element exists in a 2D array?
// A) arr.includes(value)
// B) arr.flat().includes(value)
// C) arr[0].includes(value)
// D) arr.indexOf(value)

// B) arr.flat().includes(value)
// flat() converts the 2D array into a 1D array
// includes() can now correctly search for the value