function* genRandom(init) {
  let value = init;

  while(true) {
    value = value * 16807 % 2147483647
    yield value;
  }

};

let generator = genRandom(1);

alert(generator.next().value);
alert(generator.next().value);
alert(generator.next().value);