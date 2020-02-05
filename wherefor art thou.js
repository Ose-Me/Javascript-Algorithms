function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
  for(var i = 0;i <collection.length; i++){
    if(collection[i].last === source.last){
     arr.push(collection[i])
    }
  }
  var obj = { first: 'someVal' };
  console.log(obj[Object.keys(obj)[0]]);
  console.log(collection[0][Object.keys(collection)[2]])
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  