function add(a, b) {
    const sum = a + b;
    return sum;
}
function sub(a, b) {
    const sub = a - b;
    return sub;
}
function multi(a, b) {
    const multi = a * b;
    return multi;
}
function div(a, b) {
    const div = a / b;
    return div;
}

function calculator(a, b, operator) {
    if (operator === 'add') {
        const result = add(a, b);
        return result;
    }
    else if (operator === 'sub') {
        const result = sub(a, b);
        return result;
    }
    else if (operator === 'multi') {
        const result = multi(a, b);
        return result;
    }
    else if (operator === 'div') {
        const result = div(a, b);
        return result;
    }
    else {
        return "operator is unified";
    }

}
const result = calculator(23, 5, 'div');
console.log(result);