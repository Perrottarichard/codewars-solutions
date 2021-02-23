function diamond(n){
    if(n % 2 === 0 || n <= 0){
      return null
    }
    let top = ''
    let bottom = ''
    let s = '*'
    for(let i=1; i <= n; i+= 2){
        let stars = s.repeat(i)
        let spaces = ' '.repeat((n - i) /2)
        top = top + spaces + stars + '\n'
    }
      for(let i=n-2; i > 0; i-= 2){
        let stars = s.repeat(i)
        let spaces = ' '.repeat((n - i)/2)
        bottom = bottom + spaces + stars + '\n'
    }
    return top + bottom
  }

  console.log(diamond(1))
  console.log(diamond(3))
  console.log(diamond(5))