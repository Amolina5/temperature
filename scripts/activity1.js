
function multiTable(){
    const num =9;
    let result = 0;
    document.write(`<h1>Table of ${num}</h1>`)
    for(let i=0;i<11;i++){
        result = num *i;
        document.write(`<p>  ${num} x ${i} = ${result} </p>`);
    }



}
multiTable();

for(let i=0;i<4;i++){
    document.write("My for is working? ");
}

for(let i=2; i<=21; i+=2){
    document.write(`<p> ${i} </p>`);
}

//arrays
//let myArray = [2,true,"string",10.5];

//myArray[0]; // 2
//myArray[1]; // true
//myArray[2]; // string
//myArray[3]; // 10.5

let students = ["bob","frank","sam","ted","todd","alex"];
let ages =[22,35,20,43,37,33];

for(let i= 0; i<0; i<students.length;++){
    document.getElementById("Studnet")
    document.write(`<p> ${i+1}. ${students[i]} - ${ages[i]} </p>`)

    for(let i= 0; i<6;i++){

    }
    
}