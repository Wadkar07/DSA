const bubbleSort = (arr) => {
    try{
        const length = arr.length;
        for (let i = 1; i < length; i++) {
            let swapped = false;
            for (let ii = 0; ii < length - 1; ii++) {
                if(arr[ii] > arr[ii+1]){
                    swapInArray(ii, ii + 1, arr);
                    swapped = true;
                }
            }
            if(!swapped) break;
        }
        return arr;
    } catch(error){
        console.error(error);
    }
}

const swapInArray = (index1, index2, arr) => {
    try {
        const temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    } catch (error){
        console.error(error);
    }
}

const arr = [11, 2, 13, 14, 15, 22];

console.log(bubbleSort(arr));