class Player {
  constructor(id, alive) {
    this.id = id;
    this.alive = alive
  }

  ///////////////////////////     getters     //////////////////////////////////
  getID() {
    return this.id;
  }

  isAlive() {
    return this.alive;
  }

  ///////////////////////////     setters     //////////////////////////////////
  setAlive(alive) {
    this.alive = alive;
    return this;
  }

  ///////////////////////      turn functions      /////////////////////////////
  getConfig() {
    return {
      id: this.id,
      alive: this.alive,
    };
  }
}

module.exports = Player;
