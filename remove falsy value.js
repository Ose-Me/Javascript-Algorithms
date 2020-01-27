function bouncer(arr) {
    var newArr= [];
   for(var i = 0;i< arr.length;i++){
     if(!!arr[i]===true){
     newArr.push(arr[i])}
       }console.log(newArr);
   return newArr;
 }
 
 bouncer([7, "ate", "", false, 9]);
 