function multiply(a, b) {
    return a * b;
 }
function add(a, b) {
    return a + b;
 }
function subtract(a, b) {
    return a - b; 
}
function doMath(someMath) {
    return someMath(10, 5);
}
doMath(multiply);

doMath(add);

doMath(subtract);

