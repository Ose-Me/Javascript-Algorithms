function destroyer(arr) {
    // Remove all the values
    var result = [] 
  var args = Array.prototype.slice.call(arguments)
  for(var i = 0; i < arr.length; i++) {
      if(args.indexOf(arr[i]) < 0){
        result.push(arr[i]);
      }
    }
    // arr.map(item =>{if(args.indexOf(item) < 0){
    //     result.push(item)};
    //   })
    console.log(result)
    return result;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  