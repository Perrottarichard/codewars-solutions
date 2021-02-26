function solution(str, ending) {
  return (
    str
      .split("")
      .slice(str.length - ending.length)
      .join("") === ending
  );
}

console.log(solution("abcde", "cde")); //true
console.log(solution("abcde", "abc")); //false
