function getDigit(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
}

function digitCount(num){
    return num.toString().length;
}

function mostDigits(arr){
    let maxDigits = 0;
    for(let i = 0; i<arr.length;i++){
        maxDigits = Math.max(maxDigits,digitCount(arr[i]));
    }
    return maxDigits;
}

function radixSort(arr){
    let maxDigitCount = mostDigits(arr);
    for(let k=0;k<maxDigitCount;k++){
        let digitBuckets = Array.from({length:10},()=>[]);
        for(let i=0;i<arr.length;i++){
             digitBuckets[getDigit(arr[i],k)].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

console.log(radixSort([2,1,5,4,3]));