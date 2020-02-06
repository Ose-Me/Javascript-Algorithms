function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var keys = Object.keys(source);
  arr = collection.filter((item) => {
    var pass = true;
    keys.map(key => {
      if (item[key] !== source[key]) {
        pass = false;
      }
    })
    return pass;
  })

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", la3: "Capulet" }], { last: "Capulet", fgh:"ghj"});
