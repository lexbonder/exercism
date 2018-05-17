class DnaTranscriber {
//   constructor() {
//     this.dna = ['A', 'C', 'G', 'T']
//     this.rna = ['U', 'G', 'C', 'A']
//   }

//   toRna(strand) {
//     return strand.split('').map(nt => {
//       if (!this.dna.includes(nt)) {
//         throw new Error('Invalid input')
//       }
//       return this.rna[this.dna.indexOf(nt)]
//     }).join('')
//   }

  constructor() {
    this.key = {
      A: 'U',
      C: 'G',
      G: 'C',
      T: 'A'
    }
  }

  toRna(strand) {
    if (!strand.length) {
      return ''
    }

    if (!this.key[strand.charAt(0)]) {
      throw new Error('Invalid input')
    }

    return this.key[strand.charAt(0)] + this.toRna(strand.substr(1))
  }

}

module.exports = DnaTranscriber;