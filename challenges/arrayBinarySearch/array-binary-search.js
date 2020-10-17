let array = [4, 8, 15, 16, 23, 42]

function binarySearch(arr, num) {
    let st = 0;
    console.log('arr?>??????????', arr);
    let ed = arr.length - 1;
    let md = Math.ceil(arr.length / 2);
    let key = true;

    while (key) {
        if (num === arr[md]) {
            return md;
        } else if (num > arr[md]) {
            st = md + 1;
            md = Math.ceil((ed + st) / 2);
            continue;
        } else if (num < arr[md]) {
            ed = md - 1;
            md = Math.ceil((ed + st) / 2);
            continue;
        } else {

            return -1;
        }

    }

}
binarySearch(array, 15)

module.exports = binarySearch;


