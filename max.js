let jim = 77;
let dim = 87;
let kim = 97;

function max3(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }

}
const maxPro = max3(jim, dim, kim);
console.log("The ultimax", maxPro);