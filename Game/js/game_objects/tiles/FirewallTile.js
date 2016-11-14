const Tile = require('./Tile');
const GameMapUtils = require('../../game_objects/GameMapUtils');

class FirewallTile extends Tile {
  constructor(id) {
    super(id);
    this.name = 'Firewall';
    this.imageURI = 'image/firewall.png';
  }

  _childValidateTurn(player, x, y, gameMap) {
    const current_tile = gameMap[x][y];
    if (current_tile.getType() === 'Home') {
      return false;
    }
    const current_owner_id = gameMap[x][y].getOwnerID();
    if (current_owner_id !== player.getID() && current_owner_id !== null) {
      return false;
    }

    // if any positions are a player worm, then the move is valid
    const adjacentPositions = GameMapUtils.getAdjacentTiles(x, y, 3);
    const hasAdjacentUserTile = adjacentPositions.filter((position) =>
      position.x < gameMap.length && position.x >= 0 &&
      position.y < gameMap[x].length && position.y >= 0 &&
      gameMap[position.x][position.y].getOwnerID() == player.getID()
    ).length > 0;
    return (
      hasAdjacentUserTile
    );
  }
}

module.exports = FirewallTile;
