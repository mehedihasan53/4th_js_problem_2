

// function minValues(numbers) {
//     let min = numbers[0];
//     for (const num of numbers) {
//         if (num < min) {
//             min = num;
//         }
//     }
//     return min;

// }
// const min = minValues(value);
// console.log("The Min value is :", min);


const value = [43, 645, 7, 54, 77, 4, 8, 3, 34]

function min(input) {
    let minValue = value[0];
    for (const minNum of input) {
        if (minNum < minValue) {
            minValue = minNum;
        }
    }
    return minValue;

}
const result = min(value);
console.log(result);