const React = require('react');
const Hexagon = require('./Hexagon.react');

const top_offset = 112;
const left_offset = 100;

const hexagon_width = 112;
const hexagon_height = 98;

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
            top={hexagon_height * y + top_offset}
            left={hexagon_width * x + left_offset + (y % 2 ? hexagon_width / 2 : 0)}
          />
        );
      }
    }
    return (
      <div>
        {hexagons}
      </div>
    );
  }
}

module.exports = GameMap;
