const React = require('react');
const Hexagon = require('./Hexagon.react');
const TileTypes = require('../game_objects/tiles/TileTypes');
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

class Hand extends React.Component {
  render() {
    const currentPlayer = this.props.game.getCurrentPlayer();
    const colorPalette = Palette.getPlayerColorPalette(currentPlayer.getID());

    let position = HEXAGON_RADIUS;
    const tilesReact = Object.keys(TileTypes)
      .filter(tileType =>
        tileType != "Empty" &&
        tileType != "Home"
      ).map(tileType => {
        const tileTypeJS = TileTypes[tileType];
        const tile = new tileTypeJS();
        const hexagon = (
          <Hexagon
            key={tileType}
            originY={HEXAGON_RADIUS}
            originX={position}
            outerColor={
              this.props.selectedTile.getType() == tileType
                ? VALID_MOVE_OVERLAY_OUTER
                : colorPalette['700']}
            borderColor={
              this.props.selectedTile.getType() == tileType
                ? VALID_MOVE_OVERLAY_BORDER
                : colorPalette['600']}
            color={colorPalette['500']}
            radius={HEXAGON_RADIUS}
            onClick={() => this.props.onSelectTileType(tileType)}>
            <image
              onClick={() => this.props.onSelectTileType(tileType)}
              href={tile.getImageURI()}
              x={position - IMAGE_SIZE / 2}
              y={HEXAGON_RADIUS - IMAGE_SIZE / 2}
              height={IMAGE_SIZE}
              width={IMAGE_SIZE}
            />
          </Hexagon>
        );
        position += HEXAGON_WIDTH_SPACING;
        return hexagon;
    });

    return (
      <svg
        width={HEXAGON_WIDTH_SPACING * 3}
        height={HEXAGON_RADIUS * 2}>
        {tilesReact}
      </svg>
    );

    // for each of the tile tiles render the tile next to each other
    // on click of the tile, set the selected tile
  }
}

module.exports = Hand;
