function dropElements(arr, func) {
  // Drop them elements.
  var length = arr.length
  for (var i = 0; i < length; i++) {
    if (func(arr[0])) {
      break;
    }
    arr.shift()
  }
  console.log(arr)
  return arr;
}

dropElements([1, 2, 3, 9, 2], function (n) {
  return n > 2;
});