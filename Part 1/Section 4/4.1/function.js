let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
function isEmpty(obj) {
  for (let item in obj) {
    return false;
  }
  return true;
}
function sum(obj){
  let sum = 0
  for (let item in obj) {
    sum += obj[item]
  }
  return sum;
}
alert(isEmpty(user))
alert(sum(salaries))