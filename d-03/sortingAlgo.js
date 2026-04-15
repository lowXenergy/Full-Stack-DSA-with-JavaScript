// Bubble sort

function bubbleSort(arr) {
    // Write your logic here
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
            }
        }

    }
    return arr;
}

// Insertion sort

function insertionSort(arr) {
    // Write your logic here
    for(let i=1;i<=arr.length-1;i++){
        let key=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
    return arr;
}

// Selection sort

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) {
            [arr[min], arr[i]] = [arr[i], arr[min]];
        }
    }
    return arr;
}
