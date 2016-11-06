const {Record, List} = require('../extern/immutable.js');
const Tile = require('./Tile');

const playerColorPaletteList = [
  { // amber
    '50': '#FFF8E1',
    '100': '#FFECB3',
    '200': '#FFE082',
    '300': '#FFD54F',
    '400': '#FFCA28',
    '500': '#FFC107',
    '600': '#FFB300',
    '700': '#FFA000',
    '800': '#FF8F00',
    '900': '#FF6F00',
  },
  { // light blue
    '50': '#E1F5FE',
    '100': '#B3E5FC',
    '200': '#81D4FA',
    '300': '#4FC3F7',
    '400': '#29B6F6',
    '500': '#03A9F4',
    '600': '#039BE5',
    '700': '#0288D1',
    '800': '#0277BD',
    '900': '#01579B',
  },
  { // light green
    '50': '#F1F8E9',
    '100': '#DCEDC8',
    '200': '#C5E1A5',
    '300': '#AED581',
    '400': '#9CCC65',
    '500': '#8BC34A',
    '600': '#7CB342',
    '700': '#689F38',
    '800': '#558B2F',
    '900': '#33691E',
  },
  {
    '50': '#FFEBEE',
    '100': '#FFCDD2',
    '200': '#EF9A9A',
    '300': '#E57373',
    '400': '#EF5350',
    '500': '#F44336',
    '600': '#E53935',
    '700': '#D32F2F',
    '800': '#C62828',
    '900': '#B71C1C',
  },
  {
    '50': '#F3E5F5',
    '100': '#E1BEE7',
    '200': '#CE93D8',
    '300': '#BA68C8',
    '400': '#AB47BC',
    '500': '#9C27B0',
    '600': '#8E24AA',
    '700': '#7B1FA2',
    '800': '#6A1B9A',
    '900': '#4A148C',
  },
];

class GameState extends Record({
  turn: 0, // which turn
  gameMap: null, // 2d array
  playerState: new List(), // list of players
}) {
  constructor(turn, gameMap, playerState) {
    super({
      turn,
      gameMap,
      playerState,
    });

    createNewGame(playerCount, rows, cols) {
      let map = new List();
      for (let x = 0; x < rows; x++) {
        let col = new List();
        for (let y = 0; y < cols; y++) {
          col = col.push(new Tile({owner: 0}));
        }
        map = map.push(col)
      }
      let players = new List();
      return new self(0, map, )
    }
  }
}

module.exports = GameState;
