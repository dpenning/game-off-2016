const React = require('react');
const Palette = require('../game_objects/Palette');
const Hand = require('./hand.react');

class ActionBar extends React.Component {
  render() {
    const currentPlayer = this.props.game.getCurrentPlayer();
    const colorPalette = Palette.getPlayerColorPalette(currentPlayer.getID());

    const playerNameStyle = Object.assign({
      color: colorPalette['600'],
    }, playerNameDefaultStyle);

    const playerName = (
      <div style={playerNameStyle}>
        {"Player " + (currentPlayer.getID() + 1).toString()}
      </div>
    );

    const containerStyle = Object.assign({
      borderTop: '2px solid ' + colorPalette['700'],
    }, containerDefaultStyle);
    return (
      <div style={containerStyle}>
        {playerName}
        <Hand
          game={this.props.game}
          selectedTile={this.props.selectedTile}
          onSelectTileType={
            (tileType) => this.props.onSelectTileType(tileType)
          }
        />
      </div>
    );
  }
}

const playerNameDefaultStyle = {
  fontWeight: '700',
  fontFamily: 'helvetica',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '16px',
  fontSize: 'x-large',
};

const containerDefaultStyle = {
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '100px',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

module.exports = ActionBar;
