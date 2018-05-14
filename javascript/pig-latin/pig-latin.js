const pigLatin = {
  translate: (phrase) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    const firstVowel = phrase.split('').find(letter => vowels.includes(letter))
    const index = phrase.indexOf(firstVowel)

    if (index === 0) {
      return phrase + 'ay'
    } else if (phrase.includes('qu')) {
      let consinants = phrase.slice(0, phrase.indexOf('qu') + 2)
      return phrase.substring(phrase.indexOf('qu') + 2) + consinants + 'ay'
    } else {
      let consinants = phrase.slice(0, index);
      return phrase.substring(index) + consinants + 'ay'
    }
  }
}

module.exports = pigLatin;