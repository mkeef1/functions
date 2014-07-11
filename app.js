var prompt = require('sync-prompt').prompt;
/*
function increment(x){
  x += 1;
  return x;
}

var z = increment(3);
console.log(z);
z = increment(7);
console.log(z);
z = increment(9);
console.log(z);
z = increment(12);
console.log(z);

function square (m){
  m *= m;
  return m;
}

var p = square(4);
console.log(p);

function area(length, width){
   return length * width;
}

z = area(3,4)
  console.log(z);

function volume (length, width, height){
  return length * width * height;
}

v = volume(4,5,8);
console.log(v);

var a = area (square (increment(3) + increment(4)), square(2));
console.log(a);

function sayHello(){
  console.log('hello');
}

sayHello();

function makeUpper(string){
  return string.toUpperCase();
}

h = makeUpper('hello');
console.log(h);

function canDrink(d){
  return d >=21;
}

var r = canDrink(23);
console.log(r);
var t = canDrink(18);
console.log(t);

function letterGrade(g){
 if(g >= 90){
   return 'A';
 }else if(g >= 80){
   return 'B';
 }else if (g >= 70){
 return 'C';
 }else if (g >=60){
   return 'D';
 }else if (g <60){
   return 'F';
 }
}
var a = letterGrade  (97);
console.log(a);

function addTax(amount, tax){
  return amount + (amount * (tax/100));
    tax = parseInt(tax);
  amount = parseInt(amount);
}

var m = addTax(90, 15);
console.log(m);


function sum(numbers){
 var sum = 0;
    for (var k = 0; k < numbers.length; k++){
      sum += numbers[k];
    }
    //numbers = parseInt(numbers);
    // sum = parseInt(sum);
      return sum;
    }
  var number = sum([3, 5, 3, 67, 5]);
    console.log(number);

    */

    function rollDie(){
      return Math.floor(Math.random() * 6) + 1;
    }

var z;

for (var i = 0; i < 10; i++){
  z = rollDie();
  console.log('roll: ', z);
}
function isPair(roll1, roll2){
  return roll1 === roll2;
}

var r = isPair(2, 3);
console.log(r);

function countPairs(x){
  var count = 0;

for(var i = 0; i <x; i++){
 if( isPair(rollDie(), rollDie())){
   count++;
}
}
return count;
}

var z;

z = countPairs(10000);
console.log(z);

