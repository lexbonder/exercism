class Cipher {
  constructor() {
    this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    this.key = 'whatsgoingonsir'
  }

  encode(plaintext) {
    return plaintext.split('').map((letter, index) => {
      let letterIndex = this.alphabet.indexOf(letter)
      let keyValue = this.alphabet.indexOf(this.key[index])
      return this.alphabet[letterIndex + keyValue]
    }).join('')
  }

  decode(plaintext) {
    return plaintext.split('').map((letter, index) => {
      let letterIndex = this.alphabet.indexOf(letter)
      let keyValue = this.alphabet.indexOf(this.key[index])
      return this.alphabet[letterIndex - keyValue]
    }).join('')
  }
}

module.exports = Cipher;