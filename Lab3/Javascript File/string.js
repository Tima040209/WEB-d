function ucFirst(str) {
    if (!str) return str;  
    return str[0].toUpperCase() + str.slice(1);
  }  
  alert( ucFirst("john") ); 
//2-task
function checkSpam(str) {
    let lowerStr = str.toLowerCase();  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
//3-task
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }
//4-task
function extractCurrencyValue(str) {
    return +str.slice(1);
  }
 