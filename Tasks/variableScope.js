let globalVariable = 10;
function myFunction() {
    let localVariable = 20;
    console.log(globalVariable); // 10
    console.log(localVariable); // 20
    if(true) {
        let blockVariable = 30;
        console.log(blockVariable); // 30
    }
    console.log(blockVariable); // ReferenceError: blockVariable is not defined  
    // The blockVariable is not accessible outside the if block
    // due to block scope of 'let' keyword.
}
myFunction();
console.log(globalVariable); // 10      
console.log(localVariable); // ReferenceError: localVariable is not defined
// The code demonstrates the concept of variable scope in JavaScript.   
// The global variable 'globalVariable' is accessible both inside and outside the function 'myFunction'.
// The local variable 'localVariable' is only accessible within 'myFunction', leading to a ReferenceError when accessed outside.