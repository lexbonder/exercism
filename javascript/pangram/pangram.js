class Pangram {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.base = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  }
    
  isPangram() {
    [...this.phrase].forEach(letter => {
      let index = this.base.indexOf(letter)
      if (index !== -1) {
        this.base.splice(index, 1)
      }
    })
    return this.base.length ? false : true
  }
}

module.exports = Pangram;