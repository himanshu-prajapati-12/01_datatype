let score = "adsf";
console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score) //conversion
console.log(typeof valueNumber);

console.log(valueNumber)


// string se number me convert kare to number ho jayega string se number
//"33" => 33

// "33ad" => NaN dhikhe ga ees me kyu ki vaha par only number nahi hai to conversion nahi hora 
 
// True =1 /false = 0 
// aager ka conversion kare to true hai us ki value 1 ho jate hai or false ki 0 ho jate hai

let isLoggedIN = 1;

let valueNumber1 =Boolean(isLoggedIN)
console.log(typeof valueNumber1)
console.log(valueNumber1)

// 1 => true; 0 => false
// "" => false
// "himanshu" => true

let string1 = true;
let convString = String(string1)
console.log(typeof convString)
console.log(convString)