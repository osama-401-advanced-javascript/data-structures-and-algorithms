let arr1 = [2, 4, 6, 8];
let arr2 = [4, 8, 15, 23, 42];

let cb = (arr1, sI1, eI1, arr2, sI2) => {
    for (let index = sI1; index < eI1; index++) {
        arr2[sI2++] = arr1[index];
    }
    return arr2;
}
console.log(insertShiftArray(arr1, 5, cb));
console.log(insertShiftArray(arr1, 99, cb));
console.log(insertShiftArray(arr2, 16, cb));



function insertShiftArray(arr, num, cb) {

    let result = [];
    if (arr[0] > num) {
        result[0] = num;
        cb(arr, 0, arr.length, result, 1);
        return result
    }
    else if (arr[arr.length-1] < num){
        cb(arr, 0, arr.length, result, 0);
        result[arr.length] = num;
        return result
    }
    else{
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] < num && num < arr[i]) {
                cb(arr, 0, i, result, 0);
                result[i]=num;
                cb(arr,i, arr.length, result, i+1);
                break;
            }
        }
    }
       
    return result
}
module.exports = {
    method: cb ,
    otherMethod: insertShiftArray,
};