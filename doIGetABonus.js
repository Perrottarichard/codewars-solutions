function bonusTime(salary, bonus) {
  if (bonus) {
    return "\u00A3" + salary * 10;
  } else {
    return "\u00A3" + salary;
  }
}
console.log(bonusTime(10000, true)); //'£100000'
