const Tile = require('./Tile');
const GameMapUtils = require('../../game_objects/GameMapUtils');

class WormTile extends Tile {
  constructor(id) {
    super(id);
    this.name = 'Worm';
    this.imageURI = 'image/worm.png';
  }

  _childValidateTurn(player, x, y, gameMap) {
    const current_tile = gameMap[x][y];
    const current_owner_id = gameMap[x][y].getOwnerID();

    // if any positions are a player worm, then the move is valid
    const adjacentPositions = GameMapUtils.getAdjacentTiles(x, y, 1);
    const hasAdjacentUserTile = adjacentPositions.filter((position) =>
      position.x < gameMap.length && position.x >= 0 &&
      position.y < gameMap[x].length && position.y >= 0 &&
      gameMap[position.x][position.y].getOwnerID() == player.getID()
    ).length > 0;
    return (
      hasAdjacentUserTile &&
      current_owner_id !== player.getID() &&
      current_tile.getType() !== 'Firewall'
    );
  }
}

module.exports = WormTile;
