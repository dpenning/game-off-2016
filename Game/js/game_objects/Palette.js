const playerColorPaletteList = [
  { // amber
    'name': 'Amber',
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
    'name': 'light blue',
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
    'name': 'light green',
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
  { // red
    'name': 'red',
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
  { // purple
    'name': 'purple',
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

const notOwnedColorPalette = { // non owner: Blue Grey
  'name': 'Blue Grey',
  '50': '#ECEFF1',
  '100': '#CFD8DC',
  '200': '#B0BEC5',
  '300': '#90A4AE',
  '400': '#78909C',
  '500': '#607D8B',
  '600': '#546E7A',
  '700': '#455A64',
  '800': '#37474F',
  '900': '#263238',
};

class Palette {
  static getPlayerColorPalette(playerID) {
    return (
      playerID !== null
        ? playerColorPaletteList[playerID]
        : notOwnedColorPalette
    );
  }
}

module.exports = Palette;
