const React = require('react');
const Hexagon = require('./Hexagon.react');
const Palette = require('../game_objects/Palette');

const {
  HEXAGON_MARGINS,
  HEXAGON_RADIUS,
  HEXAGON_WIDTH_SPACING,
  HEXAGON_HEIGHT_SPACING,
  TOP_OFFSET,
  LEFT_OFFSET,
  IMAGE_SIZE,
} = require('../game_objects/HexagonConsts');


const VALID_MOVE_OVERLAY_OUTER = '#00CC00';
const VALID_MOVE_OVERLAY_BORDER = '#00AA00';



class GameMap extends React.Component {
  render() {
    const player = this.props.game.getCurrentPlayer();
    const currentPlayerColorPalette =
      Palette.getPlayerColorPalette(player.getID());
    const selectedTile = this.props.selectedTile;

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
          HEXAGON_WIDTH_SPACING * x +
          LEFT_OFFSET +
          (y % 2 ? HEXAGON_WIDTH_SPACING / 2 : 0);
        const originY = HEXAGON_HEIGHT_SPACING * y + TOP_OFFSET;

        const isValidTurn = selectedTile.isValidTurn(player, x, y, map);

        hexagons.push(
          <Hexagon
            key={x.toString() + "," + y.toString()}
            originY={originY}
            originX={originX}
            outerColor={isValidTurn ? VALID_MOVE_OVERLAY_OUTER : colorPalette['700']}
            borderColor={isValidTurn ? VALID_MOVE_OVERLAY_BORDER : colorPalette['600']}
            color={colorPalette['500']}
            radius={HEXAGON_RADIUS}
            onClick={() => this.props.onTakeTurn(x, y)}>
            <image
              onClick={() => this.props.onTakeTurn(x, y)}
              href={tile.getImageURI()}
              x={originX - IMAGE_SIZE / 2}
              y={originY - IMAGE_SIZE / 2}
              height={IMAGE_SIZE}
              width={IMAGE_SIZE}
            />
          </Hexagon>
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
        backgroundColor: currentPlayerColorPalette['100'],
        transition: '1s',
      }}>
        <svg
          width={svg_width + HEXAGON_RADIUS}
          height={svg_height + HEXAGON_RADIUS}>
          {hexagons}
        </svg>
      </div>
    );
  }
}

module.exports = GameMap;
