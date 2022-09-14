function printNumbers(from, to) {
  let current = from;

  let timer = setInterval(function() {
    alert(current);
    if (current == to) {
      clearInterval(timer);
    }
    current++;
  }, 1000);
}

printNumbers(1, 5);