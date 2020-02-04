const squareList = (arr) => {
    // only change code below this line
    var newarr = arr.reduce((arr, x) =>{(Number.isInteger(x))&&(x>0) ? arr.push(x*x): null; return arr} , [])
    return newarr;
    // only change code above this line
  };
  
  // test your code
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  