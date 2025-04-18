function createCalculator(){
    const calci= ({
        add: function(a, b) {
            return a + b;
        },
        sub: function(a, b) {
            return a - b;
        },
        mul: function(a, b) {
            return a * b;
        },
        div:function(a,b){
            return a/b;
        },
    });
    return calci;
}

const calculator = createCalculator();
console.log(calculator.add(2, 3));
console.log(calculator.sub(5, 2));
console.log(calculator.mul(4, 3));
console.log(calculator.div(8, 2));