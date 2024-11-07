console.log("if-statement ")

// ---- if statement -----
// if (condition){
// code to be executed if condition is true
//}

if(3>1){
    console.log("I am inside the if statment");
}

let student1 = 45;
let student2 = 45;

if(student1 = student2){
    console.log("Both are the same");
}

// ---- if statement ----
// if (condition){
// code to be executed if condition is true
//}else{
//  code to be executedd if condittion is true
//  code to be executed if condition is false
//}

let isTrue = false;

if(isTrue){
    console.log("yes");
}else{
    console.log("no");
}
// challenge

let age = 50;

if(age>=21){
    console.log("you are an adult");
}else{
    console.log("you are an underage");
}

//--- if-else if-else statements ----

//if(condition){
 //   code to be executed if condition is true
//}


age = 75;

if(age<13){
    console.log("child");
}else if(age<20){
    console.log("teenager");
}else if(age<64){
    console.log("adult");
}else{
    console.log("seniorS")
} 

let week = new Date().getDay;

if(week == 1){
    console.log("Mon");
}else if(week == 2){
    console.log("Tue");
}else if(week == 3){
    console.log("Wed");
}else if(week == 4){
    console.log("Thu");
}else if(week == 5){
    console.log("Fri");
}else if(week == 6){
    console.log("Sat");
}else if(week == 7){
    console.log("Sun");
}else{
    console.log("invalid");
}

age = 15;
if(age<=12){
    console.log("$5");
}else if(age<=18){
    console.log("$8");
}else if(age>18){
    console.log("$10");
}{
    
}

function WeatherClothing(){
    let temp = prompt("Enter the Temp");
    let clothing;
    if(temp<15){
        clothing ="jacket";
        document.getElementById("weather").classList.add("cold");
    }else if(temp<15){
        clothing="sweater";
    }else if(temp<25){
        clothing ="t-shirt";
    }
    console.log("its a bit chilly you should wear a" + clothing)
}