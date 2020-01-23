function repeatStringNumTimes(str, num) {
    var string 
    // while (num > 0){
    //   string = str.concat(string);
    //   num--;
    // }
    for (var i = 1;i <= num;i++){
    string = str.concat(str);
    }
    return string;
    console.log(string);
  }
  repeatStringNumTimes("abc", 3);
  