function diffArray(arr1, arr2) {
    var newArr
    var i
    var j
    var first = []
    var second = []
    for(i= 0;i<arr1.length;i++){
      let index = arr2.indexOf(arr1[i])
      if (index < 0){
      first.push(arr1[i])
        } 
      }
     for(j= 0;j<arr2.length;j++) {
     let index1 = arr1.indexOf(arr2[j])
     if (index1 < 0){
         second.push(arr2[j])
         }
       }
    newArr = first.concat(second)
  console.log(second)
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  