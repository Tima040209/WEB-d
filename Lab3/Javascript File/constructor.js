function Calculator() {
    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
    this.sum = function() {
      return this.a + this.b;
    };  
    this.mul = function() {
      return this.a * this.b;
    };
  }
  
  let calc = new Calculator();
  calculator.read();
  
  alert( "Sum = " + calc.sum() );
  alert( "Mul = " + calc.mul() );

//2-task
function Accumulator(initialValue) {
    this.value = initialValue;
  
    this.read = function() {
      this.value += +prompt('How much to add?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);