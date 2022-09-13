let calculator = {
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    this.a = +prompt('what is 1st number?', 0);
    this.b = +prompt('what is 2nd number?', 0);
  }
};

calculator.read();
alert( 'Sum: ' + calculator.sum() );
alert( 'Multiplication: ' + calculator.mul() );