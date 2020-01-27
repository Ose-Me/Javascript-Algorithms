<!DOCTYPE html>
<html>

<script>
   function truncateString(str, num) {
  if(num >= str.length){
    return str;
  }
  var result = str.substring(0, num);
  var newStr = (result)  + "...";
  return newStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

</script>

</html>