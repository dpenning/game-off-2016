const {Record} = require('../extern/immutable.js');

class Tile {
  constructor(ownerID) {
    this.ownerID = ownerID;
  }

  ///////////////////////////     getters     //////////////////////////////////
  getOwnerID() {
    return this.ownerID;
  }

  ///////////////////////////     setters     //////////////////////////////////
  setOwnerID(ownerID) {
    this.ownerID = ownerID;
    return this;
  }

  ///////////////////////////      other      //////////////////////////////////
  hasOwner() {
    return this.ownerID !== null;
  }

  getConfig() {
    return {
      owner: this.owner
    }
  }
};

module.exports = Tile;
