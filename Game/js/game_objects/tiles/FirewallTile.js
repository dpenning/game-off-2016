const Tile = require('./Tile');
const GameMapUtils = require('../../game_objects/GameMapUtils');

class WormTile extends Tile {
  constructor(id) {
    super(id);
    this.name = 'Firewall';
    this.imageURI = 'image/firewall.png';
  }

  _childValidateTurn(player, x, y, gameMap) {
    const current_tile = gameMap[x][y];
    const current_owner_id = gameMap[x][y].getOwnerID();
    return !current_owner_id || current_owner_id == player.getID();
  }
}

module.exports = WormTile;
