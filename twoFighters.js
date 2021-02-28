class Fighter {
  constructor(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
      return this.name;
    };
  }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacks = 10;
  let attacker = firstAttacker;
  for (let i = 0; i < attacks; i++) {
    if (fighter1.name === attacker) {
      fighter2.health -= fighter1.damagePerAttack;
      attacker = fighter2.name;
    } else {
      fighter1.health -= fighter2.damagePerAttack;
      attacker = fighter1.name;
    }
    if (fighter1.health <= 0) {
      return fighter2.name;
    } else if (fighter2.health <= 0) {
      return fighter1.name;
    }
  }
}

console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
); //Lew
