let userName = prompt("Who's there?");
if (userName === 'Admin') {
  let pass = prompt('Password?');
  if (pass === 'TheMaster') {
    document.write('Welcome!');
  } else if (pass === '' || pass === null) {
    document.write('Canceled');
  } else {
    document.write('Wrong password');
  }
} else if (userName === '' || userName === null) {
    document.write('Canceled');
} else {
    document.write("I don't know you");
}