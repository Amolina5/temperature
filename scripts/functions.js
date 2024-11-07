console.log("functions.js")

//creating the function
function multiplyThree(num){
    
    return num * 3;

}

//trigger/run/execute
console.log(multiplyThree(4));//12
console.log(multiplyThree(2));//6
console.log(multiplyThree(5));//15

function sum (num1,num2){
    console.log(3+3);
}
sum();

let sum2 = function(){
    console.log(3+3);
}
sum2();

let total = 0;
let productName = prompt("Enter the product name:");
let productPrice = prompt("Enter the price:");

function addCart(price){
    total=total+price;
    return total;
}

total = addCart(productPrice);
console.log(total);
total =addCart(400);
console.log(total);
total = addCart(600);
console.log(total);

function calculateTaxes(total){
    return 1.11 * total;
}

document.write("<p>" + productName + " " + calculateTaxes(total).toFixed(2) + "</p>");

console.log(calculateTaxes(total).toFixed);




    console.log(num*2);



doubleNumber(4);
doubleNumber(10);

function combineNames(firstName,lastName){
    console.log(firstName + " " + lastName);
    return(first + " "+ lastName);
}
    combineNames("Alice","johnson")
