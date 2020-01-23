function repeatStringNumTimes(str, num) {
  var string = "";
  while (num > 0){
    string = string.concat(str);
    num--;
  }
  return string;
  console.log(string);
}
repeatStringNumTimes("abc", 3);

  
