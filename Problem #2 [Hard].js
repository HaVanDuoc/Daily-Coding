/*
Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
*/

// fill() là phương thức thay đổi giá trị mảng có 3 đối số fill(giá trị thay thế, start index default 0, end index default array max lenght)

/*
Mấu bài nắm được thằng temp
 */

const productArray = (arr, arrLength) => {
    let i, temp;

    // Nếu trường hợp array chỉ có 1 phần tử [1] thì productArray chắc chắn = [0]
    if (arrLength === 1) {
        console.log("Product array: [0]");
        return;
    }

    // Tạo mảng chứa giá trị product
    let prod = Array(arrLength).fill(1);

    temp = 1;
    for (i = 0; i < arrLength; i++) {
        prod[i] = temp; // có thể hiểu là thay cho giá trị của index prod[0] = 1
        temp *= arr[i]; // temp ở đây chính là tích các giá trị trước index sau đó được gán vào prod[i]

        // console.log(`prod[${i}] ` + prod[i]); // prod[index] chính là tích các số trước nó
    }

    temp = 1;

    // Vòng lặp này sẽ duyệt từ cuối mảng
    for (i = arrLength - 1; i >= 0; i--) {
        prod[i] *= temp;
        temp *= arr[i];

        /* temp ở đây khác vòng lặp trên nó chứa tích các giá trị sau index 
        ví dụ temp = 1 prod[4] thì temp = temp * 5 và prod[3] thì temp = temp(chính là temp = temp * 5) * 4 
        có thể hiểu temp này chính là tích các giá trị sau index 
        và sau cùng prod[i] = prod[i] (cũng chính là tích các số trước index được tính trong vòng lặp trước) + temp (tích các số sau index) */

        // console.log(`prod[${i}] ` + prod[i]);
    }

    for (i = 0; i < arrLength; i++) console.log(prod[i]);

    return;
};

const arr = [1, 2, 3, 4, 5];
const arrLength = arr.length;
productArray(arr, arrLength);
