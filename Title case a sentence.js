function titleCase(str) {
    var arr = str.split(" ");
    var firstLetters= [];
    for(var i = 0; i < arr.length; i++ ){
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
     str = arr.join(" ");
   
   }
 return str;
}

titleCase("I'm a little tea pot");
