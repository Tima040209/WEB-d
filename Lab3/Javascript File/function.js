function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
//task2
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

//task3
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }