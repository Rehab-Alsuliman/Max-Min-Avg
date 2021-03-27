function MaxMinAvg(arr){
  //The Code
  
  let avg = 0;
  let max = 0;
  let min = 0;
  let arrnew = [];
  
  for(let i = 0; i<arr.length; i++){
    //the rule Average.
    avg += arr[i];
    // found the max
    if(arr[i] > max){
      max = arr[i];
    }
    //found the minimum 
    if(arr[i] < min){
      min = arr[i];
    }
  }
  
  arrnew[0] = max;
  arrnew[1] = min;
  arrnew[2] = avg /= arr.length;
  
  console.log(arrnew);
  
}
