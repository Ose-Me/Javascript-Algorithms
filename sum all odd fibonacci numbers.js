function sumFibs(num) {
    var arr = [1, 1];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }
    }
    var newArr = arr.filter(el => {
        return el % 2 > 0 && el <= num;
    });
    var sum = newArr.reduce(function (a, b) {
        return a + b;
    }, 0);
    console.log(sum)
    return sum;
}
sumFibs(4);