function getArrayParams(...arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let sum = arr.reduce(function(result, current) {
    return result + current
  }, );
  let  avg = sum/arr.length;
   avg = avg.toFixed(2)
   avg = Number(avg);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce(function(result, current) {
    return result + current
  }, );
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let differenceMaxMin = max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length;i++){
    if(arr[i] % 2 === 0){
      sumEvenElement = arr[i] + sumEvenElement;
 }else{
   sumOddElement = arr[i] + sumOddElement;
 };
  }
  let element = sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length;i++){
     if(arr[i] % 2 === 0){
       sumEvenElement = arr[i] + sumEvenElement;
       countEvenElement = countEvenElement + 1;
     };
   };
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arr.length;i++){
   let sumMax = getArrayParams(...arr[i]);
    if(sumMax > maxWorkerResult){
      maxWorkerResult = sumMax ;
    };
  };
 return maxWorkerResult
}
