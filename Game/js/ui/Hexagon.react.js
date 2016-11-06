const React = require('react');

class Hexagon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{top: this.props.top, left: this.props.left}}
        className={'Hexagon_container'}>
        <div className={'Hexagon_outer'}>
          <div className={'Hexagon_border'}>
            <div className={'Hexagon_inner'}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Hexagon;
