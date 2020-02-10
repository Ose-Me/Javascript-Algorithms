function translatePigLatin(str) {
  var arr = str.split("");
  var newArr;
  if (/[aieou]/.test(arr[0]) === true){
   newArr= arr.join("").concat("way");
  }else{
  for(var i =0 ;i<arr.length;i++){
  if (/[aieou]/.test(arr[0]) === false) 
  {
  arr.push(arr.shift());
  newArr=  arr.join("").concat("ay");
  }
}
   
  }console.log(newArr)
  return newArr;
}

translatePigLatin("glove");
