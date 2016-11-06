const {Record, List} = require('../extern/immutable.js');

class Tile extends Record({
  owner: -1,

}) {
  ///////////////////////////     getters     //////////////////////////////////
  getOwnerID() {
    return this.owner;
  }

  ///////////////////////////     setters     //////////////////////////////////
  setOwnerID(id) {
    return new this({owner: id});
  }

  ///////////////////////////      other      //////////////////////////////////
  hasOwner() {
    return this.owner > -1;
  }
};

module.exports = Tile;
