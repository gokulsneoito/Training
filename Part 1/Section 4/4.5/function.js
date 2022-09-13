function Accumulator(strtVal) {
  this.value = strtVal;

  this.read = function() {
    this.value += +prompt('Enter Number: ', 0);
  };

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);