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
      warrior.attack();
    }
    this.health = warrior.health();
  }
}
