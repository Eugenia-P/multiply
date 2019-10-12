module.exports = function multiply(first, second) {
  //BigInt is a new built-in object which can be used for arbitrarily large integers
  //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
  
  return (BigInt(first) * BigInt(second)).toString(); 
};


