function smallestCommons(arr) {
    var arr0 = []
    var arr2 = []
    var arr1 = []
    var newArr
    arr.sort(function(a, b){return a-b});
    for (var i= arr[0];i<=arr[1];i++){
      arr0.push(i);
    }
    for (var j= 1;j<=60;j++){
      arr1.push(arr[1]*j)
    }
    for(var m =0;m<arr[0];m++){
      newArr = arr2.filter(x => {
  return x % arr[m] === 0})
    }
    console.log(newArr);
    console.log(arr1)
    return;
  // 
  }
  
  
  smallestCommons([1,5]);
  