/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

// fill() là phương thức thay đổi giá trị mảng có 3 đối số fill(giá trị thay thế, start index default 0, end index default array max lenght)

const productArray = (arr, arrLength) => {
    let i, temp;

    // Nếu trường hợp array chỉ có 1 phần tử [1] thì productArray chắc chắn = [0]
    if (arrLength === 1) {
        console.log("Product array: [0]");
        return;
    }

    // Mảng chứa giá trị sản phẩm
    let prod = Array(arrLength).fill(1);
    temp = 1;

    for (i = 0; i < arrLength; i++) {
        prod[i] = temp;
        temp *= arr[i];
    }
    console.log(prod);

    temp = 1;

    for (i = arrLength - 1; i >= 0; i--) {
        prod[i] *= temp;
        console.log(`prod[${i}] ` + prod);
        temp *= arr[i];
        // prod[4] = 24 * 1 = 24     temp = 1 * 5 = 5
        // prod[3] = 6 * 5 = 30     temp = 1 * 5 = 5
        // prod[2] = 2 * 5 = 30     temp = 1 * 5 = 5
    }

    for (i = 0; i < arrLength; i++) console.log(prod[i]);

    return;
};

const arr = [1, 2, 3, 4, 5];
const arrLength = arr.length;
productArray(arr, arrLength);
