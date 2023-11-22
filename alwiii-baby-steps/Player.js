class Player {
  playTurn(warrior) {
    if (warrior.feel().isEmpty()) return warrior.walk();
    warrior.attack();
  }
}
