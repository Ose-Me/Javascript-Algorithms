function pairElement(str) {
    var newArr = [];
      for (var i = 0;i<str.length;i++){
        var arr = [] 
        if(str[i] === "G"){
        arr.push(str[i],"C");
        }
        if(str[i] === "C"){
        arr.push(str[i],"G");
        }
        if(str[i] === "A"){
        arr.push(str[i],"T");
        }
        if(str[i] === "T"){
        arr.push(str[i],"A");
        }
        newArr.push(arr)
      }
      return newArr;
    }
    
    pairElement("GCG");