const FirewallTile = require('./FirewallTile');
const HomeTile = require('./HomeTile');
const WormTile = require('./WormTile');
const Tile = require('./Tile');

module.exports = {
  Firewall: FirewallTile,
  Worm: WormTile,
  Home: HomeTile,
  Empty: Tile,
}
