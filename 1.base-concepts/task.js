"use strict"
function solveEquation(a, b, c) {
  let  discriminant = Math.pow(b, 2)- 4*a*c;
  let arr = [];
  if(discriminant < 0){
    let discriminant  = arr;
  }else if(discriminant === 0){
     let sum = -b/(2*a)
     arr.push(sum)
  }else if(discriminant > 0){
    let root = [];
      root.push((-b + Math.sqrt(discriminant) )/(2*a));
      root.push((-b - Math.sqrt(discriminant) )/(2*a));
    arr = root;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let percent1 = percent/100/12;
  let sum = amount - contribution;
  let paymentPerMonth = sum * (percent1 + (percent1 / (((1 + percent1)**countMonths) - 1)));
  let totalAmount = paymentPerMonth  * countMonths;
  let b = Number(totalAmount.toFixed(2));
  
  return b
  
}