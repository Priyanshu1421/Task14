
// Q1. Find the sum of first n number where n is veriable

let n = 10;
let sum = 0;
for (let i=1; i<=10; i++){
    sum = sum + i;
}
console.log("Sum :", sum);


// Q2. Print the tableof n where n is veriable

let tab = 5;
for(let i = 1; i<=10; i++){
    console.log(tab, "X", i, "=", tab*i);
}


// Q3. Print all its factors

let fact = 12;
for(let i=1; i<=fact; i++){
    if(fact % i === 0){
        console.log("Factors are :", i);
    }
}

//Q4. Find the sum of all digits of a number

let num = 139;
let add = 0;
while(num > 0){
    let rem = num % 10;
    add = add + rem;
    num = Math.floor(num/10);
}
console.log("Sum of all Digit :", add);


//Q5. Check the Armstrong number;
let arm = 153;
let temp = arm;
let m = 0;

while(arm!=0){
    let d = arm%10;
    m += d * d * d;
    arm = Math.floor(arm/10);
}
console.log(temp === m ? "Armstrong" : "Not Armstrong");