function truthCheck(collection, pre) {
    var y
    var arr = collection.map(x => {
        return (!!x[pre] === false) ? false : true
    })

    return arr.indexOf(false) > -1 ? false : true;
}
console.log(truthCheck([{"single": ""}, { "single": "double"}], "single"));