const TileTypes = require('./tiles/TileTypes');
const Player = require('./Player');

class GameState {
  constructor(gameMap, players, turn, currentPlayerID) {
    this.gameMap = gameMap;
    this.players = players;
    this.turn = turn;
    this.currentPlayerID = currentPlayerID;
  }

  static createNewGame(playerCount, rows, cols) {
    let map = [];
    for (let x = 0; x < rows; x++) {
      let col = [];
      for (let y = 0; y < cols; y++) {
        col.push(new TileTypes.Empty(null));
      }
      map.push(col)
    }

    let players = [];
    for (let p = 0; p < playerCount; p++) {
      players.push(new Player(p, true));
    }

    // set the 2 players bases at the
    map[0][0] = new TileTypes.Home(0);
    map[rows - 1][cols - 1] = new TileTypes.Home(1);

    return new GameState(map, players, 0, 0);
  }

/////////////////////////////     getters     //////////////////////////////////
  getMap() {
    return this.gameMap;
  }

  getTurn() {
    return this.turn;
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerID];
  }

  getPlayers() {
    return this.players;
  }

  getPlayer(playerID) {
    return this.players[playerID];
  }

/////////////////////////////     setters     //////////////////////////////////

  setMap(gameMap) {
    this.gameMap = gameMap;
    return this;
  }

  increaseTurn() {
    this.turn += 1;
    do {
      this.currentPlayerID = (this.currentPlayerID + 1) % this.players.length;
    } while (!this.getCurrentPlayer().isAlive())
    return this;
  }

/////////////////////////////      other      //////////////////////////////////
  isValidTurn(x, y, tile) {
    return tile.isValidTurn(this.getCurrentPlayer(), x, y, this.getMap());
  }

  isValidTurn(x, y, tile) {
    return tile.isValidTurn(this.getCurrentPlayer(), x, y, this.getMap());
  }

  takeTurn(x, y, tile) {
    let gameMap = tile.takeTurn(this.getCurrentPlayer(), x, y, this.getMap());
    return this.setMap(gameMap).increaseTurn();
  }
}

module.exports = GameState;
