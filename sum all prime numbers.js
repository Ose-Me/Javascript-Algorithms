function sumPrimes(num) {
    var arr = [];
    for (var i = 2; i <= num; i++) {
        for (var j = 2; j <= i; j++) {
          if (j === i) {
            arr.push(i)
          }
          if (i % j === 0) {
            break;   
          } 
        }
        
    }
    var sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum;
}
sumPrimes(977);