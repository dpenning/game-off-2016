const React = require('react');
const Hexagon = require('./Hexagon.react');
const Palette = require('../game_objects/Palette');

const SQRT_3 = Math.sqrt(3);

const hexagon_margins = 8;
const hexagon_radius = 40;
const hexagon_width_spacing = Math.abs(
  Math.cos(Math.PI * 1 / 6) - Math.cos(Math.PI * 5 / 6)
) * hexagon_radius + hexagon_margins;
const hexagon_height_spacing = hexagon_width_spacing * SQRT_3 / 2;
const top_offset = hexagon_radius;
const left_offset = hexagon_radius;

class GameMap extends React.Component {
  render() {
    let svg_width = 0;
    let svg_height = 0;

    // for each row add a hexagon
    const map = this.props.game.getMap();
    let hexagons = [];
    map.forEach((row, x) => {
      row.forEach((tile, y) => {
        const ownerID = tile.getOwnerID();
        const colorPalette = Palette.getPlayerColorPalette(ownerID);

        const originX =
          hexagon_width_spacing * x +
          left_offset +
          (y % 2 ? hexagon_width_spacing / 2 : 0);
        const originY = hexagon_height_spacing * y + top_offset;

        hexagons.push(
          <Hexagon
            key={x.toString() + "," + y.toString()}
            originY={originY}
            originX={originX}
            color={colorPalette['500']}
            borderColor={colorPalette['50']}
            radius={hexagon_radius}
            onClick={() => this.props.onTakeTurn(x, y)}
          />
        );

        svg_width = Math.max(svg_width, originX);
        svg_height = Math.max(svg_height, originY);
      });
    });
    return (
      <div style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <svg
          width={svg_width + hexagon_radius}
          height={svg_height + hexagon_radius}>
          {hexagons}
        </svg>
      </div>
    );
  }
}

module.exports = GameMap;
