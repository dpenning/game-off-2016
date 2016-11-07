const React = require('react');
const Hexagon = require('./Hexagon.react');

const SQRT_3 = Math.sqrt(3);

const hexagon_margins = 8;
const hexagon_radius = 40;
const hexagon_width_spacing = Math.abs(
  Math.cos(Math.PI * 1 / 6) - Math.cos(Math.PI * 5 / 6)
) * hexagon_radius + hexagon_margins;
const hexagon_height_spacing = hexagon_width_spacing * SQRT_3 / 2;
const top_offset = hexagon_width_spacing;
const left_offset = hexagon_height_spacing;

class GameMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // for each row add a hexagon
    const rows = this.props.rows;
    const cols = this.props.cols;
    let hexagons = [];
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        hexagons.push(
          <Hexagon
            originY={hexagon_height_spacing * y + top_offset}
            originX={
              hexagon_width_spacing * x +
              left_offset +
              (y % 2 ? hexagon_width_spacing / 2 : 0)
            }
            color={'black'}
            borderColor={'white'}
            radius={hexagon_radius}
          />
        );
      }
    }
    return (
      <svg
        width="calc(100vw)"
        height="calc(100vh)"
        overflow="scroll">
        {hexagons}
      </svg>
    );
  }
}

module.exports = GameMap;
