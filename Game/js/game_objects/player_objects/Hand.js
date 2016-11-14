class Hand {
  constructor(handArr) {
    this.hand = handArr;
  }

  static createEmpty() {
    return new Hand([]);
  }

  addTile(tile) {
    this.hand.push(tile);
    return this;
  }

  removeTileByIndex(index);
  this.hand.splice(index, 1);
  return this;

  getTiles() {
    return this.hand;
  }
}

module.exports = Hand;
