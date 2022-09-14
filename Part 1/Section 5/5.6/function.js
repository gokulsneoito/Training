function sum(arg) {
  let Sum = arg;
  function func2(arg2) {
    Sum += arg2;
    return func2;
  }
  func2.toString = function() {
    return currentSum;
  };
  return func2;
}

alert( sum(1)(2) ); 
alert( sum(5)(-1)(2) ); 
alert( sum(6)(-1)(-2)(-3) );
alert( sum(0)(1)(2)(3)(4)(5) ); 