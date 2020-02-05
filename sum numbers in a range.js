function sumAll(arr) {
  arr.sort((a,b) => a-b)
  var sum = 0
  for(var i= arr[0]; i <= arr[arr.length-1]; i++){
    sum += i
  }
return sum;
}

sumAll([1, 4]);
