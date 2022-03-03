function merge(arr1,arr2){
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j]>arr1[i]){
            result.push(arr1[i]);
            i++;
        }
        else{
            result.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        result.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr){
    if(arr.length<=1) return arr;

    let left = mergeSort(arr.slice(0,Math.floor(arr.length/2)));
    let right = mergeSort(arr.slice(Math.floor(arr.length/2),arr.length));
    return merge(left,right);
}

console.log(mergeSort([2,1,5,4,3]));