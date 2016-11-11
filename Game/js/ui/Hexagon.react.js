const React = require('react');

const OUTER_SIZE = 4;
const BORDER_SIZE = 6;

class Hexagon extends React.Component {
  constructor(props) {
    super(props);
  }

  _onClick() {
    this.props.onClick();
  }

  calcHexagonCoordinates(x, y, radius) {
    let coords = "";

    for(let i = 0; i < 6; i++) {
      let rads = (i * Math.PI / 3) + Math.PI / 2;
      coords +=
        (Math.cos(rads) * radius + x).toString() + "," +
        (Math.sin(rads) * radius + y).toString() + " ";
    }

    return coords;
  }

  calcHexagonOuterString() {
    return this.calcHexagonCoordinates(
      this.props.originX,
      this.props.originY,
      this.props.radius
    );
  }

  calcHexagonBorderString() {
    return this.calcHexagonCoordinates(
      this.props.originX,
      this.props.originY,
      this.props.radius - OUTER_SIZE
    );
  }

  calcHexagonInnerString() {
    return this.calcHexagonCoordinates(
      this.props.originX,
      this.props.originY,
      this.props.radius - BORDER_SIZE
    );
  }

  // hexagons should be rendered inside an svg element
  // (game map will be the base svg element)
  render() {
    return (
      <g className={'Hexagon_container'}>
        <polygon
          fill={this.props.outerColor}
          points={this.calcHexagonOuterString()}
          onClick={() => this._onClick()}>
        </polygon>
        <polygon
          fill={this.props.borderColor}
          points={this.calcHexagonBorderString()}
          onClick={() => this._onClick()}>
        </polygon>
        <polygon
          fill={this.props.color}
          points={this.calcHexagonInnerString()}
          onClick={() => this._onClick()}>
        </polygon>
        {this.props.children}
      </g>
    );
  }
}

module.exports = Hexagon;
