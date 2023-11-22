class Player {
  Player() {
    this.health = 0;
  }
  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      if (warrior.health() < 15) {
        if (warrior.health() < this.health) {
          warrior.think("Oh no, i am losing health");
          warrior.walk();
        } else warrior.rest();
      } else warrior.walk();
    } else if (!warrior.feel().isEmpty()) {
      if (warrior.feel().getUnit().isEnemy()) warrior.attack();
      else if (warrior.feel().getUnit().isBound()) warrior.rescue();
    }
    this.health = warrior.health();
  }
}
