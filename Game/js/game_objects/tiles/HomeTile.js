const Tile = require('./Tile');

class HomeTile extends Tile {
  constructor(id) {
    super(id);
    this.name = 'Home';
    this.imageURI = 'image/laptop.png';
  }
}

module.exports = HomeTile;
