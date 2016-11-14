class Deck {
  constructor(deckArr) {
    this.deck = deckArr;
  }

  static createEmpty() {
    return new Deck([]);
  }

  addTile(tile) {
    this.deck.push(tile);
    return this;
  }

  drawTile() {
    return this.deck.pop();
  }

  removeTileByIndex(index);
  this.deck.splice(index, 1);
  return this;

  getTiles() {
    return this.deck;
  }
}

module.exports = Deck;
