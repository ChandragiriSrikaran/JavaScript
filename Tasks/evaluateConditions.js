function evaluateConditions(object){
    
    if(!object || typeof object !== 'object' || (!Object.keys(object).length)){
        return "Invalid input";
    }

    if (object.age > 18 && object.hasLicense) {
       return "Eligible to drive";
    }

    if (object.temp>30 || object.humidity>70) {
        return "High temperature or humidity";
    }
    if((object.role==="admin" || object.role === 'editor') && object.isActive>5){
        return "Access granted";
    }
    if(object.isActive && object.exp>5 && object.role !=="admin"){
        return "Your salary is 1000$";
    }
    if(!object.isActive){
        return "Inactive user";
    }
    return "No conditions met";
}

const testObject1 = {
    age: 20,
    hasLicense: true,
    temp: 25,
    humidity: 50,
    role: "user",
    isActive: true,
    exp: 6
};
const testObject2 = {
    age: 17,
    hasLicense: false,
    temp: 35,
    humidity: 80,
    role: "admin",
    isActive: true,
    exp: 3
};
console.log(evaluateConditions(testObject1));
console.log(evaluateConditions(testObject2));
console.log(evaluateConditions({}));