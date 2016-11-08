const React = require('react');
const Hexagon = require('./Hexagon.react');
const GameState = require('../game_objects/GameState');
const Palette = require('../game_objects/Palette');

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
    const game = GameState.createNewGame(2, this.props.rows, this.props.cols);
    this.state = {
      game,
    };
  }

  _takeTurn(x, y) {
    this.setState({
      game: this.state.game.takeTurn(x, y),
    });
  }

  render() {
    // for each row add a hexagon
    const map = this.state.game.getMap();
    let hexagons = [];
    map.forEach((row, x) => {
      row.forEach((tile, y) => {
        const ownerID = tile.getOwnerID();
        const colorPalette = Palette.getPlayerColorPalette(ownerID);
        hexagons.push(
          <Hexagon
            key={x.toString() + "," + y.toString()}
            originY={hexagon_height_spacing * y + top_offset}
            originX={
              hexagon_width_spacing * x +
              left_offset +
              (y % 2 ? hexagon_width_spacing / 2 : 0)
            }
            color={colorPalette['500']}
            borderColor={colorPalette['50']}
            radius={hexagon_radius}
            onClick={() => this._takeTurn(x, y)}
          />
        );
      });
    });
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
