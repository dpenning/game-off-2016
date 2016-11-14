const playerColorPaletteList = [
  { // Amber
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
    'A100': '#FFFF8D',
    'A200': '#FFFF00',
    'A400': '#FFEA00',
    'A700': '#FFD600',
  },
  { // Light Blue
    'name': 'Light Blue',
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
    'A100': '#80D8FF',
    'A200': '#40C4FF',
    'A400': '#00B0FF',
    'A700': '#0091EA',
  },
  { // Red
    'name': 'Red',
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
    'A100': '#FF8A80',
    'A200': '#FF5252',
    'A400': '#FF1744',
    'A700': '#D50000',
  },
  { // Deep Purple
    'name': 'Deep Purple',
    '50': '#EDE7F6',
    '100': '#D1C4E9',
    '200': '#B39DDB',
    '300': '#9575CD',
    '400': '#7E57C2',
    '500': '#673AB7',
    '600': '#5E35B1',
    '700': '#512DA8',
    '800': '#4527A0',
    '900': '#311B92',
    'A100': '#B388FF',
    'A200': '#7C4DFF',
    'A400': '#651FFF',
    'A700': '#6200EA',
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
