function chunkArrayInGroups(arr, size) {
    var newArr = [];
   while(arr.length){
     newArr.push(arr.splice(0, size));
    }console.log(newArr)
    return newArr;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
  