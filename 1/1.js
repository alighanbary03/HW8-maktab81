user = {};
function greet(who) {
  user.name = who;
  return this.name;
}
// function obj
// greet("jack");

function f(obj) {
  return obj;
}

f(greet("jack"));

console.log(user);
