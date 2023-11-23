class Player {
  constructor() {
    this.health = 0;
    this.direction = "forward";
  }

  //main function
  playTurn(warrior) {
    if (warrior.feel(this.direction).isEmpty()) {
      this.handleEmptySpace(warrior);
    } else {
      this.handleOccupiedSpace(warrior);
    }

    this.health = warrior.health();
  }

  handleEmptySpace(warrior) {
    if (warrior.health() < 20) {
      this.handleLowHealth(warrior);
    } else {
      warrior.walk(this.direction);
    }
  }
  handleLowHealth(warrior) {
    if (warrior.health() < this.health) {
      warrior.think("Oh no, I am losing health");
      if (warrior.health() > 10) warrior.walk();
      else warrior.walk("backward");
    } else {
      warrior.rest();
    }
  }
  handleOccupiedSpace(warrior) {
    const space = warrior.feel(this.direction);

    if (space.isWall()) {
      this.direction = "forward";
    } else if (space.getUnit().isEnemy()) {
      warrior.attack();
    } else if (space.getUnit().isBound()) {
      warrior.rescue(this.direction);
      this.direction = "forward";
    }
  }
}
