const Tile = require('./Tile');
const Player = require('./Player');

class GameState {
  constructor(gameMap, players, turn, currentPlayer) {
    this.gameMap = gameMap;
    this.players = players;
    this.turn = turn;
    this.currentPlayer = currentPlayer;
  }

  static createNewGame(playerCount, rows, cols) {
    let map = [];
    for (let x = 0; x < rows; x++) {
      let col = [];
      for (let y = 0; y < cols; y++) {
        col.push(new Tile(null));
      }
      map.push(col)
    }

    let players = [];
    for (let p = 0; p < playerCount; p++) {
      players.push(new Player(p));
    }

    return new GameState(map, players, 0, 0);
  }

  ///////////////////////////     getters     //////////////////////////////////
  getMap() {
    return this.gameMap;
  }

  getTurn() {
    return this.turn;
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayer];
  }

  getPlayers() {
    return this.players;
  }

  getPlayer(playerID) {
    return this.players[playerID];
  }

  ///////////////////////////     setters     //////////////////////////////////


  ///////////////////////      turn functions      /////////////////////////////
  takeTurn(x, y) {
    if (this.isValidTurn(x, y)) {
      this.gameMap[x][y] = this.gameMap[x][y].setOwnerID(this.currentPlayer);
      this.turn += 1;
      this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
    }
    return this;
  }

  isValidTurn(x, y) {
    const tile = this.gameMap[x][y];
    return tile.owner == null;
  }
}

module.exports = GameState;
