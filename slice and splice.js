function frankenSplice(arr1, arr2, n) {
    var arr3;
    arr3 = arr2.splice(0,n).concat(arr1,arr2.slice(0,n))
    return arr3;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  