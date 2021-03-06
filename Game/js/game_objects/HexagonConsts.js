
const HEXAGON_MARGINS = 8;
const HEXAGON_RADIUS = 40;
const HEXAGON_WIDTH_SPACING =
  Math.abs(
    Math.cos(Math.PI * 1 / 6) - Math.cos(Math.PI * 5 / 6)
  ) * HEXAGON_RADIUS + HEXAGON_MARGINS;
const SQRT_3 = Math.sqrt(3);
const HEXAGON_HEIGHT_SPACING = HEXAGON_WIDTH_SPACING * SQRT_3 / 2;
const TOP_OFFSET = HEXAGON_RADIUS;
const LEFT_OFFSET = HEXAGON_RADIUS;
const IMAGE_SIZE = 50;

module.exports = {
  HEXAGON_MARGINS,
  HEXAGON_RADIUS,
  HEXAGON_WIDTH_SPACING,
  HEXAGON_HEIGHT_SPACING,
  TOP_OFFSET,
  LEFT_OFFSET,
  IMAGE_SIZE,
  SQRT_3,
};
