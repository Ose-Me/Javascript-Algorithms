function convertHTML(str) {
    var newStr
    newStr = str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
    console.log(newStr)
    return newStr;
  }
  
  convertHTML("<>");