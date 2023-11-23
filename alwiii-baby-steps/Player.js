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
    const look = warrior.look();

    if (look[1]?.getUnit()?.isEnemy()) {
      warrior.think("There's an enemy in range i can take him down");
      warrior.shoot();
    } else if (look[2]?.getUnit()?.isEnemy()) {
      warrior.think("There's an enemy in range i can take him down");
      if (!look[1]?.isEmpty()) {
        warrior.think("but i might hurt a captive");
        warrior.walk();
      } else warrior.shoot();
    } else if (warrior.health() < 20) {
      this.handleLowHealth(warrior);
    } else {
      warrior.walk(this.direction);
    }
  }
  handleLowHealth(warrior) {
    if (warrior.health() < this.health) {
      warrior.think("Oh no, I am losing health");
      if (warrior.health() > 10) {
        warrior.think("but i can still keep going");
        warrior.walk();
      } else warrior.walk("backward");
    } else {
      warrior.rest();
    }
  }
  handleOccupiedSpace(warrior) {
    const space = warrior.feel(this.direction);

    if (space.isWall()) {
      warrior.think("who put this wall here?");
      warrior.pivot();
    } else if (space.getUnit().isEnemy()) {
      warrior.attack();
    } else if (space.getUnit().isBound()) {
      warrior.rescue(this.direction);
      this.direction = "forward";
    }
  }
}
