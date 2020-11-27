function DNAStrand(dna) {
  return dna.split('').map(c => c === 'A' ? 'T' : c === 'G' ? 'C' : c === 'T' ? 'A' : c === 'C' ? 'G' : null).join('')
}

console.log(DNAStrand("ATTGC"))
console.log(DNAStrand("GTAT"))