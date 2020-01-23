function largestOfFour(arr) {
    var newArray = [];
    var highest;
    for(var i = 0;i < arr.length; i++){
      highest = arr[i][0];
    for(var j = 1;j < arr[i].length; j++){
    if(arr[i][j] > highest){
      highest = arr[i][j];
      }
        }
  newArray.push(highest);
  }
    return newArray;
    console.log(newArray);
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  