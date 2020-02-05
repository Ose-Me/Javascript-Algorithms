function diffArray(arr1, arr2) {
    var newArr
    var first = []
    var second = []
  arr1.map((item) => {
   if(arr2.indexOf(item) < 0 )  {
     first.push(item)
   }
  }
  )
  arr2.map((item) => {
   if(arr1.indexOf(item) < 0 )  {
     second.push(item)
   }
  }
  )
  newArr = first.concat(second)
  console.log(newArr)
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  