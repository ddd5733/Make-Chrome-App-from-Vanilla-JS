
const calculator ={
 plus: function(a, b){
   return a+b;
 },
 mins: function(a, b){
   return a-b;
 },
 multi: function(a, b){
   return a*b;
 },
 divi: function(a, b){
   return a/b;
 },
 power: function(a, b){
   return a**b;
 }
}
const plus = calculator.plus(5, 5);
const multi = calculator.multi(plus, plus);
const power = calculator.power(plus, plus);
const divi = calculator.divi(power, multi);

console.log(`plus : ${plus}`);
console.log(`multi : ${multi}`);
console.log(`power : ${power}`);
console.log(`divi : ${divi}`);




