function myReplace(str, before, after) {
    if(/^[A-Z]/.test(before) === true){
  after = after[0].toUpperCase().concat(after.slice(1,))
    }
    let newstr = str.replace(before,after);
    return newstr;
  }
  
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");