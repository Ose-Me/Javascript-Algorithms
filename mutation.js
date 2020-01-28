function mutation(arr) {
  var arr1= arr[0].toLowerCase().split("");
  var arr2 = arr[1].toLowerCase().split("");
  // var res = arr1.includes(arr2);
  for(var i = 0;i <arr2.length;i++){
      if (!arr1.includes(arr2[i])){
         return false;
         } 
  }
  // console.log(res);
  return true;
}

mutation(["Noel", "Ole"]);
