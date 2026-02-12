const reverseString = function (s) {
  const chars = s.split("");
  const reversedChars = [];

  for (let i = chars.length; i >= 0; i--) {
    reversedChars.push(chars[i]);
  }

  return reversedChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
