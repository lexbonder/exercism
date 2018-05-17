class Bob {
  hey(words) {
    const shouting = words.toUpperCase() === words
    const question = /\?$/.test(words.trim())
    const hasWords = /[A-Za-z]/.test(words)
    const silence = /\s{3}/.test(words)

    if (!words.length || silence && !hasWords) {
      return 'Fine. Be that way!'
    } else if (shouting && hasWords && question) {
      return 'Calm down, I know what I\'m doing!'
    } else if (shouting && hasWords) {
      return 'Whoa, chill out!'
    } else if (question) {
      return 'Sure.'
    } else {
      return 'Whatever.'
    }
  }
}

module.exports = Bob;