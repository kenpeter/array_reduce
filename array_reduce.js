function reverseString(str) {
  var newStr = str.split("");
  var outStr = newStr.reverse().join('');
  return outStr;
}

var out = reverseString("hello");
console.log(out);
