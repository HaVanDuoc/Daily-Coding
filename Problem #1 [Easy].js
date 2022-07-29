/*
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

// for...in [] return array indexes
// for...in "" return string indexes
// for...in {} return object property names
// for...in không thể sử dụng trong object phức tạp như Map() hay Set()

// for...of [] return array values
// for...of "" return string characters
// for...of không thể sử dụng trong các object đơn giản
// for...of new Set(['a', 'b', 'c']) return Set values a, b, c

// ["a", "b", "c"].forEach(
//     (value) => console.log(value) // a, b, c (array values)
// );

/*

Cách giải

cho đã biết = là giá trị tại từng phần tử

k  = đã biết + chưa biết => chưa biết (hay gọi là hiệu) = k - đã biết

Vậy chỉ cần thằng "hiệu" này = giá trị tại phần tử "value" đang duyệt
thì bài toán đã được giải quyết return true

*/

function hasSumK(arr, k) {
    hashMap = {};
    for (let value of arr) {
        if (hashMap[value]) {
            //test
            // hashMap1 = JSON.stringify(hashMap);
            // hashMap1 = JSON.stringify(hashMap, null, 4);
            // console.log("hashMap 1: " + hashMap1);
            // console.log("value 1: " + value);

            return true;
        } else {
            //test
            // hashMap2 = JSON.stringify(hashMap);
            // hashMap2 = JSON.stringify(hashMap, null, 4);
            // console.log("hashMap 2: " + hashMap2);
            // console.log("value 2: " + value);

            hashMap[k - value] = true;
        }
    }
    return false;
}

const arr = [10, 15, 3, 7];
const k = 17;

if (hasSumK(arr, k) === true) {
    console.log("true");
} else {
    console.log("false");
}
