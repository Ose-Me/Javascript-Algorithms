function findLongestWordLength(str) {
    var longest = 0;
    var result = str.split(" ");
    for (var i= 0; i< result.length ;i++){
      if(result[i].length > longest){
        longest = result[i].length;
      }
    }
    return longest;
  
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
