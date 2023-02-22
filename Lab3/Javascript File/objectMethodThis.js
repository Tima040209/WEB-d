let calculator = {
    // ... your code ...
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    },
    read(){
        prompt('a?',0);
        prompt('b?',0);
    }

  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  //2-task
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };