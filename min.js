const value = [43, 645, 7, 54, 77, 4, 8, 3, 34]

function minValues(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;

}
const min = minValues(value);
console.log("The Min value is :", min);