const reverseString = (string) => {
    // Array methods
  return string.split('').reverse().join('')
  
    // for loop
  // let gnirts = ''
  // for (let i = string.length - 1; i >= 0; i--) {
  //   gnirts += string[i]
  // }
  // return gnirts

    // recursive
  // return !string.length ? '' : reverseString(string.substr(1)) + string.charAt(0)
}


module.exports = reverseString;