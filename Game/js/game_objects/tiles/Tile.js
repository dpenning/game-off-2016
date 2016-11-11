class Tile {
  constructor(ownerID) {
    this.ownerID = ownerID;
    this.name = "Tile";
    this.imageURI = null;
  }

/////////////////////////////     getters     //////////////////////////////////
  getOwnerID() {
    return this.ownerID;
  }

  getType() {
    return this.name;
  }

  getImageURI() {
    return this.imageURI
  }

/////////////////////////////     setters     //////////////////////////////////
  setOwnerID(ownerID) {
    this.ownerID = ownerID;
    return this;
  }

  setType(name) {
    return 'Tile';
  }

  setImageURI(imageURI) {
    this.imageURI = imageURI;
    return this;
  }

/////////////////////////////      other      //////////////////////////////////
  hasOwner() {
    return this.ownerID !== null;
  }

  getConfig() {
    return {
      ownerURI: this.getOwnerID(),
      name: this.getType(),
      imageURI: this.getImageURI(),
    }
  }

  // function that validates the turn
  // override this function in your custom tile type
  _childValidateTurn(player, x, y, gameMap) {return true;}

  isValidTurn(player, x, y, gameMap) {
    if (x >= gameMap.length || x < 0) {
      return false;
    }
    const row = gameMap[x];
    if (y >= row.length || y < 0) {
      return false;
    }
    return this._childValidateTurn(player, x, y, gameMap);
  }

  // takes the player, position, and game map and
  // returns a game map affected by the tiles
  // override this function in your custom tile type
  // if you need to manipulate different tiles
  takeTurn(player, x, y, gameMap) {
    gameMap[x][y] = this;
    return gameMap;
  }
};

module.exports = Tile;
