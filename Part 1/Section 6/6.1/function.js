let range = {
  from: 1,
  to: 10
};

range[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current+=2 };
      } else {
        return { done: true };
      }
    }
  };
};
for (let num of range) {
  document.write(num  + " "); 
}