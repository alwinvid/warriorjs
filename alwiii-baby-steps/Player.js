class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty()) {
      if (warrior.health() < 10) return warrior.rest();
    }
    if (!warrior.feel().isEmpty()) return warrior.attack();
    warrior.walk();
  }
}
