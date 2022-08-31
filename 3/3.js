var updateCnt = (function () {
  var cnt = 0;
  return function (num) {
    if (num === undefined) {
      return cnt;
    }
    cnt += num;
    return cnt;
  };
})();

console.log(updateCnt());
console.log(updateCnt());
console.log(updateCnt(1));
console.log(updateCnt());
console.log(updateCnt(3));
console.log(updateCnt(7));
console.log(updateCnt(-5));
